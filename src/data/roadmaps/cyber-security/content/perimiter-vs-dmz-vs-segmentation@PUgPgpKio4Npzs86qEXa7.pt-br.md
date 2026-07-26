# Perímetro vs DMZ vs Segmentação

Na segurança de rede, **perímetro**, **DMZ (zona desmilitarizada)** e **segmentação** são estratégias para organizar e proteger sistemas:

1. **Segurança de perímetro** refere-se ao limite externo de uma rede, normalmente protegida por firewalls, sistemas de detecção de intrusão (IDS) e outras medidas de segurança. Atua como a primeira linha de defesa contra ameaças externas, controlando o tráfego de entrada e saída para evitar acesso não autorizado.

2. **DMZ** é uma sub-rede que fica entre uma rede interna e a Internet externa, hospedando serviços públicos, como servidores web e servidores de e-mail. A DMZ isola esses serviços para minimizar o risco de invasores obterem acesso à rede interna ao comprometer um servidor público.

3. A **segmentação** divide uma rede em seções ou zonas menores e isoladas, cada uma com seus próprios controles de segurança. Isto limita a propagação de ataques, melhora a segurança interna e impõe o controlo de acesso entre diferentes partes da rede, reduzindo o impacto potencial de uma violação.

Juntas, estas estratégias criam uma defesa em camadas, protegendo recursos sensíveis através da gestão do fluxo de tráfego e dos pontos de acesso em toda a rede.

Saiba mais com os seguintes recursos:

- [@opensource@Melhores práticas para segmentação de rede](https://github.com/sergiomarotco/Network-segmentation-cheat-sheet)
- [@opensource@OWASP Folha de dicas sobre segmentação de rede](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Network_Segmentation_Cheat_Sheet.md#network-segmentation-cheat-sheet)
