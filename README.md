# Teste Elixir - Stone

Esta é a entrega do teste para o Programa de Formação em Elixir da Stone. O teste foi feito em **JavaScript** com **Node**.

Seguindo as especificações do teste, criei a função `calculateValuePerPerson`, que recebe como argumentos uma lista de compras e uma lista de emails, e divide o preço total da lista de compras entre as pessoas da lista de emails.

## Estrutura de arquivos

- Diretório **/calculateValuePerPerson** na raiz: contém todo o código da função `calculateValuePerPerson`, consistindo nos seguintes arquivos:
- Subdiretório **/calculateValuePerPerson/helpers**: contém várias funções auxiliares responsáveis por: validar os dados, distribuir o valor total entre o número de pessoas e gerar o mapa de valores por pessoa.
- Arquivo **/calculateValuePerPerson/index.js**: é a função principal que chama todos os helpers.
- Arquivo **/calculateValuePerPerson/index.test.js**: arquivo de testes unitários do Jest.
- Arquivo **index.js** na raiz: esse arquivo importa a função `calculateValuePerPerson` e pode ser usado para testar diferentes inputs e ver o resultado no console.

## Função `calculateValuePerPerson`

### Argumentos da função

A função recebe dois argumentos: `shoppingList` e `emails`.

```JS
const sharedBill = calculateValuePerPerson(shoppingList, emails);
```

O argumento `shoppingList`é um **array de objetos**. Cada objeto representa um item da lista de compras e tem as propriedades `description`, `quantity` e `unitPrice`. Exemplo:

```JS
const items = [
  { description: "apple", quantity: 3, unitPrice: 20 },
  { description: "milk", quantity: 2, unitPrice: 150 },
  { description: "bread", quantity: 6, unitPrice: 30 },
];
```

`description` deve ser uma string não vazia, `quantity` deve ser um número inteiro positivo e `unitPrice` também deve ser um inteiro positivo. O array de objetos não pode estar vazio. Se qualquer uma dessas condições não for satisfeita, a função emitirá um erro.

O argumento `emails` é um **array de strings** e cada string representa um email. Exemplo:

```JS
const emails = [
  "rachel@gmail.com",
  "chandler@gmail.com",
  "phoebe@gmail.com",
  "monica@gmail.com",
  "joey@gmail.com",
  "ross@gmail.com",
];
```

Os emails devem ter o formato correto e não podem ser repetidos. O array não pode estar vazio. Se qualquer uma dessas condições não for satisfeita, a função emitirá um erro.

## Saída da função

Se os argumentos corretos forem passados à função, ela retornará um **mapa** em que as _chaves_ são os emails e os _valores_ são as partes do total que correspondem a cada pessoa.

```JS
Map {
  'rachel@gmail.com' => 93,
  'chandler@gmail.com' => 93,
  'phoebe@gmail.com' => 93,
  'monica@gmail.com' => 92,
  'joey@gmail.com' => 92,
  'ross@gmail.com' => 92
}
```

**Observação:** Se sobrar um resto após a divisão do total entre as pessoas, esse resto será distribuído entre o máximo possível de pessoas. Por esse motivo, algumas pessoas inevitavelmente terão partes com um centavo a mais.

## Testes

A biblioteca **Jest** foi usada para testes, então é necessário instalar essa dependência. Para isso basta executar `npm install` ou `yarn` no console na raiz do projeto. Para rodar os testes, basta executar `npm test` ou `yarn test`.

O arquivo de testes **/calculateValuePerPerson/index.test.js** contém 13 testes no total. O primeiro teste verifica se a saída correta (mapa de pessoas e respectivos valores) é gerada quando uma entrada correta é passada à função.

Os 12 outros testes são relacionados à validação de dados, cobrindo todos os casos possíveis de dados inválidos (lista vazia de compras/emails, quantidades e preços unitários não são inteiros positivos etc.).

## Considerações finais

- Procurei usar nomes de variáveis autodescritivos para não ter que sobrecarregar o código com comentários explicativos.

- Muito obrigado pelo tempo dedicado à revisão deste teste! 🙂
