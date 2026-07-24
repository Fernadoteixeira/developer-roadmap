# Dimensões da imagem

> Defina atributos de largura e altura em `<img>` se o tamanho final da imagem renderizada for conhecido.

Se a altura e a largura estiverem definidas, o espaço necessário para a imagem será reservado quando a página for carregada. Porém, sem esses atributos, o navegador não sabe o tamanho da imagem, e não pode reservar o espaço apropriado para ela. O efeito será que o layout da página mudará durante o carregamento (enquanto as imagens são carregadas).