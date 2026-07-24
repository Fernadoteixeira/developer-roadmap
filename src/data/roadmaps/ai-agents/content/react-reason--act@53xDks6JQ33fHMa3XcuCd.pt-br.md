# ReAct (Razão + Ação)

ReAct é um padrão de agente que faz um modelo alternar entre duas etapas simples: Razão e Ação. Primeiro, o agente escreve um breve pensamento que resume o que sabe e o que deve tentar em seguida. Em seguida, ele executa uma ação como chamar uma API, executar código ou pesquisar um documento. O resultado dessa ação é realimentado, dando ao agente novos fatos para refletir. Este loop se repete até que a tarefa seja concluída. Ao mostrar suas ideias em texto simples, o agente pode ser inspecionado, depurado e até mesmo corrigido instantaneamente. A divisão clara entre pensar e fazer também elimina movimentos desnecessários e orienta o modelo para um progresso constante. O ReAct funciona bem com modelos de linguagem grandes porque eles podem gerar a cadeia de pensamentos e escolher a próxima ferramenta na mesma resposta.

Visite os seguintes recursos para saber mais:

- [@official@ReAct: Sinergizando raciocínio e atuação em modelos de linguagem](https://react-lm.github.io/)
- [@article@ReAct Systems: Aprimorando LLMs com Raciocínio e Ação](https://learnprompting.org/docs/agents/react)