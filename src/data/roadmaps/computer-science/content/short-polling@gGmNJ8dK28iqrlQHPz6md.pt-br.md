# Pesquisa curta

Na pesquisa resumida, o cliente solicita informações do servidor. O servidor processa a solicitação. Se houver dados disponíveis para a solicitação, o servidor responderá à solicitação com as informações necessárias. Porém, se o servidor não tiver dados disponíveis para o cliente, o servidor retornará uma resposta vazia. Em ambas as situações, a conexão será encerrada após o retorno da resposta. Os clientes continuam emitindo novas solicitações mesmo depois que o servidor envia as respostas vazias. Este mecanismo aumenta o custo da rede no servidor.

Visite os seguintes recursos para saber mais:

- [@article@O que são Long-Polling, Websockets, Server-Sent Events (SSE) e Comet?](https://stackoverflow.com/questions/11077857/what-are-long-polling-websockets-server-sent-events-sse-and-comet)
