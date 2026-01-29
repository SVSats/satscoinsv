export default {
  async fetch(request, env) {
    // Intenta servir archivos estáticos de ASSETS
    let response = await env.ASSETS.fetch(request);
    
    // Si no encontró el archivo (ej. rutas SPA como /blog/post), sirve index.html
    if (response.status === 404) {
      response = await env.ASITES.fetch(new Request(`${new URL(request.url).origin}/index.html`, request));
    }
    
    return response;
  }
};
