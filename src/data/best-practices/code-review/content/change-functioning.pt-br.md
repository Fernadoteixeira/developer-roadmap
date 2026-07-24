# Verifique a mudança na produção.

A verificação da alteração é uma etapa crucial no processo de revisão de código que garante que as alterações recentemente mescladas funcionem corretamente e não causem interrupções inesperadas quando implantadas no ambiente de produção ativo. Testes rigorosos antes da implantação ajudam a minimizar os riscos, mas ter uma camada adicional de validação pós-implantação fornece a você a confiança de que as alterações no código estão funcionando conforme esperado enquanto interagem com usuários reais e dados de produção. Para ter certeza disso, considere as seguintes dicas:

- Implemente sistemas automatizados de monitoramento e alerta para acompanhar os principais indicadores de desempenho (KPIs) de sua aplicação e notificá-lo em caso de mudança significativa nas métricas.

- Incorpore sinalizadores ou alternâncias de recursos, permitindo ativar ou desativar facilmente alterações específicas em seu código, agilizando o processo de identificação e resolução de problemas na produção.

- Realize testes de fumaça, que são verificações funcionais rápidas e básicas que ajudam a confirmar a estabilidade operacional da sua aplicação após a implantação de novas alterações.

- Observe a interação do usuário por meio de análises de usuários, relatórios de bugs ou feedback direto para avaliar se a alteração no código teve o impacto pretendido e está afetando positivamente a experiência do usuário.

- Estabeleça estratégias para implantação gradual, como implantações canário ou azul-verde, para minimizar o impacto potencial de uma mudança problemática em toda a sua base de usuários e garantir uma reversão mais tranquila, se necessário.