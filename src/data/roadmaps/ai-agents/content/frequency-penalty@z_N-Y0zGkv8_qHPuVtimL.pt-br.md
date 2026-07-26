# Penalidade de Frequência

A penalidade de frequência é uma configuração que diz a um modelo de linguagem: "Pare de se repetir". Conforme o modelo escreve, ele acompanha quantas vezes já utilizou cada palavra. Um valor positivo de penalidade de frequência reduz a chance de escolher uma palavra novamente se ela já tiver sido vista muitas vezes na resposta atual. Isso ajuda a reduzir repetições excessivas ou blocos longos que ecoam a mesma frase. Um valor 0 desativa a regra, enquanto números mais altos fazem o modelo evitar repetições com mais força. Se a penalidade for muito alta, o texto pode omitir palavras comuns que ainda são necessárias, portanto, você geralmente começa com valores baixos (por exemplo, 0.2) e ajusta conforme necessário. A penalidade de frequência funciona em conjunto com outros controles, como temperatura e top-p, para moldar uma saída clara, variada e fluida.

Visite os seguintes recursos para obter mais informações:

- [@article@Explicação sobre Penalidade de Frequência](https://docs.aipower.org/docs/ai-engine/openai/frequency-penalty)
- [@article@Entendendo Penalidade de Frequência e Penalidade de Presença](https://medium.com/@the_tori_report/understanding-frequency-penalty-and-presence-penalty-how-to-fine-tune-ai-generated-text-e5e4f5e779cd)
