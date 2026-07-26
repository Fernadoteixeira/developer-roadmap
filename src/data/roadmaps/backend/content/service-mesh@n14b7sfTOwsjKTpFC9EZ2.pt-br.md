# Malha de serviço

Uma malha de serviço é um padrão arquitetônico para aprimorar a comunicação, a segurança e o gerenciamento entre microsserviços em uma rede distribuída. Ele emprega uma coleção de proxies inteligentes para gerenciar a comunicação entre serviços, garantindo alta disponibilidade, balanceamento de carga eficiente e descoberta robusta de serviços. Além disso, uma malha de serviço oferece recursos avançados como observabilidade para monitorar o comportamento da rede e vários recursos de gerenciamento de tráfego. Em uma configuração típica de service mesh, cada microsserviço é emparelhado com um proxy. Este proxy, muitas vezes implantado usando um padrão sidecar, é responsável não apenas por lidar com a comunicação de e para seu microsserviço associado, mas também por implementar diversas funcionalidades de rede. Essas funcionalidades incluem balanceamento de carga, roteamento inteligente e garantia de transferência segura de dados. O padrão sidecar, parte integrante das malhas de serviço, envolve a implantação do proxy como um contêiner sidecar junto com o contêiner principal de microsserviços, especialmente em ambientes Kubernetes. Esse design permite que a malha de serviço funcione de forma independente dos próprios microsserviços, simplificando o gerenciamento e as atualizações.

Visite os seguintes recursos para saber mais:

- [@article@O que é um Service Mesh (blog AWS)?](https://aws.amazon.com/what-is/service-mesh/)
- [@article@O que é um Service Mesh (blog RedHat)?](https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh)
- [@video@O que é uma malha de serviço?](https://www.youtube.com/watch?v=vh1YtWjfcyk)
- [@feed@Explore as principais postagens sobre Service Mesh](https://app.daily.dev/tags/service-mesh?ref=roadmapsh)
