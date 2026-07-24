# Migrações

As migrações de banco de dados são uma forma controlada por versão de gerenciar e aplicar alterações incrementais em um esquema de banco de dados ao longo do tempo, permitindo que os desenvolvedores modifiquem a estrutura do banco de dados (por exemplo, adicionando tabelas, alterando colunas) sem afetar os dados existentes. Eles garantem que o banco de dados evolua junto com o código do aplicativo de maneira consistente e repetível em todos os ambientes (por exemplo, desenvolvimento, teste, produção), mantendo a compatibilidade com versões mais antigas do esquema. As migrações são normalmente escritas em SQL ou em uma linguagem independente de banco de dados e são executadas usando ferramentas de migração como Liquibase, Flyway ou recursos ORM integrados, como migrações Django ou Rails.

Saiba mais com os seguintes recursos:

- [@article@O que são migrações de banco de dados?](https://www.prisma.io/dataguide/types/relational/what-are-database-migrations)
- [@video@Migrações de banco de dados para iniciantes](https://www.youtube.com/watch?v=dJDBP7pPA-o)