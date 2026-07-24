# Tokenização

A tokenização é a etapa em que o texto bruto é dividido em pequenos pedaços chamados tokens, e cada token recebe um número exclusivo. Um token pode ser uma palavra inteira, parte de uma palavra, um sinal de pontuação ou até mesmo um espaço. A lista de todos os tokens possíveis é o vocabulário do modelo. Depois que o texto é transformado nesses tokens numerados, o modelo pode procurar uma incorporação para cada número e iniciar sua matemática. Ao trabalhar com tokens em vez de frases completas, o modelo mantém o tamanho da entrada estável e pode lidar com palavras novas ou raras, dividindo-as em subpartes familiares. Após o modelo finalizar seu trabalho, os tokens numerados são transformados novamente em texto através do mesmo mapa de vocabulário, permitindo ao usuário ler o resultado.

Visite os seguintes recursos para saber mais:

- [@article@Explaining Tokens — o idioma e a moeda da IA](https://blogs.nvidia.com/blog/ai-tokens-explained/)
- [@article@O que é tokenização? Tipos, casos de uso, implementação](https://www.datacamp.com/blog/what-is-tokenization)