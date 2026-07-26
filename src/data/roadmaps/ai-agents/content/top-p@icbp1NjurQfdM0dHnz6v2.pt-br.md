# Top-p

Top-p, também chamada de amostragem de núcleo, é uma configuração que orienta como um LLM escolhe sua próxima palavra. O modelo lista muitas palavras possíveis e as classifica por probabilidade. Em seguida, ele encontra o menor grupo de palavras principais cuja probabilidade combinada soma o valor p escolhido, como 0,9. Apenas as palavras dentro deste grupo permanecem em disputa; o resto é descartado. O modelo escolhe aleatoriamente uma palavra do grupo mantido, ponderada por suas chances originais. Um p mais baixo mantém apenas as palavras muito prováveis, de modo que a saída é mais segura e focada. Um p mais alto permite a entrada de palavras menos prováveis, acrescentando surpresa e criatividade, mas também maior risco de erro.

Visite os seguintes recursos para saber mais:

- [@article@Amostragem de Núcleo](https://nn.labml.ai/sampling/nucleus.html)
- [@article@Técnicas de amostragem em modelos de linguagem grande (LLMs)](https://medium.com/@shashankag14/understanding-sampling-techniques-in-large-language-models-llms-dfc28b93f518)
- [@article@Temperature, top_p e top_k para respostas do chatbot](https://community.openai.com/t/temperature-top-p-and-top-k-for-chatbot-responses/295542)
