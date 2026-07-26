# Representação gráfica

Um gráfico pode ser representado como uma matriz de adjacência ou uma lista de adjacências.

A matriz de adjacência é uma matriz 2D de tamanho `V x V` onde `V` é o número de vértices em um gráfico. Deixe a matriz 2D ser `adj[][]`, um slot `adj[i][j] = 1` indica que há uma aresta do vértice `i` ao vértice `j`.

A lista de adjacências é uma matriz de vetores. O tamanho da matriz é igual ao número de vértices. Deixe a matriz ser `array[]`. Uma entrada `array[i]` representa a lista de vértices adjacentes ao i-ésimo vértice. Esta representação também pode ser usada para representar um gráfico ponderado. Os pesos das arestas podem ser representados como listas de pares.

Visite os seguintes recursos para saber mais:

- [@article@Matriz de adjacência - Representação gráfica](https://www.programiz.com/dsa/graph-adjacency-matrix)
- [@article@Lista de adjacências - Representação gráfica](https://www.programiz.com/dsa/graph-adjacency-list)
