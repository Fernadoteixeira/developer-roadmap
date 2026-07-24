# Encerrar SSL

> Encerre o SSL no balanceador de carga.

Você precisará adicionar as informações do seu certificado SSL ao ELB, mas isso eliminará a sobrecarga do encerramento do SSL dos seus servidores, o que pode acelerar as coisas. Além disso, se você fizer upload do seu certificado SSL, poderá passar pelo tráfego HTTPS e o balanceador de carga adicionará alguns cabeçalhos extras à sua solicitação (x-forwarded-for, etc), que são úteis se você quiser saber quem é o usuário final. Se você apenas encaminhar o TCP, esses cabeçalhos não serão adicionados e você perderá as informações.