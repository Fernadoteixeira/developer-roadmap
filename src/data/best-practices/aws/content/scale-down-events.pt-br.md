# Diminuir escala

> Reduza INSUFFICIENT_DATA e também ALARM.

Para sua ação de redução, certifique-se de acionar um evento de redução quando não houver dados de métrica, bem como quando o gatilho disparar. Por exemplo, se você tem um aplicativo que geralmente tem tráfego muito baixo, mas apresenta picos ocasionais, você quer ter certeza de que ele diminuirá quando o pico terminar e o tráfego parar. Se não houver tráfego, você receberá `INSUFFICIENT_DATA` em vez de `ALARM` para seu limite de tráfego baixo e não acionará uma ação de redução de escala.