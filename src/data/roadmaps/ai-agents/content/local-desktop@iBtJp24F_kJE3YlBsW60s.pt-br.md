# Área de trabalho local

Uma implantação de desktop local significa executar o servidor MCP diretamente em seu próprio computador, em vez de em uma nuvem ou servidor remoto. Você instala o software MCP, os tempos de execução necessários e os arquivos de modelo em seu desktop ou laptop. O servidor então escuta em um endereço local como `127.0.0.1:8000`, acessível apenas na mesma máquina, a menos que você abra as portas manualmente. Essa configuração é ótima para testes rápidos, demonstrações pessoais ou experimentos privados, pois você mantém controle total e evita custos de nuvem. No entanto, é limitado pela velocidade e memória do seu hardware, e outros não podem acessá-lo sem ferramentas de tunelamento, como ngrok ou encaminhamento de porta local.

Visite os seguintes recursos para saber mais:

- [@article@Construa um servidor MCP local simples](https://blog.stackademic.com/build-simple-local-mcp-server-5434d19572a4)
- [@article@Como construir e hospedar seus próprios servidores MCP em etapas fáceis](https://collabnix.com/how-to-build-and-host-your-own-mcp-servers-in-easy-steps/)
- [@article@Expor localhost à Internet](https://ngrok.com/docs)
- [@video@Execute um servidor local em sua máquina](https://www.youtube.com/watch?v=ldGl6L4Vktk)