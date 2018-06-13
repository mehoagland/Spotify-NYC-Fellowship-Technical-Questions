function sortByStrings(stringA, stringB) {
  let newArray = [];
  for (let i = 0; i < stringB.length; i++) {
    let currentB = stringB[i];
    if (stringA.includes(currentB)) {
      newArray.push(currentB);
    }
  }
  return newArray;
}

console.log(sortByStrings("weather", "therapyw")); //theeraw
console.log(sortByStrings("good", "odg")); //oodg
