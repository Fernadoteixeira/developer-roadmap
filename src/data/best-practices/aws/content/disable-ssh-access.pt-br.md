# Desativar acesso SSH

> Desative o acesso SSH a todos os servidores.

Isso parece loucura, eu sei, mas a porta 22 não deveria ser permitida para todos no seu grupo de segurança. Se há algo que você aprendeu com esta postagem, deve ser esta: **Se você precisar usar SSH em seus servidores, sua automação falhou**. Desativá-lo no nível do firewall (e não nos próprios servidores) ajudará na transição para esse quadro de pensamento, pois destacará todas as áreas que você precisa automatizar, ao mesmo tempo que permitirá restabelecer facilmente o acesso para resolver problemas imediatos. É incrivelmente libertador saber que você nunca precisa usar SSH em uma instância. Esta é a coisa mais assustadora e ao mesmo tempo mais útil que aprendi.

Desabilitar o SSH de entrada tem sido apenas uma maneira de me impedir de trapacear com a automação (ah, vou apenas fazer o SSH e consertar isso). Ainda posso reativá-lo no grupo de segurança se precisar depurar ativamente algo em uma instância, já que às vezes não há outra maneira de depurar determinados problemas. Também depende da sua aplicação; Se o seu aplicativo depende da capacidade de enviar coisas para um servidor via SSH, desativá-lo pode ser uma má ideia. O bloqueio do SSH de entrada funcionou para mim e me forçou a colocar minha automação em um estado decente, mas pode não ser para todos.
