# Bcrypt

Bcrypt é uma função de hash de senha projetada para fazer hash de senhas com segurança para armazenamento em bancos de dados. Criado por Niels Provos e David Mazières, é baseado na cifra Blowfish e incorpora um sal para proteger contra ataques de mesa arco-íris. A principal característica do Bcrypt é a sua natureza adaptativa, permitindo o ajuste do seu fator de custo para torná-lo mais lento à medida que o poder computacional aumenta, mantendo assim a resistência contra ataques de força bruta ao longo do tempo. Ele produz uma saída hash de tamanho fixo, normalmente com 60 caracteres, que inclui o fator sal e custo. Bcrypt é amplamente utilizado em muitas linguagens de programação e estruturas devido à sua força de segurança e relativa facilidade de implementação. Sua lentidão deliberada no processamento o torna particularmente eficaz para armazenamento de senhas, onde a velocidade não é uma prioridade, mas a segurança é fundamental.

Visite os seguintes recursos para saber mais:

- [@opensource@bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [@article@Compreendendo o bcrypt](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/)
- [@video@bcrypt explicado](https://www.youtube.com/watch?v=AzA_LTDoFqY)