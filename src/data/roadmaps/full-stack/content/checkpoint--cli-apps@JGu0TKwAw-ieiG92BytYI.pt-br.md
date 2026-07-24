# Ponto de verificação

Neste ponto, você deve ser capaz de construir aplicativos CLI usando Node.js ou qualquer linguagem de programação de back-end escolhida.

Você deve ser capaz de criar um aplicativo CLI que possa:

- Ler e gravar arquivos
- Analisar argumentos de linha de comando
- Faça solicitações HTTP
- Analisar JSON
- Use uma biblioteca de terceiros (por exemplo, uma biblioteca para analisar arquivos CSV)
- Use uma API de terceiros

Aqui estão algumas ideias para aplicativos CLI que você pode construir:

- Crie um aplicativo CLI que receba argumentos de URL e seletor CSS e imprima o conteúdo de texto do elemento que corresponde ao seletor. **Dica** você pode usar [cheerio](https://github.com/cheeriojs/cheerio)
- Um aplicativo que opcionalmente pega duas datas e imprime os projetos GitHub com mais estrelas nesse intervalo de datas. **Dica**: você pode usar a [API de pesquisa do GitHub](https://developer.github.com/v3/search/#search-repositories)
- Renomear arquivos em massa em um diretório. **Dica** você pode usar [fs](https://nodejs.org/api/fs.html) e [caminho](https://nodejs.org/api/path.html)
- Escreva um aplicativo CLI que use um caminho como entrada e comprima todas as imagens nesse diretório. Deve aceitar uma opção de caminho de saída; se o caminho de saída não for fornecido, ele deverá compactar as imagens no local, caso contrário, gravará as imagens compactadas no caminho de saída. **Dica** você pode usar [nítido](https://github.com/lovell/sharp).