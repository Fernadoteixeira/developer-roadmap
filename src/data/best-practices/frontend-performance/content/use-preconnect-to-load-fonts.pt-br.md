# Pré-conectar em fontes

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

Quando você acessa um site, seu dispositivo precisa descobrir onde seu site está localizado e com qual servidor ele precisa se conectar. Seu navegador teve que entrar em contato com um servidor DNS e aguardar a conclusão da pesquisa antes de buscar o recurso (fontes, arquivos CSS...). Pré-buscas e pré-conexões permitem que o navegador pesquise as informações de DNS e comece a estabelecer uma conexão TCP com o servidor que hospeda o arquivo de fonte. Isso fornece um aumento de desempenho porque quando o navegador analisar o arquivo css com as informações da fonte e descobrir que precisa solicitar um arquivo de fonte do servidor, ele já terá pré-resolvido as informações de DNS e terá uma conexão aberta com o servidor pronta em seu pool de conexões.

- Antes de pré-buscar suas webfonts, use webpagetest para avaliar seu site
- Procure pesquisas de DNS em cor azul-petróleo e anote o host que está sendo solicitado
- Pré-busque suas webfonts em seu `<head>` e adicione eventualmente esses nomes de host que você também deve pré-buscar

- [Fontes Google mais rápidas com pré-conexão - CDN Planet](https://www.cdnplanet.com/blog/faster-google-webfonts-preconnect/)
- [Torne seu site mais rápido com dicas de pré-conexão | Viget](https://www.viget.com/articles/make-your-site-faster-with-preconnect-hints/)
- [Guia definitivo para dicas do navegador: pré-carregamento, pré-busca e pré-conexão - MachMetrics Speed Blog](https://www.machmetrics.com/speed-blog/guide-to-browser-hints-preload-preconnect-prefetch/)
- [Um guia abrangente para estratégias de carregamento de fontes — zachleat.com](https://www.zachleat.com/web/comprehensive-webfonts/#font-face)
- [typekit/webfontloader: Web Font Loader oferece controle adicional ao usar fontes vinculadas via @font-face.](https://github.com/typekit/webfontloader)