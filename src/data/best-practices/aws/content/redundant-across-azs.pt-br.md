# Redundante entre AZs

> Seja sempre redundante em zonas de disponibilidade (AZs).

As AZs podem ter interrupções, já aconteceu no passado que certas coisas em uma AZ caíram. Distribuir seu aplicativo em várias AZs é tão simples quanto adicionar uma nova AZ ao seu balanceador de carga e iniciar uma instância nessa AZ. Você deve distribuir sua carga em pelo menos duas AZs! Se você puder pagar, ser redundante entre regiões também pode valer a pena, mas isso geralmente tem um custo de configuração mais complexo e nem sempre é necessário. Agora você pode copiar AMIs entre regiões e configurar seus registros Route53 para equilibrar o tráfego entre regiões, mas não pode usar um único ELB entre regiões.