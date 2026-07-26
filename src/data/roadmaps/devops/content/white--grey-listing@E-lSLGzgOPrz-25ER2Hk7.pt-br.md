# Listagem Branca vs Listagem Cinza

A lista de permissões envolve a criação de uma lista de entidades confiáveis ​​(como endereços IP, endereços de e-mail ou aplicativos) que têm permissão explícita para acessar um sistema ou enviar mensagens. Qualquer coisa que não esteja na lista de permissões é negada por padrão. A lista branca oferece um alto nível de segurança ao limitar o acesso apenas a entidades conhecidas e aprovadas, mas pode ser inflexível e exigir atualizações frequentes para acomodar alterações legítimas. Greylisting é uma abordagem mais flexível usada principalmente na filtragem de e-mail. Quando um e-mail é recebido de um remetente desconhecido, o servidor o rejeita temporariamente com uma resposta “tente novamente mais tarde”. Os servidores de e-mail legítimos tentarão enviar novamente o e-mail após um pequeno atraso, enquanto os spammers, que muitas vezes não tentam novamente, serão bloqueados. Este método reduz o spam aproveitando o fato de que os spammers geralmente não seguem mecanismos de repetição. A lista cinza pode ser menos intrusiva do que a lista branca, mas pode introduzir pequenos atrasos na entrega de e-mails para remetentes iniciantes.

Visite os seguintes recursos para saber mais:

- [@article@Introdução detalhada à lista cinza](<https://en.wikipedia.org/wiki/Greylisting_(email)>)
- [@video@Greylisting](https://www.youtube.com/watch?v=ljtU6I0sIiw)
- [@video@Como colocar um endereço de e-mail na lista de permissões?](https://www.youtube.com/watch?v=NqQIBtY7ySw)
