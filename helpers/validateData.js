function validateDataFormat(shoppingList) {
  const isAllDataValid = shoppingList.every((item) => {
    const { description, quantity, unitPrice } = item;

    const isDescriptionValid = description && typeof description === "string";

    const isQuantityValid =
      typeof quantity === "number" && quantity > 0 && Number.isInteger(quantity);

    const isUnitPriceValid =
      typeof unitPrice === "number" && unitPrice > 0 && Number.isInteger(unitPrice);

    const areAllFieldsValid = isDescriptionValid && isQuantityValid && isUnitPriceValid;

    return areAllFieldsValid;
  });

  return isAllDataValid;
}

function validateData(shoppingList) {
  const shoppingListHasItems = shoppingList.length > 0;

  if (!shoppingListHasItems) {
    throw new Error(
      "The shopping list is empty. The shopping list must have at least one item."
    );
  }

  const isAllDataValid = validateDataFormat(shoppingList);

  if (!isAllDataValid) {
    throw new Error(
      "Invalid data. Each item must have a description, a positive quantity and a positive unit price in cents (integer)."
    );
  }
}

module.exports = validateData;
