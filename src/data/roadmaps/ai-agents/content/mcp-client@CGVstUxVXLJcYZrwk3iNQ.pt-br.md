# Cliente MCP

O cliente MCP é a parte de um agente de IA que se comunica com a API do modelo de linguagem. Ele coleta mensagens, arquivos e sinais de ferramentas, empacota-os usando o Model Context Protocol e os envia ao modelo. Quando uma resposta retorna, ele a descompacta, verifica o formato e passa o resultado para outros módulos. Ele também rastreia o uso de tokens, filtra dados privados, tenta novamente chamadas com falha e registra eventos importantes para depuração.

Visite os seguintes recursos para saber mais:

- [@opensource@Model Context Protocol](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [@oficial@Protocolo de contexto do modelo](https://modelcontextprotocol.io/introduction)
- [@official@Referência da API OpenAI](https://platform.openai.com/docs/api-reference)
- [@official@Anthropic API Documentação](https://docs.anthropic.com/claude/reference)
