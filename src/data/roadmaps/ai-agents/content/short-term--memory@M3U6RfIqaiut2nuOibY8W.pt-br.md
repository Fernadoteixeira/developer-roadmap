# Memória de curto prazo

Memória de curto prazo são os fatos que são transmitidos como parte do prompt para o LLM, por exemplo. pode haver um prompt como abaixo:

```text
Users Profile:
- name: {name}
- age: {age}
- expertise: {expertise}

User is currently learning about {current_topic}. User has some goals in mind which are:
- {goal_1}
- {goal_2}
- {goal_3}

Help the user achieve the goals.
```

Observe como injetamos o perfil do usuário, tópico atual e objetivos no prompt. Todas essas são memórias de curto prazo.

Visite os seguintes recursos para saber mais:

- [@article@Gerenciamento de memória em agentes de IA](https://python.langchain.com/docs/how_to/chatbots_memory/)
- [@article@Construa agentes de IA mais inteligentes: gerencie memória de curto e longo prazo](https://redis.io/blog/build-smarter-ai-agents-manage-short-term-and-long-term-memory-with-redis/)
- [@article@Armazenamento e recuperação de conhecimento para agentes](https://www.pinecone.io/learn/langchain-retrieval-augmentation/)
- [@article@Memória de curto prazo versus memória de longo prazo em agentes de IA](https://adasci.org/short-term-vs-long-term-memory-in-ai-agents/)
- [@video@Construindo memória semelhante à do cérebro para agentes de IA](https://www.youtube.com/watch?v=VKPngyO0iKg)
