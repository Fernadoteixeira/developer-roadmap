# Evite JavaScript embutido

> Evite ter vários códigos JavaScript incorporados no meio do seu corpo. Reagrupe seu código JavaScript dentro de arquivos externos ou eventualmente no `<head>` ou no final da sua página (antes de `</body>`).

Colocar código JavaScript incorporado diretamente em seu `<body>` pode tornar sua página mais lenta porque ela carrega enquanto o DOM está sendo construído. A melhor opção é usar arquivos externos com async ou defer para evitar o bloqueio do DOM. Outra opção é colocar alguns scripts dentro do seu `<head>`. Na maioria das vezes, código analítico ou pequeno script que precisa ser carregado antes que o DOM chegue ao processamento principal.

Certifique-se de que todos os seus arquivos sejam carregados usando `async` ou `defer` e decida sabiamente o código que você precisará injetar em seu `<head>`.

- [11 dicas para otimizar JavaScript e melhorar a velocidade de carregamento do site](https://www.upwork.com/hiring/development/11-tips-to-optimize-javascript-and-improve-website-loading-speeds/)