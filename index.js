const calculateValuePerPerson = require("./calculateValuePerPerson");

const shoppingList = [
  { description: "apple", quantity: 3, unitPrice: 25 },
  { description: "milk", quantity: 2, unitPrice: 150 },
  { description: "bread", quantity: 6, unitPrice: 30 },
];

const emails = [
  "rachel@gmail.com",
  "chandler@gmail.com",
  "phoebe@gmail.com",
  "monica@gmail.com",
  "joey@gmail.com",
  "ross@gmail.com",
];

const valuesPerPerson = calculateValuePerPerson(shoppingList, emails);

console.log(valuesPerPerson);

/**
 * EXPECTED OUTPUT:
 *
 * Map {
 *   'rachel@gmail.com' => 93,
 *   'chandler@gmail.com' => 93,
 *   'phoebe@gmail.com' => 93,
 *   'monica@gmail.com' => 92,
 *   'joey@gmail.com' => 92,
 *   'ross@gmail.com' => 92
 * }
 */
