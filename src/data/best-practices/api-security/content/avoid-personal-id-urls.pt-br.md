# Evite ID pessoal em URLs

> Evite o ID pessoal do usuário nos URLs dos recursos, por exemplo. usuários/242/pedidos

O ID de recurso do próprio usuário deve ser evitado. Use `/me/orders` em vez de `/user/654321/orders`. Isso ajudará a evitar o risco de exposição da ID pessoal do usuário, que pode ser usada para novos ataques.