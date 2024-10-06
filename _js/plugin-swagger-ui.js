// code inspiration from https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/installation.md#unpkg
function swaggerUiPlugin(hook, vm) {
  hook.doneEach(() => {
    // get dom
    const html = document.querySelector('main section article');
    const link = document.querySelector('p a');
    // test if link is a swagger link
    if (link && link.textContent !== 'swagger') return;

    // create swagger script tag
    const swaggerScript = document.createElement('script');
    swaggerScript.src = 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js';
    // add css - top link has priority
    const cssLinks = [
      '/_css/plugin-swagger-ui.css',
      'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css'
    ];
    cssLinks.forEach((cssLink) => {
      const swaggerCss = document.createElement('link');
      swaggerCss.rel = 'stylesheet';
      swaggerCss.href = cssLink;
      document.head.prepend(swaggerCss);
    });

    // create place for swagger to populate and delete link
    const swaggerContentDiv = document.createElement('div');
    swaggerContentDiv.id = 'swagger-ui';
    html.appendChild(swaggerContentDiv);
    link.remove();

    // create hook and wait for script load 
    swaggerScript.onload = () => {
      document = SwaggerUIBundle({
        url: link.href,
        dom_id: '#swagger-ui',
      });
    };
    // load swagger-ui script
    document.body.appendChild(swaggerScript);
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [swaggerUiPlugin, ...($docsify.plugins || [])];
