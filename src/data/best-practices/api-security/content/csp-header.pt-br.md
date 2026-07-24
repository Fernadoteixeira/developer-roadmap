# Política de segurança de conteúdo

> Enviar cabeçalho `Content-Security-Policy: default-src 'none'`.

O envio do cabeçalho `Content-Security-Policy: default-src 'none'` é uma prática recomendada de segurança que ajuda a evitar ataques de cross-site scripting (XSS). Este cabeçalho informa ao navegador para não permitir o carregamento de recursos de fontes externas, como scripts, folhas de estilo ou imagens. Ele permite apenas recursos explicitamente incluídos na lista de permissões no cabeçalho CSP, como scripts ou folhas de estilo hospedados em seu próprio domínio. Isso pode ajudar a evitar que atores mal-intencionados injetem código em suas páginas da web por meio de ataques XSS, pois o navegador não executará nenhum script nem carregará nenhum recurso que não seja explicitamente permitido pela política CSP.
