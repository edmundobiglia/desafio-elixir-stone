function mapValuePerPerson(emailList, values) {
  const mapOfValuesPerPerson = emailList.reduce((previousMap, email, index) => {
    const updatedMap = previousMap.set(email, values[index]);

    return updatedMap;
  }, new Map());

  return mapOfValuesPerPerson;
}

module.exports = mapValuePerPerson;
