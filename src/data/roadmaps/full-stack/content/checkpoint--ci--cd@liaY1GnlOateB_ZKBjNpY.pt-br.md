# Ponto de verificação — CI/CD

Agora que você configurou a infraestrutura, é hora de automatizar o processo de implantação. É aqui que entra CI/CD. Se você não sabe o que é CI/CD, assista [DevOps CI/CD explicado em 100 segundos](https://www.youtube.com/watch?v=scEDHsr3APg).

A próxima etapa neste ponto é implementar CI/CD para seu aplicativo usando ações do GitHub. Configure uma ação do GitHub que, sempre que você pressionar para master, irá automaticamente:

- Execute seus testes (ignore esta etapa se ainda não aprendeu)
- Implante seu aplicativo na AWS

Em relação à implantação na AWS você pode usar `rsync` para copiar os arquivos para o servidor. Aqui está um [exemplo de fluxo de trabalho do GitHub](https://gist.github.com/kamranahmedse/1e94b412006040f38e24b9443b2da41a) usando `rsync`.
