# Árvores Vermelhas/Pretas

Na ciência da computação, uma árvore vermelha e preta é uma espécie de árvore de busca binária com autoequilíbrio. Cada nó armazena um bit extra representando a “cor”, usado para garantir que a árvore permaneça equilibrada durante inserções e exclusões.

Estas são uma tradução de uma árvore 2-3 (veja abaixo).

Na prática: as árvores rubro-negras oferecem garantias de pior caso para tempo de inserção, tempo de exclusão e tempo de pesquisa. Isto não apenas os torna valiosos em aplicações sensíveis ao tempo, como aplicações em tempo real, mas também os torna valiosos blocos de construção em outras estruturas de dados que fornecem garantias no pior caso; por exemplo, muitas estruturas de dados usadas em geometria computacional podem ser baseadas em árvores vermelhas e pretas, e o Completely Fair Scheduler usado nos kernels Linux atuais usa árvores vermelhas e pretas. Na versão 8 do Java, o Collection HashMap foi modificado de tal forma que, em vez de usar um LinkedList para armazenar elementos idênticos com hashcodes ruins, uma árvore Red-Black é usada.

Visite os seguintes recursos para saber mais:

- [@article@Árvore Vermelho-Preto - Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [@article@Uma introdução à pesquisa binária e à árvore vermelha e preta](https://www.topcoder.com/thrive/articles/An%20Introduction%20to%20Binary%20Search%20and%20Red-Black%20Trees)
- [@video@Red-Black Trees (playlist) em 30 minutos](https://www.youtube.com/playlist?list=PL9xmBV_5YoZNqDI8qfOZgzbqahCUmUEin)
- [@video@Aduni - Algoritmos - Aula 4 (o link salta para o ponto inicial)](https://youtu.be/1W3x0f_RmUo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&t=3871)
- [@video@Aduni - Algoritmos - Aula 5](https://www.youtube.com/watch?v=hm2GHwyKF1o&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=5)
