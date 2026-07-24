# Algoritmo JWT

> Não extraia o algoritmo do cabeçalho, use backend.

Extrair o algoritmo do cabeçalho de um JWT pode representar um risco de segurança, pois um invasor pode modificar o algoritmo e potencialmente obter acesso não autorizado. Portanto, é recomendado verificar o algoritmo no backend em vez de extraí-lo do cabeçalho. Isso pode ajudar a garantir que o algoritmo usado para assinar e verificar o token seja seguro e não tenha sido adulterado.