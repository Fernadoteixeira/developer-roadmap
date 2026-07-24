# Bloquear grupos de segurança

> Bloqueie seus grupos de segurança.

Não use `0.0.0.0/0` se puder evitar, certifique-se de usar regras específicas para restringir o acesso às suas instâncias. Por exemplo, se suas instâncias estiverem atrás de um ELB, você deverá definir seus grupos de segurança para permitir apenas o tráfego dos ELBs, em vez de `0.0.0.0/0`. Você pode fazer isso inserindo "amazon-elb/amazon-elb-sg" como o CIDR (deve ser preenchido automaticamente para você). Se você precisar permitir que algumas de suas outras instâncias acessem determinadas portas, não use o IP delas, mas especifique o identificador do grupo de segurança (basta começar a digitar "sg-" e ele deverá ser preenchido automaticamente para você).
