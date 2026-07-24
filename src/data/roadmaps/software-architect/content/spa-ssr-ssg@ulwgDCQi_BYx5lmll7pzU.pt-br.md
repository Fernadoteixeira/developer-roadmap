# SPA x SSG x SSR

- **SPA**: um aplicativo de página única carrega apenas um único documento da web do servidor e, em seguida, atualiza o conteúdo desse documento sob demanda por meio de `Javascript APIs` sem recarregar o documento inteiro. React, Vue, Angular são os principais frameworks usados ​​para criar aplicativos de página única.
- **SSR**: Esta técnica usa um servidor como `Node.js` para renderizar totalmente o documento da web após o recebimento de uma solicitação e depois enviá-lo de volta ao cliente. Desta forma o usuário obtém um documento interativo com todas as informações necessárias sem ter que esperar o carregamento de nenhum arquivo JavaScript ou CSS.
- **SSG**: a geração de site estático renderiza o documento da web no servidor (como SSR), porém a página é renderizada em **tempo de construção**. Assim, ao invés de renderizar a página no servidor ao receber uma solicitação, a página já está renderizada no servidor, aguardando para ser atendida ao cliente.

Visite os seguintes recursos para saber mais:

- [@article@Web Design Patterns — SSR, SSG e SPA](https://medium.com/codex/web-design-patterns-ssr-ssg-and-spa-fadad7673dfe)
- [@article@Renderização na Web](https://web.dev/rendering-on-the-web/)
- [@feed@Explore as principais postagens sobre Desenvolvimento Web](https://app.daily.dev/tags/webdev?ref=roadmapsh)