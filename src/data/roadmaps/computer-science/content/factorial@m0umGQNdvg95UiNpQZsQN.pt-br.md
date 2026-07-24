# Fatorial

Algoritmos de complexidade fatorial têm um tempo de execução de `O(n!)`. Este é o pior cenário para um algoritmo. Algoritmos de complexidade fatorial são muito ineficientes e devem ser evitados.

```python
def generate_permutations(s):
    # Base case: If the string length is 1, return a list containing the string
    if len(s) == 1:
        return [s]

    # Initialize the result list
    permutations = []

    # Recursively generate all permutations
    for i in range(len(s)):
        # Current character
        current_char = s[i]
        # Remaining characters
        remaining_chars = s[:i] + s[i + 1 :]
        # Generate all permutations of the remaining characters
        for perm in generate_permutations(remaining_chars):
            # Add the current character to the front of each generated permutation
            permutations.append(current_char + perm)

    return permutations
```

Visite os seguintes recursos para saber mais:

- [@article@Big O Cheat Sheet - Gráfico de complexidade de tempo](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)
- [@video@Factorial Explicado](https://www.youtube.com/watch?v=pxh__ugRKz8)