# Autenticação baseada em cookies

A autenticação baseada em cookies é um método de manter sessões de usuários em aplicativos da web. Quando um usuário faz login, o servidor cria uma sessão e envia um identificador exclusivo (ID da sessão) ao cliente como um cookie. Este cookie é então enviado com cada solicitação subsequente, permitindo ao servidor identificar e autenticar o usuário. Os dados reais da sessão são normalmente armazenados no servidor, com o cookie servindo apenas como uma chave para acessar esses dados. Essa abordagem tem estado no lado do servidor e funciona bem para aplicativos da Web tradicionais. É relativamente simples de implementar e é suportado nativamente pelos navegadores. No entanto, a autenticação baseada em cookies enfrenta desafios com solicitações de origem cruzada, pode ser vulnerável a ataques CSRF se não for devidamente protegida e pode não ser ideal para aplicativos modernos de página única ou aplicativos móveis. Apesar dessas limitações, continua sendo um método de autenticação comum, especialmente para aplicações web renderizadas em servidor.

Visite os seguintes recursos para saber mais:

- [@article@Como funciona a autenticação baseada em cookies?](https://stackoverflow.com/questions/17769011/how-does-cookie-based-authentication-work)
- [@video@Session vs autenticação de token em 100 segundos](https://www.youtube.com/watch?v=UBUNrFtufWo)
