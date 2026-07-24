# Extensões de segurança DNS (DNSSEC)

As Extensões de Segurança DNS (DNSSEC) são um conjunto de protocolos projetados para adicionar uma camada de segurança ao Sistema de Nomes de Domínio (DNS), permitindo que as respostas DNS sejam autenticadas. Embora o próprio DNS resolva nomes de domínio em endereços IP, ele não verifica inerentemente a autenticidade das respostas, deixando-o vulnerável a ataques como envenenamento de cache, em que um invasor injeta dados maliciosos no cache de um resolvedor de DNS. O DNSSEC resolve isso usando assinaturas digitais para garantir que os dados recebidos são exatamente os pretendidos pelo proprietário do domínio e não foram adulterados durante o trânsito. Quando um resolvedor de DNS solicita informações, os servidores habilitados para DNSSEC respondem com os dados solicitados e com uma assinatura digital correspondente. O resolvedor pode então verificar esta assinatura usando uma cadeia de confiança, garantindo a integridade e autenticidade da resposta DNS. Ao proteger contra dados DNS forjados, o DNSSEC desempenha um papel fundamental no aumento da segurança das comunicações na Internet.

Saiba mais com os seguintes recursos:

- [@article@Como funciona o DNSSEC](https://www.cloudflare.com/en-gb/dns/dnssec/how-dnssec-works/)
- [@video@O que é DNSSEC?](https://www.youtube.com/watch?v=Fk2oejzgSVQ)