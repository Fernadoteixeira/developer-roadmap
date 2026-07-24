# Exponencial

Algoritmos exponenciais são aqueles que crescem a uma taxa de 2^n. Isso significa que para cada entrada adicional, o algoritmo levará o dobro do tempo para ser executado. A função a seguir é um exemplo de algoritmo exponencial:

```python
def exponential(n):
    if n == 0:
        return 1
    return exponential(n - 1) + exponential(n - 1)
```

Como você pode ver, o tempo de execução do algoritmo cresce exponencialmente. Para cada entrada adicional, o algoritmo levará o dobro do tempo para ser executado.

Visite os seguintes recursos para saber mais:

- [@video@Big O Notation — Calculando a complexidade do tempo](https://www.youtube.com/watch?v=Z0bH0cMY0E8)
- [@video@Notações Big O](https://www.youtube.com/watch?v=V6mKVRU1evU)