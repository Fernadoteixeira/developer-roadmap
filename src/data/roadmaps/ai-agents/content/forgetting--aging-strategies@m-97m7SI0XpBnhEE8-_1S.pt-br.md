# Esquecimento/Estratégias de Envelhecimento

As estratégias de esquecimento ou envelhecimento ajudam um agente de IA a manter apenas as partes úteis de sua memória e a descartar o resto com o tempo. O agente pode marcar cada memória com um carimbo de data/hora e diminuir sua importância à medida que envelhece, ou pode remover itens que não são usados ​​há algum tempo, como uma lista de “usados ​​menos recentemente”. Alguns sistemas atribuem a cada memória uma pontuação de relevância; quando o espaço acaba, eles apagam primeiro os itens com pontuação mais baixa. Outros mantêm uma janela deslizante de comprimento fixo dos eventos mais recentes ou criam breves resumos e armazenam-nos em vez de detalhes brutos. Esses métodos impedem que o armazenamento de memória cresça sem limites, reduzem os custos de armazenamento e permitem que o agente se concentre nos objetivos atuais. Escolher a combinação certa de regras antigas é uma troca: esquecer muito rápido e o agente perde o contexto, esquecer muito devagar e isso desperdiça recursos ou reage a fatos desatualizados.

Visite os seguintes recursos para saber mais:

- [@article@Gerenciamento de memória](https://python.langchain.com/docs/how_to/chatbots_memory/)
- [@article@Gerenciamento de memória para agentes de IA](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/memory-management-for-ai-agents/4406359)