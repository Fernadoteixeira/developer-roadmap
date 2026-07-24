# Evite imagens Base64

> Você poderia eventualmente converter imagens minúsculas para base64, mas na verdade não é a melhor prática.

Usar imagens codificadas em Base64 em seu frontend pode ter várias desvantagens.

Primeiro, as imagens codificadas em Base64 são maiores em tamanho do que suas contrapartes binárias, o que pode retardar o tempo de carregamento do seu site.

Em segundo lugar, como as imagens codificadas em Base64 são incorporadas diretamente no HTML ou CSS, elas são incluídas no carregamento inicial da página, o que pode causar atrasos para usuários com conexões de Internet mais lentas.

Terceiro, as imagens codificadas em Base64 não se beneficiam do cache do navegador, pois fazem parte do HTML ou CSS e não são um recurso separado. Assim, toda vez que a página for carregada, as imagens serão baixadas novamente, mesmo que o usuário já tenha visitado a página anteriormente.

Quarto, as imagens codificadas em Base64 não são compatíveis com algumas versões antigas de navegadores.

Em vez de usar imagens codificadas em Base64, geralmente é recomendado usar arquivos de imagem binários e referenciá-los usando uma tag img em HTML, com um atributo src padrão. Isso permite que o navegador armazene a imagem em cache e a use para carregamentos de página subsequentes, resultando em tempos de carregamento mais rápidos e melhor experiência do usuário.

- [Codificação e desempenho Base64, Partes 1 e 2 por Harry Roberts](https://csswizardry.com/2017/02/base64-encoding-and-performance/)
- [Uma análise mais detalhada do desempenho da imagem Base64 – The Page Not Found Blog](http://www.andygup.net/a-closer-look-at-base64-image-performance/)
- [Quando codificar imagens em base64 (e quando não) | David Calhoun](https://www.davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/)