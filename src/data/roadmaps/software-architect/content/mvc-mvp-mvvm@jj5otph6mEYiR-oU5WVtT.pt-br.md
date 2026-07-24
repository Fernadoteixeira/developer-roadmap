# MVC MVP MVVM

Model-view-controller, ou MVC, é um padrão usado para separar a interface do usuário, os dados e a lógica do aplicativo.
Isso é feito separando um aplicativo em três partes: Modelo, Visualização e Controlador. O modelo contém os dados, a visualização abrange a interface do usuário e o controlador atua como mediador entre os dois.

Model-view-presenter, ou MVP, foi projetado para facilitar testes unitários automatizados e melhorar a separação de interesses na lógica de apresentação. MVP é uma variante do padrão MVC, embora difere porque divide o aplicativo em interface do usuário (visualização), dados (modelo) e lógica de apresentação (apresentador). Embora o modelo e a representação da visualização permaneçam iguais ao padrão model-view-controller, o apresentador difere do controlador porque manipula o modelo e atualiza a visualização.

Outra variante do MVC é o padrão model-view-viewmodel. O Model-view-viewmodel, ou MVVM, separa o aplicativo em três componentes principais: Model, View e View Model. Embora a visualização e o modelo representem tudo o que fizeram em seu padrão pai, o modelo de visualização atua como um link entre o modelo e a visualização, recupera dados do modelo e os expõe à visualização por meio de ligação de dados bidirecional e pode manipular os dados do modelo.

Visite os seguintes recursos para saber mais:

- [@article@MVC, padrão de design MVP e MVVM](https://medium.com/@ankit.sinhal/mvc-mvp-and-mvvm-design-pattern-6e169567bbad)
- [@feed@Explore as principais postagens sobre programação geral](https://app.daily.dev/tags/general-programming?ref=roadmapsh)