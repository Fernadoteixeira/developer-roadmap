# Ponto de verificação

Neste ponto, você poderá instalar e usar pacotes externos usando `npm`. Você provavelmente conhece [npmjs.com](https://npmjs.com/) onde pode procurar pacotes e ler sua documentação. Você também deve estar familiarizado com o arquivo `package.json` e como usá-lo para gerenciar as dependências do seu projeto.

Você não precisa entrar nos empacotadores de módulos e construir ferramentas ainda. Apenas certifique-se de poder usar as dependências instaladas na pasta `node_modules` usando links simples e tags de script em seu HTML.

Em relação aos projetos, aqui estão algumas ideias que você pode experimentar:

- Crie uma página simples que mostre a hora atual do usuário. Você pode usar [dayjs](https://day.js.org/) para obter a hora atual e exibi-la na página. Aqui está o [modelo de design para página inicial](https://i.imgur.com/yGIMGkr.png).
- Instale a biblioteca [micromodal](https://micromodal.vercel.app/#introduction). Crie um botão na página clicando que deve abrir um modal e permitir que o usuário selecione um fuso horário em um menu suspenso. Assim que o usuário selecionar um fuso horário, o modal deverá fechar e a hora na página deverá ser atualizada para mostrar a hora no fuso horário selecionado. Aqui está o [modelo de design para o modal](https://imgur.com/a/vFY6Sdl).