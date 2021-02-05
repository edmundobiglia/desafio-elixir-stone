function mapValuePerPerson(emails, values) {
  const mapOfValuesPerPerson = emails.reduce((previousMap, email, index) => {
    const updatedMap = previousMap.set(email, values[index]);

    return updatedMap;
  }, new Map());

  return mapOfValuesPerPerson;
}

module.exports = mapValuePerPerson;
