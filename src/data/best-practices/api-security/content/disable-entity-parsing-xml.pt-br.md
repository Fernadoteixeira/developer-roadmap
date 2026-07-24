# Desativar análise de entidade em XML

> Desative a análise de entidade se estiver analisando XML para evitar ataques XXE

Se o analisador XML for vulnerável a ataques XXE, o invasor poderá usar essa vulnerabilidade para ler arquivos no servidor, realizar ataques SSRF e muito mais. Isso pode levar à divulgação de informações confidenciais, negação de serviço e outros ataques.

O ataque XXE (Entidade Externa XML) é um tipo de ataque que tem como alvo aplicativos que analisam entradas XML de fontes não confiáveis. Neste ataque, um invasor injeta uma carga XML maliciosa. Essa carga útil pode conter entidades externas que o invasor pode usar para recuperar dados confidenciais, executar código remoto ou lançar ataques de negação de serviço. Os ataques XXE podem ser evitados desabilitando o processamento de entidades externas ou validando e limpando a entrada XML antes de analisá-la.
