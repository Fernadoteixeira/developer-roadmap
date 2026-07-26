# Protocolo de Contexto do Modelo (MCP)

O Model Context Protocol (MCP) é um livro de regras que informa a um agente de IA como empacotar informações básicas antes de enviar um prompt para um modelo de linguagem. Ele lista quais partes vão para o prompt – coisas como a função do sistema, a solicitação do usuário, memória passada, chamadas de ferramenta ou trechos de código – e corrige sua ordem. Etiquetas claras marcam cada peça, para que humanos e máquinas possam ver onde termina uma peça e começa a próxima. Manter o formato estável elimina a confusão, permite que diferentes ferramentas trabalhem juntas e torna mais fácil testar ou trocar modelos posteriormente. Quando os agentes seguem o MCP, o modelo recebe um prompt claro e completo e pode fornecer respostas melhores.

Visite os seguintes recursos para saber mais:

- [@opensource@Model Context Protocol](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [@oficial@Protocolo de contexto do modelo](https://modelcontextprotocol.io/introduction)
- [@article@Apresentando o Servidor Azure MCP ](https://devblogs.microsoft.com/azure-sdk/introducing-the-azure-mcp-server/)
- [@article@O guia definitivo para MCP](https://guangzhengli.com/blog/en/model-context-protocol)
