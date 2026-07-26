# Pesquisa curta

A pesquisa curta é uma técnica em que um cliente envia periodicamente solicitações a um servidor em intervalos regulares para verificar se há atualizações ou novos dados. O servidor responde com o estado atual ou com quaisquer alterações desde a última solicitação. Embora simples de implementar e compatível com a maioria das infraestruturas HTTP, a pesquisa curta pode ser ineficiente devido às frequentes solicitações de rede e ao potencial de maior latência na entrega de atualizações. Contrasta com pesquisas longas e WebSockets, que oferecem mecanismos mais eficientes para comunicação em tempo real. A sondagem curta é frequentemente utilizada quando os requisitos em tempo real são menos rigorosos e a facilidade de implementação é uma prioridade.

Saiba mais com os seguintes recursos:

- [@article@Amazon SQS Pesquisa Curta e Longa](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html)
- [@video@Pesquisa Curta vs Votação Longa vs WebSockets](https://www.youtube.com/watch?v=ZBM28ZPlin8)
