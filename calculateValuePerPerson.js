const validateEmails = require("./helpers/validateEmails");
const validateShoppingList = require("./helpers/validateShoppingList");
const distributeTotalAmongPeople = require("./helpers/distributeTotalAmongPeople");
const mapValuesPerPerson = require("./helpers/mapValuesPerPerson");

function calculateValuePerPerson(shoppingList, emails) {
  validateEmails(emails);

  validateShoppingList(shoppingList);

  const distributedValues = distributeTotalAmongPeople(shoppingList, emails);

  const mapOfValuesPerPerson = mapValuesPerPerson(emails, distributedValues);

  return mapOfValuesPerPerson;
}

module.exports = calculateValuePerPerson;
