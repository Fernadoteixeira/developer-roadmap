# ARP

ARP é um protocolo usado pelo Internet Protocol (IP) para mapear um endereço IP para um endereço físico, também conhecido como endereço Media Access Control (MAC). O ARP é essencial para rotear dados entre dispositivos em uma rede local (LAN), pois permite a tradução de endereços IP para hardware específico na rede. Quando um dispositivo deseja se comunicar com outro dispositivo na mesma LAN, ele precisa determinar o endereço MAC correspondente ao endereço IP de destino. O ARP ajuda nesse processo transmitindo uma solicitação ARP contendo o endereço IP de destino. Todos os dispositivos dentro do domínio de transmissão recebem esta solicitação ARP e comparam o endereço IP de destino com seu próprio endereço IP. Se for encontrada uma correspondência, o dispositivo com o endereço IP correspondente envia uma resposta ARP que contém o seu endereço MAC. O dispositivo que iniciou a solicitação ARP agora pode atualizar seu cache ARP (uma tabela que armazena mapeamentos IP para MAC) com as novas informações e, em seguida, enviar dados para o endereço MAC do alvo.

Saiba mais com os seguintes recursos:

- [@artigo@ARP - Wikipédia](https://en.wikipedia.org/wiki/Address_Resolution_Protocol)
- [@video@ARP explicado](https://www.youtube.com/watch?v=cn8Zxh9bPio)
- [@article@O que é protocolo de resolução de endereço?](https://www.fortinet.com/resources/cyberglossary/what-is-arp)
