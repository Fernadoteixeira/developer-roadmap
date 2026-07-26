# API do Assistente OpenAI

A API OpenAI Assistants permite adicionar ações claras e específicas de tarefas a um bate-papo com um modelo de linguagem grande. Primeiro, você descreve cada ação que deseja que o modelo use, dando a ela um nome, uma finalidade curta e uma lista de entradas no formato JSON. Durante o chat, a modelo pode decidir que uma dessas ações vai ajudar. Em seguida, ele retorna o nome da ação e um objeto JSON com os valores de entrada que considera corretos. Seu código recebe essa chamada, executa um trabalho real, como uma consulta ao banco de dados ou uma solicitação da web, e envia o resultado de volta ao modelo. A modelo lê o resultado e continua o bate-papo, agora munida de fatos novos. Esse loop permite que você mantenha o controle do trabalho real que acontece enquanto permite que o modelo planeje e fale em linguagem natural.

Visite os seguintes recursos para saber mais:

- [@official@OpenAI Documentação – Visão geral da API de assistentes](https://platform.openai.com/docs/assistants/overview)
- [@official@OpenAI Blog – Apresentando a API Assistants](https://openai.com/blog/assistants-api)
- [@official@OpenAI Cookbook – Exemplo de API de assistentes](https://github.com/openai/openai-cookbook/blob/main/examples/Assistants_API_overview_python.ipynb)
- [@official@OpenAI API Reference – Assistants Endpoints](https://platform.openai.com/docs/api-reference/assistants)
