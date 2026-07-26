# LXC

LXC (Linux Containers) é um método de virtualização em nível de sistema operacional para executar vários sistemas Linux isolados em um único host usando um único kernel Linux. Ele fornece uma alternativa leve à virtualização completa da máquina, oferecendo desempenho e densidade quase nativos. O LXC usa recursos do kernel Linux, como cgroups e namespaces, para criar contêineres que possuem seu próprio processo e espaço de rede, enquanto compartilham o mesmo kernel do sistema host. Essa tecnologia permite a utilização eficiente de recursos e a rápida implantação de aplicativos. LXC é frequentemente usado para criar ambientes de desenvolvimento, testar e executar vários serviços isolados em uma única máquina. Embora semelhante em conceito ao Docker, o LXC fornece uma abordagem mais de contêiner de sistema em comparação com o foco de contêiner de aplicativo do Docker.

Visite os seguintes recursos para saber mais:

- [@official@LXC Site](https://linuxcontainers.org/)
- [@documentação@LXC](https://linuxcontainers.org/lxc/documentation/)
- [@video@Introdução aos contêineres LXC](https://www.youtube.com/watch?v=CWmkSj_B-wo)
- [@video@LXC - Guia para construir um laboratório LXC](https://www.youtube.com/watch?v=cqOtksmsxfg)
