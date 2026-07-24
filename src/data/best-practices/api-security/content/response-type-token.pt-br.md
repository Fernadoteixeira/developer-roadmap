# Evite fluxo de concessão implícito

> Evite `response_type=token’ e tente trocar por código.

No OAuth, `response_type=token` é um método para obter um token de acesso diretamente do endpoint de autorização, sem usar um código de autorização. Este método é conhecido como fluxo de concessão implícito.

Porém, é recomendado evitar o uso de `response_type=token` e, em vez disso, utilizar o fluxo de concessão de código de autorização, onde o cliente troca um código de autorização por um token de acesso. Isso ocorre porque o fluxo de concessão implícito pode ser menos seguro que o fluxo de concessão do código de autorização.

A razão para isso é que o token de acesso é retornado diretamente ao cliente no fragmento de URL do URI de redirecionamento. Isso significa que o token de acesso pode ser interceptado ou exposto no histórico do navegador ou nos logs do servidor. Por outro lado, com o fluxo de concessão de código de autorização, o token de acesso é retornado ao cliente somente depois que o cliente tiver trocado o código de autorização pelo token usando uma comunicação segura entre servidores.

Portanto, ao usar o fluxo de concessão do código de autorização em vez do fluxo de concessão implícito, você pode ajudar a proteger o token de acesso contra exposição ou interceptação por agentes mal-intencionados.
