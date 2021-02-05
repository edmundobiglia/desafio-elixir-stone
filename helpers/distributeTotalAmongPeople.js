function calculateShoppingListTotal(shoppingList) {
  const shoppingListTotal = shoppingList.reduce((subtotal, item) => {
    const { quantity, unitPrice } = item;

    const itemTotal = quantity * unitPrice;

    const updatedSubtotal = itemTotal + subtotal;

    return updatedSubtotal;
  }, 0);

  return shoppingListTotal;
}

function distributeTotalAmongPeople(shoppingList, emailList) {
  const shoppingListTotal = calculateShoppingListTotal(shoppingList);

  const numberOfPeople = emailList.length;

  // Valor por pessoa arredondado para baixo
  const roundedValuePerPerson = Math.floor(shoppingListTotal / numberOfPeople);

  // Resto
  const remainder = shoppingListTotal % numberOfPeople;

  const distributedValues = emailList.map((email, index) => {
    if (index < remainder) {
      return roundedValuePerPerson + 1;
    }
    return roundedValuePerPerson;
  });

  return distributedValues;
}

module.exports = distributeTotalAmongPeople;
