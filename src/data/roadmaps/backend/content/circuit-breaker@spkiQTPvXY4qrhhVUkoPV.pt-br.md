# Disjuntor

O padrão de projeto do disjuntor é uma forma de proteger um sistema contra falhas ou carga excessiva, interrompendo temporariamente certas operações se o sistema for considerado em estado de falha ou sobrecarga. É comumente usado em ambientes de computação em nuvem para evitar falhas em cascata e melhorar a resiliência e disponibilidade de um sistema. Um disjuntor consiste em três estados: fechado, aberto e semiaberto. No estado fechado, o disjuntor permite que as operações prossigam normalmente. Se o sistema encontrar uma falha ou ficar sobrecarregado, o disjuntor passa para o estado aberto e todas as operações subsequentes são imediatamente interrompidas. Após um período de tempo especificado, o disjuntor passa para o estado semiaberto e um pequeno número de operações pode prosseguir. Se estas operações forem bem-sucedidas, o disjuntor volta ao estado fechado; se falharem, o disjuntor volta ao estado aberto.

Visite os seguintes recursos para saber mais:

- [@article@Disjuntor - AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_graceful_degradation.html)
- [@article@O padrão do disjuntor](https://aerospike.com/blog/circuit-breaker-pattern/)
- [@video@De volta ao básico: estabilidade estática usando um padrão de disjuntor](https://www.youtube.com/watch?v=gy1RITZ7N7s)
