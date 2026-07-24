# Registros ALIAS

> Use registros ALIAS.

Um registro ALIAS vinculará seu conjunto de registros diretamente a um recurso específico da AWS (ou seja, você pode mapear um domínio para um bucket S3), mas o segredo é que você não será cobrado por nenhuma pesquisa ALIAS. Portanto, embora uma entrada CNAME custasse dinheiro, um registro ALIAS não custaria. Além disso, ao contrário de um CNAME, você pode usar um ALIAS no ápice da sua zona. Você pode ler mais sobre isso na [página da AWS para criação de conjuntos de registros de recursos de alias](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html).
