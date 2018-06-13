//Question 1
function sortByStrings(stringA, stringB) {
  var results = [];

  for (var i = 0; i < stringB.length; i++) {
    var currentB = stringB[i];

    for (var j = 0; j < stringA.length; j++) {
      var currentA = stringA[j];

      if (currentA === currentB) {
        results.push(currentA);
      }
    }
  }
  return results.join("");
}

console.log(sortByStrings("weather", "therapyw")); //theeraw
console.log(sortByStrings("good", "odg")); //oodg

//Question 2

//Question 3
