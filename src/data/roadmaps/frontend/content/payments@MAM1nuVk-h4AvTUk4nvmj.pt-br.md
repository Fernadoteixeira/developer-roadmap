# Pagamentos

A API de solicitação de pagamento é uma API da web que permite aos desenvolvedores da web criar fluxos de checkout em seus aplicativos da web. Ele fornece uma interface padronizada baseada em navegador para coletar informações de pagamento e envio do usuário e oferece suporte a uma ampla variedade de métodos de pagamento, incluindo cartões de crédito, cartões de débito e carteiras digitais. Para usar a API de solicitação de pagamento, uma página da web deve primeiro criar um objeto `PaymentRequest` e especificar as opções de pagamento e envio disponíveis para o usuário. A página pode então invocar a UI de solicitação de pagamento chamando o método `show()` no objeto `PaymentRequest`. O usuário pode então selecionar suas opções preferidas de pagamento e envio e confirmar o pagamento. Nesse momento, a API de solicitação de pagamento retornará um objeto de resposta de pagamento que pode ser usado para concluir a transação.

Visite os seguintes recursos para saber mais:

- [@article@API de solicitação de pagamento - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API)
- [@article@API de solicitação de pagamento](https://www.w3.org/TR/payment-request/)
