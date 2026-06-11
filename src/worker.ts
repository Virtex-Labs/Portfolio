export interface Env {
  ASSETS: any;
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);
    
    // Markdown Content Negotiation Interceptor
    const acceptHeader = request.headers.get('Accept') || '';
    if (acceptHeader.includes('text/markdown') && response.headers.get('Content-Type')?.includes('text/html')) {
      const html = await response.text();
      
      // Basic HTML to Markdown converter
      let md = html
        .replace(/<head\b[^>]*>[\s\S]*?<\/head>/gi, '')
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, '')
        .replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n\n')
        .replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n\n')
        .replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n\n')
        .replace(/<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
        .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n\n')
        .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
        .replace(/<[^>]+>/g, '') // Strip all remaining tags
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&copy;/gi, '©')
        .replace(/^\s*[\r\n]/gm, '') // Remove empty lines
        .trim();

      return new Response(md, {
        headers: {
          'Content-Type': 'text/markdown',
          'x-markdown-tokens': Math.ceil(md.length / 4).toString(), // Rough token approximation
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Create a new response to modify headers since the original might be immutable
    const newResponse = new Response(response.body, response);
    
    // Enforce correct Content-Type for API catalog
    if (url.pathname === '/.well-known/api-catalog') {
      newResponse.headers.set('Content-Type', 'application/linkset+json');
    }

    return newResponse;
  },
};

