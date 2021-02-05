const calculateValuePerPerson = require("./");

// TEST IF FUNCTION OUTPUT IS CORRECT WHEN INPUT IS CORRECT

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

// TESTS RELATED TO VALIDATION OF EMAILS

test("Throws error if no emails are provided", () => {
  const shoppingList = [
    { description: "apple", quantity: 3, unitPrice: 25 },
    { description: "milk", quantity: 2, unitPrice: 150 },
    { description: "bread", quantity: 6, unitPrice: 30 },
  ];

  const emails = [];

  function testForNoEmails() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForNoEmails).toThrowError(
    new Error("No emails provided. Please provide at least one email.")
  );
});

test("Throws error if one or more emails are not formatted correctly", () => {
  const shoppingList = [
    { description: "apple", quantity: 3, unitPrice: 25 },
    { description: "milk", quantity: 2, unitPrice: 150 },
    { description: "bread", quantity: 6, unitPrice: 30 },
  ];

  const emails = ["rachel", "chandler@gmail.com", "phoebe@gmail.com"];

  function testForInvalidEmails() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForInvalidEmails).toThrowError(
    new Error("Please make sure all emails are valid.")
  );
});

test("Throws error if there are duplicate emails", () => {
  const shoppingList = [
    { description: "apple", quantity: 3, unitPrice: 25 },
    { description: "milk", quantity: 2, unitPrice: 150 },
    { description: "bread", quantity: 6, unitPrice: 30 },
  ];

  const emails = ["chandler@gmail.com", "chandler@gmail.com", "phoebe@gmail.com"];

  function testForDuplicateEmails() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForDuplicateEmails).toThrowError(
    new Error("Please make sure there are no duplicate emails.")
  );
});

// TESTS RELATED TO VALIDATION OF SHOPPING LIST DATA

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

  function testForEmptyShoppingList() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForEmptyShoppingList).toThrowError(
    new Error(
      "The shopping list is empty. The shopping list must have at least one item."
    )
  );
});

test("Throws error if one or more items description is not provided", () => {
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

  function testForEmptyDescription() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForEmptyDescription).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
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

  function testForDescriptionNotString() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForDescriptionNotString).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
    )
  );
});

test("Throws error if item quantity is negative", () => {
  const shoppingList = [
    { description: "appple", quantity: -3, unitPrice: 25 },
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

  function testForNegativeQuantity() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForNegativeQuantity).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
    )
  );
});

test("Throws error if item quantity is not a number", () => {
  const shoppingList = [
    { description: "apple", quantity: "3", unitPrice: 25 },
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

  function testForQuantityNotNumber() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForQuantityNotNumber).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
    )
  );
});

test("Throws error if item quantity is not an integer", () => {
  const shoppingList = [
    { description: "apple", quantity: 3.5, unitPrice: 25 },
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

  function testForQuantityNotInteger() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForQuantityNotInteger).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
    )
  );
});

test("Throws error if item unit price is negative", () => {
  const shoppingList = [
    { description: "apple", quantity: 3, unitPrice: -25 },
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

  function testForNegativePrice() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForNegativePrice).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
    )
  );
});

test("Throws error if item unit price is not a number", () => {
  const shoppingList = [
    { description: "apple", quantity: 3, unitPrice: "25" },
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

  function testForPriceNotNumber() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForPriceNotNumber).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
    )
  );
});

test("Throws error if item unit price is not an integer", () => {
  const shoppingList = [
    { description: "apple", quantity: 3, unitPrice: 25.5 },
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

  function testForPriceNotInteger() {
    calculateValuePerPerson(shoppingList, emails);
  }

  expect(testForPriceNotInteger).toThrowError(
    new Error(
      "Invalid data. Each item must have a description, a positive integer quantity and a positive integer unit price in cents."
    )
  );
});
