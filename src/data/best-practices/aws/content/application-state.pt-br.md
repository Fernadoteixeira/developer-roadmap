# Estado do aplicativo

> Não armazene o estado do aplicativo em servidores.

A razão para isso é que, se o servidor for encerrado, você não perderá nenhum estado do aplicativo. Para esse fim, as sessões devem ser armazenadas em um banco de dados (ou algum outro tipo de armazenamento central; memcached, redis, etc.), e não no sistema de arquivos local. Exemplos:

- Os logs devem ser tratados via syslog (ou similar) e enviados para um armazenamento remoto.
- Os uploads devem ir direto para o S3 (não armazene no sistema de arquivos local e faça com que outro processo seja movido para o S3, por exemplo). Para o S3, você pode usar [URLs pré-assinados](http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) para permitir que seus usuários façam upload diretamente para o S3, ignorando totalmente o servidor.
- Quaisquer tarefas de pós-processamento ou de longa execução devem ser realizadas por meio de uma fila assíncrona (o SQS é ótimo para isso).