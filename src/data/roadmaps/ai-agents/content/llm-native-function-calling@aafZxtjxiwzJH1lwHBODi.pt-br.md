# LLM Native "Chamada de Função"

A “chamada de função” nativa do LLM permite que um grande modelo de linguagem decida quando executar um trecho de código e quais entradas passar para ele. Primeiro você informa ao modelo quais funções estão disponíveis. Para cada um você fornece um nome curto, uma breve descrição e uma lista de argumentos com seus tipos. Durante um bate-papo, o modelo pode responder em JSON que corresponda a esse esquema, em vez de texto simples. Seu programa wrapper lê o JSON, chama a função real e, em seguida, envia o resultado de volta ao modelo para que ele possa continuar. Esse loop ajuda um agente a pesquisar na web, pesquisar dados, enviar um e-mail ou realizar qualquer outra tarefa que você expor. Como a saída é estruturada, você comete menos erros do que quando o modelo tenta escrever código bruto ou comandos em linguagem natural.

Visite os seguintes recursos para saber mais:

- [@article@Um guia abrangente para chamadas de funções em LLMs](https://thenewstack.io/a-comprehensive-guide-to-function-calling-in-llms/)
- [@article@Função Chamada com LLMs | Guia de engenharia imediata](https://www.promptingguide.ai/applications/function_calling)
- [@article@Function Calling com LLMs de código aberto](https://medium.com/@rushing_andrei/function-calling-with-open-source-llms-594aa5b3a304)
