# Cabeçalho HSTS

> Use o cabeçalho HSTS com SSL para evitar ataques SSL Strip.

A faixa SSL é um tipo de ataque em que um invasor intercepta o tráfego entre um cliente e um servidor que deve ser protegido por criptografia SSL/TLS e faz o downgrade da conexão para uma conexão HTTP de texto simples (não criptografada). Esse tipo de ataque pode passar despercebido pelo usuário porque o invasor consegue redirecioná-lo para um site semelhante que também usa HTTP em vez de HTTPS.

Em um ataque de tira SSL, o invasor configura uma posição man-in-the-middle (MITM) entre o cliente e o servidor. Quando o cliente inicia uma conexão com o servidor, o invasor intercepta o tráfego SSL/TLS e remove ou substitui os links HTTPS por links HTTP. Isso pode levar o usuário a pensar que está usando uma conexão segura, quando na verdade não está. O invasor pode então monitorar e manipular os dados transmitidos entre o cliente e o servidor.

O cabeçalho HSTS é um cabeçalho de segurança que instrui os navegadores a acessar o site apenas por HTTPS. Este cabeçalho é usado para evitar ataques SSL Strip. É uma boa prática usar o cabeçalho HSTS com SSL.
