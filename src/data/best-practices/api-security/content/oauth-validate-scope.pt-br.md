# Validar Escopo

> Tenha escopo padrão e valide o escopo para cada aplicação

No OAuth, os escopos são usados ​​para especificar as permissões e os níveis de acesso concedidos aos aplicativos cliente ao acessar recursos protegidos em nome de um usuário.

A prática recomendada de ter um escopo padrão e validar o escopo para cada aplicativo é importante porque ajuda a garantir que os aplicativos clientes tenham acesso apenas aos recursos de que necessitam e que os usuários concedam apenas as permissões necessárias a cada aplicativo.

O escopo padrão é um conjunto de permissões concedidas a todos os aplicativos cliente por padrão, a menos que especificado de outra forma pelo usuário. Ao ter um escopo padrão, você pode garantir que todos os aplicativos estejam sujeitos aos mesmos controles básicos de segurança e acesso.

Além de ter um escopo padrão, também é recomendável validar o escopo de cada aplicação. Isto significa que quando um usuário concede acesso a uma aplicação, o servidor deve verificar se o escopo solicitado é válido e apropriado para aquela aplicação. Isso pode ajudar a evitar que aplicativos maliciosos solicitem permissões excessivas ou acesso não autorizado aos dados do usuário.

Ao ter um escopo padrão e validar o escopo de cada aplicativo, você pode ajudar a garantir que o fluxo OAuth seja seguro e que os aplicativos cliente acessem apenas os recursos e as permissões de que necessitam.