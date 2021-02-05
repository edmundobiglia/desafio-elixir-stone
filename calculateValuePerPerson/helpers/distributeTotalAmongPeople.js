function calculateShoppingListTotal(shoppingList) {
  const shoppingListTotal = shoppingList.reduce((subtotal, item) => {
    const { quantity, unitPrice } = item;

    const itemTotal = quantity * unitPrice;

    const updatedSubtotal = itemTotal + subtotal;

    return updatedSubtotal;
  }, 0);

  return shoppingListTotal;
}

function distributeTotalAmongPeople(shoppingList, emails) {
  const shoppingListTotal = calculateShoppingListTotal(shoppingList);

  const numberOfPeople = emails.length;

  const roundedValuePerPerson = Math.floor(shoppingListTotal / numberOfPeople);

  const remainder = shoppingListTotal % numberOfPeople;

  const distributedValues = emails.map((email, index) => {
    if (index < remainder) {
      return roundedValuePerPerson + 1;
    }
    return roundedValuePerPerson;
  });

  return distributedValues;
}

module.exports = distributeTotalAmongPeople;
