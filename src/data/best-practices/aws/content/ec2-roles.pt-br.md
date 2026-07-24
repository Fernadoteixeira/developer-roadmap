# Funções EC2

> Use funções EC2, não forneça aos aplicativos uma conta IAM.

Se o seu aplicativo tiver credenciais da AWS incorporadas, você está "fazendo errado". Um dos motivos pelos quais é importante usar o AWS SDK para sua linguagem é que você pode usar facilmente funções EC2 IAM. A ideia de uma função é que você especifique as permissões que uma determinada função deve obter e, em seguida, atribua essa função a uma instância do EC2. Sempre que você usa o AWS SDK nessa instância, você não especifica nenhuma credencial. Em vez disso, o SDK recuperará credenciais temporárias que possuem as permissões da função que você configurou. Tudo isso é tratado de forma transparente para você. É seguro e extremamente útil.
