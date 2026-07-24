# Evite EIPs de servidor

> Não forneça IPs estáticos/elásticos aos servidores.

Para um aplicativo Web típico, você deve colocar tudo atrás de um balanceador de carga e equilibrá-los entre AZs. Existem alguns casos em que IPs elásticos provavelmente precisarão ser usados, mas para fazer melhor uso do escalonamento automático, você desejará usar um balanceador de carga em vez de fornecer a cada instância seu próprio IP exclusivo.
