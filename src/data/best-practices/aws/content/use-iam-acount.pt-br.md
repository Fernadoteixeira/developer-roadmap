# Use contas IAM

> Todos recebem uma conta IAM. Nunca faça login no mestre.

Normalmente você terá uma “conta de operações” para um serviço e toda a sua equipe de operações terá a senha. Com a AWS, você definitivamente não quer fazer isso. Todos obtêm um usuário IAM com apenas as permissões necessárias (privilégio mínimo). Um usuário IAM pode controlar tudo na infraestrutura. No momento em que este artigo foi escrito, a única coisa que um usuário IAM não pode acessar são algumas partes das páginas de faturamento.

Se você quiser proteger ainda mais sua conta, certifique-se de [ativar a autenticação multifator](http://aws.amazon.com/iam/details/mfa/) para todos (você pode usar o Google Authenticator). Já ouvi falar de alguns usuários que dão o token MFA para duas pessoas e a senha para outras duas, portanto, para realizar qualquer ação na conta mestra, dois dos usuários precisam concordar. Isso é um exagero para o meu caso, mas vale a pena mencionar caso alguém queira fazer isso.
