# Use SDKs oficiais

> Se você precisar interagir com a AWS, use o SDK para sua linguagem.

Não tente criar o seu próprio, eu fiz isso no início porque só precisava de um simples upload para o S3, mas depois você adiciona mais serviços e é apenas uma má ideia. [Os AWS SDKs](http://aws.amazon.com/tools/) são bem escritos, lidam com autenticação automaticamente, lidam com lógica de repetição e são mantidos e iterados pela Amazon. Além disso, se você usar funções IAM do EC2 (o que é absolutamente necessário, falaremos mais sobre isso mais tarde), o SDK obterá automaticamente as credenciais corretas para você.
