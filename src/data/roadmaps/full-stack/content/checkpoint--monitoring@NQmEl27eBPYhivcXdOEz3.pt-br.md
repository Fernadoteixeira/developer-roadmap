# Ponto de verificação

Agora você deve implementar monitoramento e reinicializações automáticas para seu aplicativo usando monit. Em relação às reinicializações automáticas, você também pode usar [pm2](https://pm2.keymetrics.io/).

Aqui estão alguns dos monitores que você deve implementar para o aplicativo.

- Uso da CPU
- Uso de memória
- Uso de disco
- Uso da rede
- Disponibilidade do serviço
- Disponibilidade do Processo

Monit vem com configurações existentes para muitos serviços. Você pode encontrá-los em `/etc/monit/conf-available`. Você pode copiá-los (e modificá-los, se necessário) para `/etc/monit/conf-enabled` para ativá-los.
