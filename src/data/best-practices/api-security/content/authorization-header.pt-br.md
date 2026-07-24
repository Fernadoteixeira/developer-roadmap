# Cabeçalho de autorização

> Use o cabeçalho `Authorization` padrão para enviar tokens em vez de cabeçalhos personalizados ou parâmetros de consulta/corpo

O envio de tokens na consulta ou nos parâmetros do corpo geralmente não é recomendado porque esses parâmetros podem ser registrados ou armazenados em cache por vários sistemas, incluindo servidores web, proxies e gateways. Isto pode potencialmente levar à exposição de dados confidenciais, incluindo tokens de autenticação.

Além disso, o envio de tokens em parâmetros de consulta ou corpo pode torná-los mais vulneráveis ​​a ataques de falsificação de solicitação entre sites (CSRF). Em um ataque CSRF, um invasor pode enganar um usuário para que ele envie uma solicitação que inclua seu token de autenticação, que o invasor pode usar para se passar pelo usuário e obter acesso à sua conta.

Por outro lado, usar o cabeçalho `Authorization` para enviar tokens ajuda a garantir que os tokens não sejam registrados ou armazenados em cache por sistemas intermediários e também pode ajudar a proteger contra ataques CSRF, permitindo que o servidor valide o token antes de processar a solicitação.
