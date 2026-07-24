# Pesquisa longa

A pesquisa longa é uma técnica em que o cliente pesquisa o servidor em busca de novos dados. Porém, se o servidor não tiver nenhum dado disponível para o cliente, em vez de enviar uma resposta vazia, o servidor retém a solicitação e aguarda um período de tempo especificado para que novos dados estejam disponíveis. Se novos dados ficarem disponíveis durante esse período, o servidor envia imediatamente uma resposta ao cliente, completando a solicitação aberta. Se nenhum dado novo estiver disponível e o tempo limite especificado pelo cliente expirar, o servidor envia uma resposta indicando esse fato. O cliente solicitará imediatamente novamente os dados do servidor, criando um novo ciclo de solicitação-resposta.

Saiba mais com os seguintes recursos:

- [@artigo@Enquete Longa](https://javascript.info/long-polling)
- [@video@O que é pesquisa longa?](https://www.youtube.com/watch?v=LD0_-uIsnOE)