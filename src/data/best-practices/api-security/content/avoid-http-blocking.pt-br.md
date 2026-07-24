# Evite bloqueio de HTTP

> Evite o bloqueio de HTTP se você estiver usando uma grande quantidade de dados, movendo as operações pesadas de HTTP para trabalhos em segundo plano ou tarefas assíncronas.

O bloqueio de HTTP é um problema comum em aplicativos da web. Ocorre quando o aplicativo não consegue processar solicitações HTTP recebidas devido a um grande número de solicitações ou a uma grande quantidade de dados. Isso pode fazer com que o aplicativo pare de responder e o servidor trave. Isso pode ser evitado movendo operações pesadas de HTTP para trabalhos em segundo plano ou tarefas assíncronas. Você pode usar uma fila de mensagens para enfileirar as solicitações e processá-las em segundo plano. Isso permitirá que o aplicativo continue processando outras solicitações enquanto as operações pesadas estão sendo processadas em segundo plano.
