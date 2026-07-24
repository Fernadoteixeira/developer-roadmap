# Pilhas Não Executáveis

> Use pilhas não executáveis ​​para evitar que invasores executem código em seu servidor.

Uma pilha geralmente se refere à pilha de chamadas ou pilha de execução. É uma estrutura de dados usada pelo programa de computador para gerenciar e acompanhar a sequência de chamadas de função, variáveis ​​locais e outros dados relacionados durante a execução do programa.

Uma pilha não executável é um mecanismo de segurança que impede a execução de código malicioso, evitando que a memória da pilha seja executada como código. Isso ajuda a evitar ataques como ataques de buffer overflow, em que um invasor tenta substituir o endereço de retorno na pilha para redirecionar o programa para executar código malicioso. Ao usar pilhas não executáveis, o programa pode manter a pilha separada do código executável e ajudar a prevenir esses tipos de ataques.
