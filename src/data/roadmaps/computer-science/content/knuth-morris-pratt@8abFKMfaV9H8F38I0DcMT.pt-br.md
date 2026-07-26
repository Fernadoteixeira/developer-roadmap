# Knuth Morris Pratt

Knuth morris pratt é um algoritmo de busca de string que usa um array pré-computado para encontrar a substring em uma string. Essa matriz é conhecida como função de prefixo. A função prefixo é o prefixo mais longo que também é sufixo de uma substring. A função prefixo é usada para pular os caracteres que já correspondem. O algoritmo é o seguinte:

- Calcule a função de prefixo da substring.
- Percorra a string e a substring simultaneamente.
- Se os caracteres corresponderem, aumente o índice da string e da substring.
- Se os caracteres não corresponderem, aumente o índice da string pelo valor da função de prefixo no índice da substring.

Visite os seguintes recursos para saber mais:

- [@video@9.1 Algoritmo de correspondência de string Knuth-Morris-Pratt KMP](https://www.youtube.com/watch?v=V5-7GzOfADQ)
- [@course@Knuth-Morris Pratt](https://www.coursera.org/learn/algorithms-part2/lecture/TAtDr/knuth-morris-pratt)
