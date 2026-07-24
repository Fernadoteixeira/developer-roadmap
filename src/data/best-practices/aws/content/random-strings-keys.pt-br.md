# Chaves S3

> Use strings aleatórias no início de suas chaves.

Parece uma ideia estranha, mas um dos detalhes de implementação do S3 é que a Amazon usa a chave do objeto para determinar onde um arquivo está fisicamente colocado no S3. Portanto, arquivos com o mesmo prefixo podem acabar no mesmo disco rígido, por exemplo. Ao randomizar seus prefixos de chave, você obtém uma melhor distribuição de seus arquivos de objetos. (Fonte: [Dicas e truques de desempenho do S3](https://aws.amazon.com/blogs/aws/amazon-s3-performance-tips-tricks-seattle-hiring-event/))