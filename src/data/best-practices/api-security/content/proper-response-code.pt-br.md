# Código de resposta adequado

> Retorne o código de status adequado de acordo com a operação concluída. por exemplo
>
> - `200 OK`
> - `400 Bad Request`
> - `401 Unauthorized`
> - `405 Method Not Allowed`
> - ...etc.

Retornar o código de status adequado de acordo com a operação concluída é importante para a segurança da API porque permite que o cliente entenda o resultado de sua solicitação e tome as ações apropriadas. Por exemplo, se o servidor retornar um código de status 401 Não autorizado, o cliente saberá que suas credenciais de autenticação estão incorretas e poderá solicitar que o usuário insira novamente seus detalhes de login. Por outro lado, se o servidor retornar um código de status 200 OK mesmo que a solicitação tenha falhado, o cliente poderá não perceber que houve um problema e poderá executar ações maliciosas ou exibir dados incorretos. Fornecer códigos de status precisos pode ajudar a prevenir vulnerabilidades de segurança e melhorar a confiabilidade geral e a usabilidade da API.
