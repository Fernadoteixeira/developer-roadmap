# Bloqueio/Mutex/Semáforo

Um bloqueio permite que apenas um thread entre na parte bloqueada e o bloqueio não é compartilhado com nenhum outro processo.

Um mutex é o mesmo que um bloqueio, mas pode abranger todo o sistema (compartilhado por vários processos).

Um semáforo faz o mesmo que um mutex, mas permite a entrada de um número x de threads. Isso pode ser usado, por exemplo, para limitar o número de tarefas com uso intensivo de CPU, io ou memória RAM em execução ao mesmo tempo.

Visite os seguintes recursos para saber mais:

- [@article@Qual é a diferença entre lock, mutex e semáforo?](https://stackoverflow.com/questions/2332765/what-is-the-difference-between-lock-mutex-and-semaphore)
- [@article@O que é um semáforo](https://stackoverflow.com/questions/34519/what-is-a-semaphore/40238#40238)