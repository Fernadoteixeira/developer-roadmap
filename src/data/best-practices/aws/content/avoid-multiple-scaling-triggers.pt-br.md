# Vários gatilhos de escalonamento

> Não use vários gatilhos de escalabilidade no mesmo grupo.

Se você tiver vários alarmes do CloudWatch que acionam ações de escalabilidade para o mesmo grupo de escalabilidade automática, talvez isso não funcione conforme o esperado inicialmente. Por exemplo, digamos que você adicione um gatilho para aumentar quando o uso da CPU fica muito alto ou quando o tráfego de rede de entrada fica alto, e suas ações de redução são o oposto. Você pode obter um aumento no uso da CPU, mas sua rede de entrada está boa. Portanto, o acionador de alta CPU causa uma ação de aumento de escala, mas o alarme de baixo tráfego de entrada aciona imediatamente uma ação de redução de escala. Dependendo de como você definiu o período de espera, isso pode causar um grande problema, pois eles simplesmente lutarão entre si. Se quiser vários acionadores, você poderá usar vários grupos de escalonamento automático.
