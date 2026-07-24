# Opções do X-Frame: Negar

> Enviar cabeçalho `X-Frame-Options: deny`.

O cabeçalho `X-Frame-Options` evita que a página seja exibida em um iframe, que é comumente usado em ataques de clickjacking. Ao definir o valor deste cabeçalho como `deny`, você está informando ao navegador para não exibir a página em nenhum iframe. Isso ajuda a evitar que a página seja incorporada ao site de um invasor e reduz o risco de ataques de clickjacking.

- [@video@Tutorial - Cabeçalho HTTP de opções de quadro X e Click-Jacking](https://www.youtube.com/watch?v=Els0GRj0CQM)