import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, url } = context;

  const response = await next();

  const acceptHeader = request.headers.get('Accept') || '';

  if (acceptHeader.includes('text/markdown') && response.headers.get('Content-Type')?.includes('text/html')) {
    const html = await response.text();

    let md = html
      .replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
      .replace(/<b\b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
      .replace(/<em\b[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
      .replace(/<i\b[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')
      .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
      .replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, '\n```\n$1\n```\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<img\b[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']*)["'][^>]*\/?>/gi, '![$1]($2)')
      .replace(/<img\b[^>]*src=["']([^"']*)["'][^>]*\/?>/gi, '![]($1)')
      .replace(/<h4\b[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n\n')
      .replace(/<h5\b[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n\n')
      .replace(/<h6\b[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n\n')

      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      .replace(/&hellip;/g, '…')
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))

      .replace(/\n{3,}/g, '\n\n')
      .trim();

    return new Response(md, {
      status: response.status,
      headers: {
        'Content-Type': 'text/markdown',
        'Vary': 'Accept',
        'x-markdown-tokens': Math.ceil(md.length / 4).toString(),
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  if (url.pathname === '/.well-known/api-catalog') {
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Content-Type', 'application/linkset+json');
    return newResponse;
  }

  return response;
});
