// Question 1
// Sort the letters in the string s by the order they occur in the string t.
// You can assume t will not have repetitive characters.
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings(s, t) {
  var results = [];

  for (var i = 0; i < t.length; i++) {
    var tCurrent = t[i];

    for (var j = 0; j < s.length; j++) {
      var sCurrent = s[j];

      if (sCurrent === tCurrent) {
        results.push(sCurrent);
      }
    }
  }
  return results.join("");
}

//console.log(sortByStrings("weather", "therapyw")); //theeraw
//console.log(sortByStrings("good", "odg")); //oodg

// Question 2
// Given an encoded string, return its corresponding decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s) {
  for (var i = 0; i < s.length; i++) {
    var current = s[i];
    if (current === "[" || current === "]") {
      console.log(current);
    }
    //console.log(current);
  }
}
//console.log(decodeString("4[ab]"));
decodeString("2[b3[a]]");

// Question 3
// Your quirky boss collects rare, old coins.
// They found out you're a programmer and asked you to solve something they've been wondering for a long time.
// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, amount) {}
//console.log(changePossibilities());
