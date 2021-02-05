## Função `calculateValuePerPerson`

A função `calculateValuePerPerson` chama alguns helpers.

### Testes

Os testes unitários foram feitos com Jest. Para executar os testes, `yarn test`

## Formato do input

O primeiro argumento da função é um **array de objetos** com as propriedades **description**, **quantity** e **unitPrice**:

```JS
const items = [
  { description: "apple", quantity: 3, unitPrice: 20 },
  { description: "milk", quantity: 2, unitPrice: 150 },
  { description: "bread", quantity: 6, unitPrice: 30 },
];
```

O segundo argumento é um **array de strings** (cada string é um email):

```JS
const emails = [
  "rachel@centralperk.com",
  "chandler@centralperk.com",
  "phoebe@centralperk.com",
];
```

## Passos da função `calculateValuePerPerson`

### 1. Validação de dados

O primeiro passo da função `calculateValuePerPerson` é validar os dados.

```JS
function calculateValuePerPerson(shoppingList, emailList) {
  validateEmails(emailList);

  validateData(shoppingList);

  // ...
```

Para isso, a função chama os helpers:

- `validateEmails`: garante que a lista de emails não está vazia, que não há emails duplicados e que os emails estão no formato correto.
- `validateShoppingList`: garante que a lista de compras não está vazia e que cada item tem uma descrição, uma quantidade positiva inteira e um valor unitário positivo inteiro.

Se uma das condições não for atendida, um erro é emitido com a expressão `throw`.

### 2. Calcular e distribuir o valor por pessoa (sem deixar resto)

### 3. Gerar o mapa de valores por pessoa e retorná-lo
