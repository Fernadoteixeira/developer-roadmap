# X-Content-Type-Options: nosniff

> Enviar cabeçalho `X-Content-Type-Options: nosniff`.

Você deve enviar o cabeçalho `X-Content-Type-Options: nosniff` para evitar [ataques de detecção de tipo MIME](https://www.keycdn.com/support/what-is-mime-sniffing) em seu aplicativo da web. Este cabeçalho informa ao navegador para não substituir o tipo de conteúdo da resposta, mesmo que não seja o tipo esperado. Por exemplo, se um invasor conseguir fazer upload de um arquivo HTML com uma extensão disfarçada como .jpg, o servidor ainda poderá enviar o cabeçalho do tipo de conteúdo correto para o arquivo HTML. No entanto, alguns navegadores podem ignorar esse cabeçalho e tentar "farejar" o tipo de conteúdo com base no conteúdo real do arquivo, levando a um possível ataque de cross-site scripting (XSS).

Ao enviar o cabeçalho `X-Content-Type-Options: nosniff`, você diz ao navegador para sempre confiar no tipo de conteúdo fornecido e não tentar farejar o tipo de conteúdo. Isso ajuda a mitigar o risco de invasores explorarem incompatibilidades de tipos de conteúdo para entregar conteúdo malicioso a usuários desavisados.
