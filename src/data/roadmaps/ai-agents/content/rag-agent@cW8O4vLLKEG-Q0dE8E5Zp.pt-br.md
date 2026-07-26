# Agente RAG

Um agente RAG (Retrieval-Augmented Generation) mistura pesquisa com geração de linguagem para poder responder perguntas usando fatos novos e confiáveis. Quando um usuário envia uma consulta, o agente primeiro transforma essa consulta em uma incorporação – basicamente uma lista de números que captura seu significado. Em seguida, ele procura incorporações semelhantes em um banco de dados vetorial que contém passagens de páginas da web, PDFs ou outro texto. As passagens que melhor correspondem voltam como contexto. O agente coloca a pergunta original e essas passagens em um grande modelo de linguagem. O modelo escreve a resposta final, fundamentando cada frase no texto recuperado. Essa configuração mantém o modelo menor, reduz suposições erradas e permite que o sistema atualize seu conhecimento apenas adicionando novos documentos ao banco de dados. Ferramentas comuns para construir um agente RAG incluem um modelo de incorporação, um armazenamento de vetores como FAISS ou Pinecone e um LLM conectado por meio de uma estrutura como LangChain ou LlamaIndex.

Visite os seguintes recursos para saber mais:

- [@article@O que é RAG? - Explicação da IA de geração aumentada de recuperação](https://aws.amazon.com/what-is/retrieval-augmented-generation/)
- [@article@O que é geração aumentada de recuperação, também conhecida como RAG?](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
