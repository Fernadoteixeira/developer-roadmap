# Resultados da Colmeia

> Especifique um diretório no S3 para resultados do Hive.

Se você usar o Hive para gerar resultados para o S3, deverá especificar um diretório no bucket, não a raiz do bucket, caso contrário, você obterá uma NullPointerException bastante inútil, sem nenhuma explicação real do motivo.
