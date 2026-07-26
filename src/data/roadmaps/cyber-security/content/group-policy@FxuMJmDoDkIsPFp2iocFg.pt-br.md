# Política de Grupo

_Política de Grupo_ é um recurso dos sistemas operacionais Windows que permite aos administradores definir e gerenciar configurações, definições e políticas de segurança para vários aspectos dos usuários e dispositivos em uma rede. Esse recurso ajuda você a estabelecer e manter um ambiente consistente e seguro, o que é crucial para organizações de todos os tamanhos.

A Política de Grupo funciona mantendo uma hierarquia de _Objetos de Política de Grupo_ (GPOs), que contêm várias configurações de política. Os GPOs podem ser vinculados a diferentes níveis da estrutura do Active Directory (AD), como domínio, site e níveis de unidade organizacional (OU). Ao vincular GPOs a níveis específicos, você pode criar um ambiente no qual diferentes configurações são aplicadas a diferentes grupos de usuários e computadores, dependendo de sua localização na estrutura do AD.

Quando um usuário faz login ou um computador é inicializado, os GPOs relevantes da estrutura do AD são avaliados para determinar as configurações finais da política. Os GPOs são processados ​​em uma ordem específica — local, site, domínio e UOs, sendo que o último tem a prioridade mais alta. Essa ordem garante que você possa ter um conjunto básico de políticas no nível do domínio, com políticas mais específicas aplicadas no nível da UO, conforme necessário.

Saiba mais com os seguintes recursos:

- [@official@Visão geral da política de grupo](<https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh831791(v=ws.11)>)
- [@video@Aprenda a Política de Grupo do Windows da maneira mais fácil!](https://www.youtube.com/watch?v=rEhTzP-ScBo)
