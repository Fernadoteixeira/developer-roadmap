# Use parâmetro de estado

> Use o parâmetro state para evitar ataques CSRF

No OAuth, o parâmetro `state` é usado como medida de segurança para evitar ataques CSRF (Cross-Site Request Forgery). Os ataques CSRF ocorrem quando um site ou script malicioso envia uma solicitação a um site legítimo em nome de um usuário que está atualmente autenticado.

Para evitar ataques CSRF, o parâmetro `state` é usado para armazenar um valor exclusivo que é gerado pela aplicação cliente antes de iniciar a solicitação de autorização. Esse valor é incluído na solicitação de autorização e, em seguida, verificado pelo servidor de autorização quando o usuário é redirecionado de volta ao aplicativo cliente. Se o valor `state` na resposta de autorização corresponder ao valor `state` que foi enviado pelo aplicativo cliente, a autorização será considerada válida e o token de acesso será retornado ao cliente.

Ao usar o parâmetro `state`, você pode ajudar a evitar que agentes mal-intencionados interceptem ou modifiquem a solicitação de autorização em trânsito, pois o valor exclusivo `state` é conhecido apenas pelo aplicativo cliente e pelo servidor de autorização. Isso pode ajudar a garantir a integridade e a segurança do fluxo OAuth e a proteger contra ataques CSRF.
