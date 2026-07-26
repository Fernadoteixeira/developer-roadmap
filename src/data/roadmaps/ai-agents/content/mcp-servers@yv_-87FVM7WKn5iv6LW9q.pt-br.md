# Servidores MCP

Um servidor MCP é a máquina principal ou serviço de nuvem que executa o Model Context Protocol. Ele mantém a “memória” compartilhada que diferentes agentes de IA precisam para que permaneçam na mesma página. Quando um agente envia uma solicitação, o servidor verifica quem está solicitando, extrai o contexto correto de seu armazenamento e o envia de volta rapidamente. Ele também salva novos fatos e resultados de tarefas para que o próximo agente possa usá-los. Um servidor MCP deve lidar com muitos usuários ao mesmo tempo, proteger dados privados com regras de acesso rígidas e registrar todas as alterações para facilitar a reversão. Bons servidores dividem o trabalho em pequenas tarefas, espalham-nas por vários computadores e adicionam backups para que nunca percam dados. Resumindo, o servidor MCP é o hub que garante que todos os agentes compartilhem um contexto novo, seguro e correto.

Visite os seguintes recursos para saber mais:

- [@article@Apresentando o Servidor Azure MCP ](https://devblogs.microsoft.com/azure-sdk/introducing-the-azure-mcp-server/)
- [@article@O guia definitivo para MCP](https://guangzhengli.com/blog/en/model-context-protocol)
- [@article@AWS Servidores MCP para assistentes de código](https://aws.amazon.com/blogs/machine-learning/introducing-aws-mcp-servers-for-code-assistants-part-1/)
- [@opensource@punkeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
