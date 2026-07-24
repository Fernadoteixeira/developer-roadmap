# Segredos Selados

Sealed Secrets é um controlador e ferramenta do Kubernetes que permite aos usuários criptografar seus segredos do Kubernetes em "SealedSecrets" criptografados que podem ser armazenados com segurança em repositórios públicos ou ambientes inseguros. Desenvolvido pela Bitnami, ele aborda o desafio de gerenciar informações confidenciais em fluxos de trabalho baseados em Git e gerenciamento de cluster. O controlador em execução no cluster descriptografa SealedSecrets em segredos regulares, garantindo que os dados confidenciais originais nunca saiam do cluster. Essa abordagem permite o gerenciamento seguro e declarativo de segredos em ambientes Kubernetes, alinhando-se às práticas de GitOps. Sealed Secrets usa criptografia assimétrica, onde apenas o controlador no cluster possui a chave privada para descriptografar os segredos. Essa ferramenta aumenta a segurança nas implantações do Kubernetes, permitindo que os segredos sejam controlados por versão e gerenciados junto com outros recursos do Kubernetes, sem expor dados confidenciais.

Visite os seguintes recursos para saber mais:

- [@opensource@bitname/segredos-selados](https://github.com/bitnami-labs/sealed-secrets)
- [@article@Segredos Selados](https://fluxcd.io/flux/guides/sealed-secrets/)