// Test if function produces expected output when correct input is provided

const calculateValuePerPerson = require("./calculateValuePerPerson");

test("Properly distributes values among people and returns a map of values per person", () => {
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

  const expectedResult = new Map();
  expectedResult.set("rachel@gmail.com", 93);
  expectedResult.set("chandler@gmail.com", 93);
  expectedResult.set("phoebe@gmail.com", 93);
  expectedResult.set("monica@gmail.com", 92);
  expectedResult.set("joey@gmail.com", 92);
  expectedResult.set("ross@gmail.com", 92);

  expect(valuesPerPerson).toEqual(expectedResult);
});

// TESTS RELATED TO VALIDATION OF SHOPPING LIST DATA

// Test if error is thrown if shopping list is empty

test("Throws error if the shopping list is empty", () => {
  const shoppingList = [];

  const emails = [
    "rachel@gmail.com",
    "chandler@gmail.com",
    "phoebe@gmail.com",
    "monica@gmail.com",
    "joey@gmail.com",
    "ross@gmail.com",
  ];

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "The shopping list is empty. The shopping list must have at least one item."
    )
  );
});

// Test if error is thrown if item description is not provided or is not a string

test("Throws error if one or more item description is not provided (empty)", () => {
  const shoppingList = [
    { description: "", quantity: 3, unitPrice: 25 },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});

test("Throws error if item description is not a string", () => {
  const shoppingList = [
    { description: 4, quantity: 3, unitPrice: 25 },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});

// Test if error is thrown if item quantity is not a number or is not a positive integer

test("Throws error if item quantity is negative", () => {
  const shoppingList = [
    { description: "", quantity: -3, unitPrice: 25 },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});

test("Throws error if item quantity is not a number", () => {
  const shoppingList = [
    { description: "", quantity: "3", unitPrice: 25 },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});

test("Throws error if item quantity is not a positive integer", () => {
  const shoppingList = [
    { description: "", quantity: 3.5, unitPrice: 25 },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});

// Test if error is thrown if item unit price is not a number or is not a positive integer

test("Throws error if item unit price is negative", () => {
  const shoppingList = [
    { description: "", quantity: 3, unitPrice: -25 },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});

test("Throws error if item unit price is not a number", () => {
  const shoppingList = [
    { description: "", quantity: 3, unitPrice: "25" },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});

test("Throws error if item unitPrice is not a positive integer", () => {
  const shoppingList = [
    { description: "", quantity: 3, unitPrice: 25.5 },
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

  function testEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testEmptyShoppingList).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    )
  );
});
