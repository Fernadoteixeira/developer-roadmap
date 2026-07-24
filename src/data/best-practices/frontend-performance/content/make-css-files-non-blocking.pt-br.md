# CSS sem bloqueio

> Os arquivos CSS precisam ser sem bloqueio para evitar que o DOM demore para carregar.

Arquivos CSS podem bloquear o carregamento da página e atrasar a renderização da sua página. Usar `preload` pode realmente carregar os arquivos CSS antes que o navegador comece a mostrar o conteúdo da página.

Você precisa adicionar o atributo `rel` com o valor de pré-carregamento e adicionar `as="style"` no elemento `<link>`.

- [carregarCSS por grupo de filamentos](https://github.com/filamentgroup/loadCSS)
- [Exemplo de pré-carregamento de CSS usando loadCSS](https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf)
- [Pré-carregamento de conteúdo com rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
- [Pré-carregamento: Para que serve? — Revista Smashing](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)