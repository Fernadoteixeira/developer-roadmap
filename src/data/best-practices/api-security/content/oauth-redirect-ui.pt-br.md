# redirecionar_uri

> Valide `redirect_uri’ no lado do servidor para evitar ataques de redirecionamento aberto.

No OAuth, `redirect_uri` é um parâmetro que especifica o URI (Uniform Resource Identifier) ​​para o qual o servidor de autorização deve redirecionar o usuário após a conclusão da autenticação. O `redirect_uri` é frequentemente usado no fluxo OAuth para retornar um código de autorização ou token de acesso ao aplicativo cliente.

É importante validar o `redirect_uri` no lado do servidor para evitar ataques como ataques de redirecionamento aberto. Em um ataque de redirecionamento aberto, um invasor pode modificar o parâmetro `redirect_uri` para redirecionar o usuário para um site malicioso. Ao validar `redirect_uri` no lado do servidor, você pode garantir que o URI de redirecionamento seja um URI válido e autorizado para o aplicativo cliente.

A validação de `redirect_uri` no lado do servidor também pode evitar outros tipos de ataques, como ataques de phishing ou ataques de falsificação de solicitação entre sites (CSRF). Ao verificar se `redirect_uri` corresponde a uma lista predefinida de URIs autorizados, você pode garantir que o usuário seja redirecionado para um site confiável após a conclusão da autenticação.