const validateShoppingList = require("./helpers/validateShoppingList");
const validateEmails = require("./helpers/validateEmails");
const distributeTotalAmongPeople = require("./helpers/distributeTotalAmongPeople");
const mapValuesPerPerson = require("./helpers/mapValuesPerPerson");

function calculateValuePerPerson(shoppingList, emails) {
  validateShoppingList(shoppingList);

  validateEmails(emails);

  const distributedValues = distributeTotalAmongPeople(shoppingList, emails);

  const mapOfValuesPerPerson = mapValuesPerPerson(emails, distributedValues);

  return mapOfValuesPerPerson;
}

module.exports = calculateValuePerPerson;
