# Índices de banco de dados

Os índices de banco de dados são estruturas de dados que melhoram a velocidade das operações de recuperação de dados em um sistema de gerenciamento de banco de dados. Eles funcionam de forma semelhante aos índices de livros, fornecendo uma maneira rápida de pesquisar informações com base em colunas ou conjuntos de colunas específicos. Os índices criam uma estrutura separada que contém uma referência aos dados reais, permitindo que o mecanismo de banco de dados encontre informações sem examinar a tabela inteira. Embora os índices melhorem significativamente o desempenho da consulta, especialmente para grandes conjuntos de dados, eles apresentam compensações. Eles aumentam os requisitos de espaço de armazenamento e podem retardar as operações de gravação, pois o índice deve ser atualizado a cada modificação de dados. Os tipos comuns incluem índices de árvore B para uso geral, índices de bitmap para dados de baixa cardinalidade e índices hash para comparações de igualdade. O design adequado do índice é crucial para otimizar o desempenho do banco de dados, equilibrando leituras mais rápidas com gravações mais lentas e maiores necessidades de armazenamento.

Visite os seguintes recursos para saber mais:

- [@article@O que é um índice de banco de dados?](https://www.codecademy.com/article/sql-indexes)
- [@video@Indexação de banco de dados explicada](https://www.youtube.com/watch?v=-qNSXK7s7_w)
- [@feed@Explore as principais postagens sobre banco de dados](https://app.daily.dev/tags/database?ref=roadmapsh)
