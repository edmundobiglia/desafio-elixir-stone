## Teste Elixir - Stone

Esta é a entrega do teste para o Programa de Formação em Elixir da Stone. O teste foi feito em **JavaScript** com Node.

Seguindo as especificações do teste, criei a função `calculateValuesPerPerson`, que recebe como argumentos uma lista de compras e uma lista de emails, e divide o preço total da lista de compras entre as pessoas na lista de emails.

## Estrutura de arquivos

- O diretório _helpers_ contém várias funções auxiliares responsáveis por validar os dados, distribuir o valor total entre o número de pessoas e gerar o mapa de valores por pessoa.
- O arquivo _calculateValuePerPerson.js_ na raiz é a função principal que chama todos os helpers.
- O arquivo _index.js_ na raiz pode ser usado para testar diferentes inputs e ver o resultado no console.

## Função `calculateValuePerPerson`

### Argumentos da função

O primeiro argumento da função é um **array de objetos**. Cada objeto representa um item da lista de compras e tem as propriedades `description`, `quantity` e `unitPrice`:

```JS
const items = [
  { description: "apple", quantity: 3, unitPrice: 20 },
  { description: "milk", quantity: 2, unitPrice: 150 },
  { description: "bread", quantity: 6, unitPrice: 30 },
];
```

`description` deve ser uma string e não pode estar vazia, `quantity` deve ser um número inteiro positivo e `unitPrice` também deve ser um inteiro positivo. O array de objetos não pode estar vazio. Se qualquer uma dessas condições não for satisfeita, a função emitirá um erro.

O segundo argumento da função é um **array de strings**. Cada string representa um email.

```JS
const emails = [
  "rachel@centralperk.com",
  "chandler@centralperk.com",
  "phoebe@centralperk.com",
];
```

Os emails devem ter o formato de email correto e não deve haver emails repetidos. O array não pode estar vazio. Se qualquer uma dessas condições não for satisfeita, a função emitirá um erro.

## Saída da função

## Testes
