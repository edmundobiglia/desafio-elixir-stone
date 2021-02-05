const validateEmails = require("./helpers/validateEmails");
const validateData = require("./helpers/validateData");
const distributeTotalAmongPeople = require("./helpers/distributeTotalAmongPeople");
const mapValuesPerPerson = require("./helpers/mapValuesPerPerson");

function calculateValuePerPerson(shoppingList, emailList) {
  validateEmails(emailList);

  validateData(shoppingList);

  const distributedValues = distributeTotalAmongPeople(shoppingList, emailList);

  const mapOfValuesPerPerson = mapValuesPerPerson(emailList, distributedValues);

  return mapOfValuesPerPerson;
}

module.exports = calculateValuePerPerson;
