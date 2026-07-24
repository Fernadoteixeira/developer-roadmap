# Implantação

Agora que você conhece os fundamentos da AWS, deverá ser capaz de implantar seu aplicativo na AWS. Você não precisa usar todos os serviços da AWS. Aqui está o que você provavelmente pode fazer para começar:

- Configure uma instância EC2 usando qualquer AMI (por exemplo, versão mais recente do Ubuntu)
- SSH na instância EC2 usando o par de chaves que você criou
- Instale o Node.js na instância EC2
- Instale o Git na instância EC2
- Clone seu aplicativo do GitHub
- Instalar e configurar banco de dados na instância EC2 (por exemplo, PostgreSQL)
- Certifique-se de que o grupo de segurança da instância EC2 permite tráfego HTTP e HTTPS
- Tente acessar sua aplicação usando o endereço IP público da instância EC2
- Compre ou configure um nome de domínio usando Route53 (ou qualquer outro provedor de nome de domínio) e aponte-o para o endereço IP público da instância EC2
- Configure HTTPs usando [certbot](https://roadmap.sh/guides/setup-and-auto-renew-ssl-certificates)
- E pronto! Você implantou seu aplicativo na AWS!

Se você tiver dúvidas, aqui está um vídeo que mostra como implantar um aplicativo Node.js no AWS EC2:

- [@video@Deploy Node App no AWS EC2](https://youtu.be/oHAQ3TzUTro)
- [@feed@Explore as principais postagens sobre CI/CD](https://app.daily.dev/tags/cicd?ref=roadmapsh)