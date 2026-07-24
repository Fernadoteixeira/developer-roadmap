# JavaScript sem bloqueio

Os arquivos JavaScript são carregados de forma assíncrona usando async ou adiados usando o atributo defer.

```javascript
<!-- Defer Attribute -->
<script defer src="foo.js"></script>

<!-- Async Attribute -->
<script async src="foo.js"></script>
```

O JavaScript bloqueia a análise normal do documento HTML, portanto, quando o analisador atinge uma tag `<script>` (particularmente dentro de `<head>`), ele para para buscá-lo e executá-lo. Adicionar async ou defer é altamente recomendado se seus scripts forem colocados no topo da página, mas menos valioso se estiver logo antes de sua tag `</body>`. Mas é uma boa prática sempre usar esses atributos para evitar qualquer problema de desempenho.

- Adicione `async` (se o script não depender de outros scripts) ou `defer` (se o script depender ou for utilizado por um script assíncrono) como um atributo à sua tag de script.
- Se você tiver scripts pequenos, talvez use o script in-line acima dos scripts assíncronos.

- [Remover JavaScript de bloqueio de renderização](https://developers.google.com/speed/docs/insights/v5/get-started)
