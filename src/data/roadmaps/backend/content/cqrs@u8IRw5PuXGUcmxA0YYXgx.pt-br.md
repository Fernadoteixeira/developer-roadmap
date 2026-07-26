# CQRS

CQRS (Command Query Responsibility Segregation) é um padrão arquitetônico que separa as operações de leitura e gravação para um armazenamento de dados. Nesse padrão, os “comandos” tratam da modificação de dados (criar, atualizar, excluir), enquanto as “consultas” tratam da recuperação de dados. O princípio por trás do CQRS é que para muitos sistemas, especialmente os complexos, os requisitos para leitura de dados diferem significativamente daqueles para gravação de dados. Ao separar essas preocupações, o CQRS permite escalonamento, otimização e evolução independentes dos lados de leitura e gravação. Isso pode levar a melhor desempenho, escalabilidade e segurança. O CQRS é frequentemente usado em sistemas com origem em eventos e pode ser particularmente benéfico em aplicativos de domínio complexos e de alto desempenho. No entanto, também introduz complexidade adicional e deve ser aplicado criteriosamente com base nas necessidades e restrições específicas do sistema.

Visite os seguintes recursos para saber mais:

- [@article@Padrão CQRS](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs)
- [@video@Aprenda o padrão CQRS em 5 minutos!](https://www.youtube.com/watch?v=eiut3FIY1Cg)
