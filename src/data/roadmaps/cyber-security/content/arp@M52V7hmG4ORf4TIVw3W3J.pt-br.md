# ARP

O Address Resolution Protocol (ARP) é um mecanismo crucial usado em redes que permite ao Internet Protocol (IP) mapear um endereço IP para um endereço físico correspondente, comumente conhecido como endereço Media Access Control (MAC). Este protocolo é essencial para permitir que dispositivos dentro de uma rede local (LAN) se comuniquem, traduzindo endereços IP em endereços de hardware específicos.

Quando um dispositivo em uma LAN deseja se comunicar com outro, ele precisa saber o endereço MAC associado ao endereço IP do dispositivo alvo. O ARP facilita isso enviando uma solicitação ARP, que transmite o IP alvo para todos os dispositivos na rede. Cada dispositivo compara o IP solicitado com o seu próprio. O dispositivo que reconhece o IP como seu responde com uma resposta ARP, que inclui seu endereço MAC.

Depois que o dispositivo solicitante recebe o endereço MAC, ele atualiza seu cache ARP – uma tabela que armazena mapeamentos de endereços IP para MAC – permitindo enviar dados diretamente para o endereço de hardware correto.

Saiba mais com os seguintes recursos:

- [@artigo@ARP - Wikipédia](https://en.wikipedia.org/wiki/Address_Resolution_Protocol)
- [@video@ARP explicado](https://www.youtube.com/watch?v=cn8Zxh9bPio)
- [@article@O que é protocolo de resolução de endereço?](https://www.fortinet.com/resources/cyberglossary/what-is-arp)
