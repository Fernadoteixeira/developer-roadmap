# Falsificação de solicitação entre sites (CSRF)

Cross-Site Request Forgery (CSRF) é um tipo de vulnerabilidade de segurança da web que permite que um invasor engane um usuário para que execute ações em um aplicativo da web sem seu consentimento. Ocorre quando um site ou link malicioso faz com que o navegador de um usuário envie solicitações não autorizadas para um site diferente onde o usuário está autenticado, como enviar um formulário ou alterar as configurações da conta. Como as solicitações vêm da sessão autenticada do usuário, o aplicativo da web confia nelas por engano, permitindo que o invasor execute ações como transferência de fundos, alteração de senhas ou alteração de dados do usuário. Os ataques CSRF exploram a confiança que um aplicativo web tem no navegador do usuário, tornando fundamental que os desenvolvedores implementem contramedidas como tokens CSRF, atributos de cookies do mesmo site e prompts de confirmação do usuário para evitar ações não autorizadas.

Saiba mais com os seguintes recursos:

- [@video@Explicação de falsificação de solicitação entre sites](https://www.youtube.com/watch?v=eWEgUcHPle0)
- [@article@Falsificação de solicitação entre sites](https://owasp.org/www-community/attacks/csrf)
