# Teorema CAP

O Teorema CAP, também conhecido como Teorema de Brewer, é um princípio fundamental em sistemas de banco de dados distribuídos. Afirma que, em um sistema distribuído, é impossível garantir simultaneamente todas as três propriedades a seguir: Consistência (todos os nós veem os mesmos dados ao mesmo tempo), Disponibilidade (cada solicitação recebe uma resposta, sem garantia de que contém a versão mais recente dos dados) e Tolerância de partição (o sistema continua a operar apesar das falhas de rede entre os nós). De acordo com o teorema, um sistema distribuído só pode fornecer duas dessas três garantias em um determinado momento. Este princípio orienta o projeto e a arquitetura de sistemas distribuídos, influenciando decisões sobre modelos de consistência de dados, estratégias de replicação e tratamento de falhas. Compreender o Teorema CAP é crucial para projetar sistemas distribuídos robustos e escaláveis ​​e para escolher soluções de banco de dados apropriadas para casos de uso específicos em ambientes de computação distribuída.

Visite os seguintes recursos para saber mais:

- [@article@O que é o Teorema CAP?](https://www.bmc.com/blogs/cap-theorem/)
- [@article@Uma Prova Ilustrada do Teorema CAP](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/)
- [@article@CAP Teorema e suas aplicações em bancos de dados NoSQL](https://www.ibm.com/uk-en/cloud/learn/cap-theorem)
- [@video@O que é o Teorema CAP?](https://www.youtube.com/watch?v=_RbsFXWRZ10)
