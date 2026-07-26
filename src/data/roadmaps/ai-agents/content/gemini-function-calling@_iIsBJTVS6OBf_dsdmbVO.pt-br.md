# Chamada de função Gemini

A chamada de função Gemini permite conectar o modelo de linguagem Gemini ao código real de maneira simples e segura. Primeiro você lista as funções que deseja usar, cada uma com um nome, uma breve nota sobre o que faz e um esquema JSON para os argumentos necessários. Quando o usuário fala, o Gemini verifica essa lista e, se a correspondência fizer sentido, responde com um pequeno bloco JSON que contém o nome da função escolhida e os argumentos preenchidos. Seu programa então executa essa função, envia o resultado de volta e o chat continua. Como a resposta é JSON estrita e não texto livre, você não precisa adivinhar o que o modelo significa e evita muitos erros. Esse fluxo permite criar agentes que extraem dados, chamam APIs ou executam longas cadeias de ação, mantendo o controle da lógica de negócios ao seu lado.

Visite os seguintes recursos para saber mais:

- [@official@Função chamada com a API Gemini](https://ai.google.dev/gemini-api/docs/function-calling)
- [@article@Compreendendo a chamada de função no Gemini](https://medium.com/google-cloud/understanding-function-calling-in-gemini-3097937f1905)
