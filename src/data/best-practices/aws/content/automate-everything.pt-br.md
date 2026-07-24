# Automatize tudo

Este é mais um conselho operacional geral do que específico da AWS, mas tudo precisa ser automatizado. Recuperação, implantação, failover, etc. As atualizações de pacotes e sistemas operacionais devem ser gerenciadas por algo, seja apenas um script bash ou Chef/Puppet, etc. Conforme mencionado em uma dica diferente, você também deve desativar o acesso SSH, pois isso destacará rapidamente qualquer parte do seu processo que não seja automatizada. Lembre-se da frase-chave da dica anterior: se você precisar usar SSH em seus servidores, sua automação falhou.
