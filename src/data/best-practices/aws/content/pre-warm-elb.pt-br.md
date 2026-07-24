# ELB pré-aquecido

> Pré-aqueça seus ELBs se você espera tráfego intenso.

Leva tempo para o seu ELB aumentar a capacidade. Se você sabe que terá um grande pico de tráfego (venda de ingressos, grande evento, etc.), você precisa “aquecer” seu ELB com antecedência. Você pode injetar uma carga de tráfego e isso fará com que o ELB aumente e não engasgue quando você realmente obtiver o tráfego. No entanto, a AWS sugere que você entre em contato com eles para pré-aquecer seu balanceador de carga. (Fonte: [Práticas recomendadas na avaliação do Elastic Load Balancing](https://aws.amazon.com/articles/best-practices-in-evaluating-elastic-load-balancing/#pre-warming)). Alternativamente, você pode instalar seu próprio software balanceador de carga em uma instância EC2 e usá-lo (HAProxy, etc).