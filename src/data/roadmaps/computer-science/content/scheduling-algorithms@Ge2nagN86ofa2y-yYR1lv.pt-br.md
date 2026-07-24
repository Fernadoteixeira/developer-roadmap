# Algoritmos de Agendamento

Agendamento de CPU é o processo de selecionar um processo da fila de prontos e alocar a CPU para ele. A seleção de um processo é baseada em um algoritmo de escalonamento específico. O algoritmo de escalonamento é escolhido dependendo do tipo de sistema e dos requisitos dos processos.

Aqui está a lista de alguns dos algoritmos de agendamento mais comumente usados:

- **Primeiro a chegar, primeiro a servir (FCFS):** O processo que chega primeiro recebe a CPU primeiro. É um algoritmo não preemptivo.
- **Shortest Job First (SJF):** O processo com o menor tempo de execução é alocado primeiro na CPU. É um algoritmo não preemptivo.
- **Shortest Remaining Time First (SRTF):** O processo com o menor tempo de execução restante é alocado primeiro à CPU. É um algoritmo preemptivo.
- **Round Robin (RR):** O processo recebe a CPU alocada por um intervalo de tempo fixo. O intervalo de tempo é geralmente de 10 milissegundos. É um algoritmo preemptivo.
- **Agendamento de prioridade:** O processo com a prioridade mais alta é alocado primeiro na CPU. É um algoritmo preemptivo.
- **Programação de filas multinível:** Os processos são divididos em diferentes filas com base em sua prioridade. O processo com a prioridade mais alta recebe primeiro a CPU. É um algoritmo preemptivo.
- **Programação de fila de feedback multinível:** Os processos são divididos em filas diferentes com base em sua prioridade. O processo com a prioridade mais alta recebe primeiro a CPU. Se um processo for interrompido, ele será movido para a próxima fila. É um algoritmo preemptivo.
- **Maior taxa de resposta seguinte (HRRN):** A CPU é alocada para o próximo processo que tiver a taxa de resposta mais alta e não para o processo que tiver menos tempo de burst. É um algoritmo não preemptivo.
- **Programação de Loteria:** O processo é alocado na CPU com base em um sistema de loteria. É um algoritmo preemptivo.

Visite os seguintes recursos para saber mais:

- [@article@CPU Agendamento no sistema operacional](https://www.scaler.com/topics/operating-system/cpu-scheduling/)