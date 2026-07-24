# Use funções IAM

Não crie usuários para aplicativos, sempre use funções do IAM, se puder. Eles simplificam tudo e mantêm as coisas seguras. Ter usuários do aplicativo apenas cria um ponto de falha (e se alguém excluir acidentalmente a chave de API?) E torna-se difícil de gerenciar.