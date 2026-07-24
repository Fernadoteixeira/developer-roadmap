# openllmetry

openllmetry é uma pequena biblioteca Python que facilita observar o que seu agente de IA está fazendo e como está funcionando. Ele agrupa chamadas para APIs de modelos de linguagem grande, armazenamentos de vetores e outras ferramentas e, em seguida, envia logs, rastreamentos e métricas simples para qualquer back-end que utilize o padrão OpenTelemetry, como Jaeger, Zipkin ou Grafana. Você adiciona uma ou duas linhas de código na inicialização e a biblioteca captura o texto do prompt, o nome do modelo, a latência, a contagem de tokens e os custos cada vez que o agente solicita uma resposta ao modelo. Os dados ajudam a identificar etapas lentas, gastos altos ou respostas ruins e permitem reproduzir rastreamentos completos para depurar cadeias de agentes. Como segue o OpenTelemetry, você pode combinar esses rastreamentos de IA com rastreamentos de serviço normais e ver todo o fluxo em um só lugar.

Visite os seguintes recursos para saber mais:

- [@official@OpenTelemetry Documentação](https://www.traceloop.com/blog/openllmetry)
- [@oficial@O que é OpenLLMetry? - traceloop](https://www.traceloop.com/docs/openllmetry/introduction)
- [@official@Use Traceloop com Python](https://www.traceloop.com/docs/openllmetry/getting-started-python)
- [@opensource@traceloop/openllmetry](https://github.com/traceloop/openllmetry)