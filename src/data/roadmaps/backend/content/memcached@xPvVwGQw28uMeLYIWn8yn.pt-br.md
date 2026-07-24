# Memcached

Memcached (pronuncia-se mem-cash-dee ou mem-cashed) é um sistema de cache de memória distribuído de uso geral. É frequentemente usado para acelerar sites dinâmicos baseados em banco de dados, armazenando dados e objetos em cache na RAM para reduzir o número de vezes que uma fonte de dados externa (como um banco de dados ou API) deve ser lida. Memcached é um software gratuito e de código aberto, licenciado sob a licença BSD revisada. O Memcached é executado em sistemas operacionais do tipo Unix (Linux e macOS) e no Microsoft Windows. Depende da biblioteca `libevent`. As APIs do Memcached fornecem uma tabela hash muito grande distribuída em várias máquinas. Quando a tabela está cheia, as inserções subsequentes fazem com que os dados mais antigos sejam eliminados na ordem menos usada recentemente (LRU). Os aplicativos que usam o Memcached normalmente colocam solicitações e adições em camadas na RAM antes de recorrer a um armazenamento de apoio mais lento, como um banco de dados.

Visite os seguintes recursos para saber mais:

- [@opensource@memcached/memcached](https://github.com/memcached/memcached#readme)
- [@article@Tutorial do Memcached](https://www.tutorialspoint.com/memcached/index.htm)
- [@video@Redis vs Memcached](https://www.youtube.com/watch?v=Gyy1SiE8avE)