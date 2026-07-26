# RAG e bancos de dados vetoriais

RAG, abreviação de Retrieval-Augmented Generation, permite que um agente de IA extraia fatos dos dados armazenados cada vez que responde. Os dados ficam em um banco de dados vetorial. Nesse banco de dados, cada pedaço de texto é transformado em uma lista numérica chamada vetor. Idéias semelhantes criam vetores próximos uns dos outros, para que o agente possa encontrar rapidamente pedaços relacionados. Quando o usuário faz uma pergunta, o agente transforma a pergunta em seu próprio vetor, encontra os pedaços mais próximos e os lê. Em seguida, ele escreve uma resposta que mistura o novo prompt com esses pedaços. Como o armazenamento de dados pode conter muitos bate-papos, documentos ou notas anteriores, esse processo fornece ao agente uma memória de trabalho sem colocar tudo no prompt. Reduz o custo do token, mantém as respostas no tópico e permite que a memória cresça com o tempo.

Visite os seguintes recursos para saber mais:

- [@article@Compreendendo geração aumentada de recuperação (RAG) e bancos de dados de vetores](https://pureai.com/Articles/2025/03/03/Understanding-RAG.aspx)
- [@article@Construa sistemas de geração aumentada de recuperação avançada](https://learn.microsoft.com/en-us/azure/developer/ai/advanced-retrieval-augmented-generation)
- [@article@O que é geração aumentada de recuperação, também conhecida como RAG?](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
