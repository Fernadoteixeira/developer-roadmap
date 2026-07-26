# N mais um problema

O problema N+1 ocorre na consulta ao banco de dados quando um aplicativo executa uma consulta para recuperar uma lista de itens e, em seguida, emite consultas adicionais para buscar dados relacionados para cada item individualmente. Isso geralmente resulta em ineficiências e problemas de desempenho porque o número de consultas emitidas cresce proporcionalmente ao número de itens recuperados. Por exemplo, se um aplicativo recupera 10 itens e depois executa uma consulta adicional para cada item para buscar detalhes relacionados, ele acaba executando 11 consultas (1 para a lista e 10 para os detalhes), levando a um total de 11 consultas em vez de 2. Isso pode afetar gravemente o desempenho, especialmente com conjuntos de dados maiores. As soluções para o problema N+1 normalmente envolvem a otimização de consultas para usar junções ou técnicas de lote para recuperar dados relacionados em menos consultas e mais eficientes.

Visite os seguintes recursos para saber mais:

- [@article@Explicação detalhada do problema N+1](https://medium.com/doctolib/understanding-and-fixing-n-1-query-30623109fe89)
- [@article@Qual é o problema N+1](https://planetscale.com/blog/what-is-n-1-query-problem-and-how-to-solve-it)
- [@article@Resolvendo problema N+1: para desenvolvedores de back-end Java](https://dev.to/jackynote/solving-the-notorious-n1-problem-optimizing-database-queries-for-java-backend-developers-2o0p)
- [@video@SQLite e o problema N+1 (não)](https://www.youtube.com/watch?v=qPfAQY_RahA)
