# CIDR

CIDR, ou Classless Inter-Domain Routing, é um método de alocação de endereços IP e roteamento de pacotes de protocolo da Internet de uma forma mais flexível e eficiente, em comparação com o método mais antigo de endereçamento IP Classful. Desenvolvido no início da década de 1990, o CIDR ajuda a desacelerar o esgotamento dos endereços IPv4 e a reduzir o tamanho das tabelas de roteamento, resultando em melhor desempenho e escalabilidade da Internet.

O CIDR atinge seus objetivos substituindo os esquemas tradicionais de endereçamento de Classe A, B e C por um sistema que permite o mascaramento de sub-rede de comprimento variável (VLSM). No CIDR, um endereço IP e sua máscara de sub-rede são escritos juntos como uma única entidade, conhecida como _notação CIDR_.

Uma notação CIDR se parece com isto: `192.168.1.0/24`. Aqui, `192.168.1.0` é o endereço IP e `/24` representa a máscara de sub-rede. O número após a barra (/) é chamado de _comprimento do prefixo_, que indica quantos bits da máscara de sub-rede devem ser definidos como 1 (máscara de bits). Os bits restantes da máscara de sub-rede são definidos como 0.

Saiba mais com os seguintes recursos:

- [@artigo@O que é CIDR?](https://aws.amazon.com/what-is/cidr/)
- [@video@O que é notação CIDR de rede?](https://www.youtube.com/watch?v=tpa9QSiiiUo)