# Terminais de configuração

> Use os endpoints de configuração, em vez de endpoints de nós individuais.

Normalmente, você teria que informar seu aplicativo sobre todos os nós do Memcached disponíveis. Se você deseja aumentar dinamicamente sua capacidade, isso se torna um problema, pois você precisará de alguma maneira de alertar seu aplicativo sobre as alterações. Uma maneira mais fácil é usar o endpoint de configuração, o que significa usar uma versão AWS de uma biblioteca Memcached que abstrai a descoberta automática de novos nós. O [guia da AWS para descoberta automática de nós de cache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html) tem mais informações.