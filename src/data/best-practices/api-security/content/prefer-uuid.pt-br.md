# Prefira UUIDs

> Use UUIDs em vez de números inteiros de incremento automático. Os UUIDs são globalmente únicos e não são sequenciais. Eles também são mais difíceis de adivinhar do que números inteiros sequenciais.

O uso de UUIDs em vez de IDs de incremento automático evita que invasores adivinhem ou iterem por meio de IDs de recursos. Os UUIDs são gerados aleatoriamente e contêm 128 bits de entropia, tornando praticamente impossível para os invasores adivinhá-los. Por outro lado, IDs de incremento automático podem ser facilmente previstos ou iterados, permitindo que invasores acessem ou manipulem recursos aos quais não deveriam ter acesso. Além disso, o uso de UUIDs pode ajudar a impedir a divulgação de informações, ocultando a ordem de criação ou acesso aos recursos.
