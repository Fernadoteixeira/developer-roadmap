# Protocolo de autenticação extensível (EAP) vs Protocolo de autenticação extensível protegido (PEAP)

EAP e PEAP são estruturas de autenticação usadas em redes sem fio e conexões ponto a ponto para fornecer acesso seguro. EAP é uma estrutura de autenticação flexível que oferece suporte a vários métodos de autenticação, como cartões token, certificados e senhas, permitindo diversas implementações em segurança de rede. Contudo, o EAP por si só não fornece criptografia, deixando o processo de autenticação potencialmente vulnerável a ataques.

O PEAP, por outro lado, é uma versão do EAP projetada para aumentar a segurança, encapsulando a comunicação EAP em um túnel TLS (Transport Layer Security) seguro. Este túnel protege o processo de autenticação contra espionagem e ataques man-in-the-middle. O PEAP requer um certificado do lado do servidor para estabelecer o túnel TLS, mas não requer certificados do lado do cliente, facilitando a implantação e garantindo a transmissão segura de credenciais. PEAP é amplamente utilizado em redes sem fio para fornecer um mecanismo de autenticação seguro que protege as credenciais do usuário durante o processo de autenticação.

Saiba mais com os seguintes recursos:

- [@article@Extensible Authentication Protocol (EAP) para acesso à rede](https://learn.microsoft.com/en-us/windows-server/networking/technologies/extensible-authentication-protocol/network-access?tabs=eap-tls%2Cserveruserprompt-eap-tls%2Ceap-sim)
- [@article@O que é protocolo de autenticação extensível protegido (PEAP)](https://www.techtarget.com/searchsecurity/definition/PEAP-Protected-Extensible-Authentication-Protocol)
