# Evite autenticação básica

> Você deve evitar usar autenticação básica e usar quaisquer outras metodologias de autenticação padrão, ou seja, OAuth, JWT, etc.

A autenticação básica é um método simples para autenticar um usuário, transmitindo as credenciais do usuário em texto simples pela rede. Este método é inerentemente inseguro e deve ser evitado sempre que possível.

Existem vários motivos pelos quais a autenticação básica deve ser evitada e substituída por técnicas de autenticação mais seguras:

- Falta de confidencialidade: A autenticação básica transmite as credenciais do usuário (nome de usuário e senha) em texto simples pela rede. Isso significa que qualquer pessoa que interceptar o tráfego poderá ler facilmente as credenciais e obter acesso à conta do usuário.

- Falta de integridade: A autenticação básica não fornece nenhum mecanismo para garantir que os dados transmitidos não foram adulterados ou modificados em trânsito. Isso significa que um invasor pode modificar o tráfego para obter acesso à conta do usuário ou realizar outras atividades maliciosas.

- Falta de força de autenticação: a autenticação básica depende exclusivamente das credenciais do usuário para autenticá-lo. Isso significa que se um invasor conseguir obter as credenciais do usuário (por exemplo, por meio de phishing ou engenharia social), ele poderá obter facilmente acesso à conta do usuário.

- Sem suporte para autenticação multifator: a autenticação básica não suporta autenticação multifator (MFA), que é um recurso de segurança crítico que fornece uma camada adicional de proteção contra acesso não autorizado.

Por outro lado, outras técnicas de autenticação, como OAuth, OpenID Connect e SAML, fornecem métodos de autenticação mais seguros e robustos. Esses métodos normalmente usam protocolos criptografados para proteger as credenciais do usuário, fornecem mecanismos para verificar a integridade dos dados e oferecem suporte à MFA. Como resultado, eles são muito mais seguros e confiáveis ​​do que a autenticação básica e devem ser usados ​​sempre que possível.