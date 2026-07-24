# Use HTTP

> Use HTTPS no lado do servidor e cifras seguras

Certifique-se de que seu servidor API use HTTPS em vez de HTTP. HTTPS é um protocolo seguro que criptografa dados em trânsito, dificultando a interceptação e leitura de informações confidenciais por invasores. Para implementar HTTPS, você precisa obter um certificado SSL/TLS e configurar seu servidor para usar HTTPS.

HTTPS usa cifras para criptografar dados em trânsito. É importante escolher cifras seguras que sejam resistentes a ataques e ofereçam criptografia forte. Algumas cifras seguras comuns incluem AES, ChaCha20 e ECDHE para troca de chaves. Certifique-se de desabilitar cifras fracas e desatualizadas, como RC4 e TLS 1.0/1.1, que são vulneráveis ​​a ataques.