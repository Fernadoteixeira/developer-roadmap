# Desativar expansão de entidade

> Desative a expansão de entidade se estiver usando XML, YML ou qualquer outra linguagem

Desabilitar a expansão de entidade é importante ao usar XML, YAML ou qualquer outra linguagem que permita entidades porque ajuda a evitar ataques de injeção de tags XXE (XML External Entity) ou YAML. Nestes ataques, o invasor normalmente injeta algum tipo de código customizado na entrada para realizar ataques contra a aplicação. Ao desabilitar a expansão da entidade, a entrada não pode ser manipulada desta forma, reduzindo o risco de tais ataques.
