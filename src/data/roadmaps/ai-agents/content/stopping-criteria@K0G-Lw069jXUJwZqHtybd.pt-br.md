# Critérios de parada

Os critérios de parada informam ao modelo de linguagem quando parar de escrever mais texto. Sem eles, o modelo poderia continuar adicionando palavras para sempre, perder tempo ou ultrapassar o ponto que nos interessa. As regras comuns incluem um número máximo de tokens, um token especial de fim de sequência ou uma sequência personalizada como `“\n\n”`. Também podemos parar quando a resposta começar a se repetir ou atingir uma pontuação que signifique que está fora do assunto. Boas regras de interrupção economizam custos, aceleram as respostas e evitam conteúdo absurdo ou inseguro.

Visite os seguintes recursos para saber mais:

- [@article@Definindo critérios de parada em modelos de linguagem grande](https://www.metriccoders.com/post/defining-stopping-criteria-in-large-language-models-a-practical-guide)
- [@article@Critérios de parada para algoritmo de árvore de decisão e gráficos de árvore](https://aieagle.in/stopping-criteria-for-decision-tree-algorithm-and-tree-plots/)