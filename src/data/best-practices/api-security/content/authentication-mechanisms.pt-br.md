# Mecanismos de autenticação

> Use mecanismos de autenticação padrão para gerar tokens, armazenar credenciais e autenticar usuários.

Aqui estão alguns exemplos de mecanismos de autenticação estabelecidos que você pode usar em vez de reinventar a roda:

- OAuth: OAuth é um padrão aberto amplamente utilizado para autorização que permite aos usuários conceder acesso a seus recursos a aplicativos de terceiros sem compartilhar suas credenciais. É comumente usado por serviços da web e APIs para permitir que os usuários façam login com suas contas de mídia social ou outras contas de terceiros.

- OpenID Connect: OpenID Connect é um protocolo de autenticação desenvolvido com base no OAuth 2.0 que permite aos usuários se autenticarem em vários sites e aplicativos usando um único conjunto de credenciais. É comumente usado para logon único (SSO) em vários sites e aplicativos.

- SAML: Security Assertion Markup Language (SAML) é um padrão baseado em XML para troca de dados de autenticação e autorização entre partes. É comumente usado para SSO em vários domínios ou organizações.

- Algoritmos de hash de senha: Algoritmos de hash de senha como bcrypt e scrypt são amplamente usados ​​para armazenar e proteger com segurança as senhas dos usuários. Esses algoritmos garantem que, mesmo que um invasor obtenha acesso ao banco de dados de senhas, ele não conseguirá recuperá-las facilmente.

- Autenticação de dois fatores (2FA): 2FA é um mecanismo de autenticação que exige que os usuários forneçam duas formas de identificação para acessar suas contas. Isso normalmente envolve algo que o usuário conhece (como uma senha) e algo que o usuário possui (como um dispositivo móvel ou uma chave de segurança). Muitos serviços e aplicativos agora oferecem 2FA como medida de segurança adicional.
