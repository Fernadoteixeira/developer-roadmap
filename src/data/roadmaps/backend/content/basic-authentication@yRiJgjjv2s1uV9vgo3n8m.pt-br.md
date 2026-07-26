# Autenticação básica

A autenticação básica é um esquema simples de autenticação HTTP integrado ao protocolo HTTP. Funciona enviando as credenciais do usuário (nome de usuário e senha) codificadas no formato base64 dentro do cabeçalho HTTP. Quando um cliente faz uma solicitação a um servidor que requer autenticação, o servidor responde com um código de status 401 e um cabeçalho “WWW-Authenticate”. O cliente então reenvia a solicitação com o cabeçalho Authorization contendo a palavra "Basic" seguida pela string codificada em base64 de "username:password". Embora seja fácil de implementar, a Autenticação Básica tem limitações de segurança significativas: as credenciais são essencialmente enviadas em texto simples (o base64 é facilmente decodificado) e não fornece nenhuma criptografia. Portanto, ele só deve ser usado em conexões HTTPS para garantir que as credenciais estejam protegidas durante a transmissão. Devido à sua simplicidade e à falta de recursos de segurança avançados, a Autenticação Básica geralmente é recomendada apenas para cenários simples e de baixo risco ou como mecanismo de fallback.

Visite os seguintes recursos para saber mais:

- [@roadmap.sh@Autenticação básica HTTP](https://roadmap.sh/guides/http-basic-authentication)
- [@video@Autenticação básica em 5 minutos](https://www.youtube.com/watch?v=rhi1eIjSbvk)
- [@video@Autenticação HTTP Básica Ilustrada](https://www.youtube.com/watch?v=mwccHwUn7Gc)
- [@feed@Explore as principais postagens sobre autenticação](https://app.daily.dev/tags/authentication?ref=roadmapsh)
