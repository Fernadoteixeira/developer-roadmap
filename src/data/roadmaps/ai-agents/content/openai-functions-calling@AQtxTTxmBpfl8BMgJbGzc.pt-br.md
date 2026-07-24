# Chamada de funções OpenAI

OpenAI Function Calling permite fornecer a um modelo de linguagem uma lista de ferramentas e fazer com que ele decida qual delas usar e com quais dados. Você descreve cada ferramenta com um nome curto, o que ela faz e o formato de suas entradas em um pequeno esquema semelhante a JSON. Em seguida, você passa a mensagem do usuário e esta lista de ferramentas para o modelo. Em vez de texto normal, o modelo pode responder com um bloco JSON que nomeia a ferramenta e preenche os argumentos necessários. Seu programa lê este bloco, executa a função real e pode enviar o resultado de volta para a próxima etapa. Esse padrão torna as ações do agente claras, fáceis de analisar e difíceis de abusar, porque o modelo não pode executar o código sozinho e todas as chamadas passam por suas verificações. Ele também reduz hacks imediatos e formatos errados, para que os agentes trabalhem com mais rapidez e segurança.

Visite os seguintes recursos para saber mais:

- [@official@OpenAI Documentação – Chamada de Função](https://platform.openai.com/docs/guides/function-calling)
- [@official@OpenAI Cookbook – Usando funções com modelos GPT](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_call_functions_with_chat_models.ipynb)
- [@officialOpenAI Blog – Anunciando chamadas de função e outras atualizações](https://openai.com/blog/function-calling-and-other-api-updates)
- [Referência da API @officialOpenAI – Seção de funções](https://platform.openai.com/docs/api-reference/chat/create#functions)
- [@officialOpenAI Community – Discussões e exemplos sobre chamadas de funções](https://community.openai.com/tag/function-calling)