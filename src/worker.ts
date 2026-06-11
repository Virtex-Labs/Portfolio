export interface Env {
  ASSETS: any;
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);
    
    // Create a new response to modify headers since the original might be immutable
    const newResponse = new Response(response.body, response);
    
    // Inject Link response headers for agent discovery on the homepage
    if (url.pathname === '/' || url.pathname === '/index.html') {
      newResponse.headers.append('Link', '</.well-known/api-catalog>; rel="api-catalog"');
      newResponse.headers.append('Link', '</docs/api>; rel="service-doc"');
    }
    
    // Enforce correct Content-Type for API catalog
    if (url.pathname === '/.well-known/api-catalog') {
      newResponse.headers.set('Content-Type', 'application/linkset+json');
    }

    return newResponse;
  },
};
