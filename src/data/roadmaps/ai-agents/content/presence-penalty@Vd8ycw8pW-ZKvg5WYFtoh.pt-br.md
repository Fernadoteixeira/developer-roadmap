# Penalidade de Presença

A penalidade de presença é uma configuração que você pode ajustar ao solicitar que um modelo de linguagem grande escreva. Isso leva o modelo a escolher palavras que ainda não usou. Cada vez que uma palavra já apareceu, o modelo recebe uma pequena pontuação por escolhê-la novamente. Uma penalidade mais alta proporciona cortes maiores, então o modelo busca novas palavras e novas ideias. Uma penalidade mais baixa permite que o modelo reutilize palavras com mais frequência, o que pode ajudar com repetições como rimas ou listas com marcadores. Ajustar esse controle ajuda a direcionar a saída para mais variedade ou mais consistência.

Visite os seguintes recursos para saber mais:

- [@article@Compreendendo a penalidade de presença e a penalidade de frequência](https://medium.com/@pushparajgenai2025/understanding-presence-penalty-and-frequency-penalty-in-openai-chat-completion-api-calls-2e3a22547b48)
- [@article@Diferença entre penalidades de frequência e presença?](https://community.openai.com/t/difference-between-frequency-and-presence-penalties/2777)
- [@article@LLM Parâmetros explicados: um guia prático com exemplos](https://learnprompting.org/blog/llm-parameters)