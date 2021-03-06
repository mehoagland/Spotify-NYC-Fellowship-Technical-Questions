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

console.log(sortByStrings("weather", "therapyw")); //theeraw
console.log(sortByStrings("good", "odg")); //oodg

// Question 2
// Given an encoded string, return its corresponding decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "["
];

function decodeString(s) {
  var char = "";
  var number = 0;
  var numArr = [];
  var charArr = [];
  var sSplit = s.split("");

  for (var i = 0; i < sSplit.length; i++) {
    var current = sSplit[i];

    if (numbers.indexOf(Number(current)) !== -1) {
      numArr.push(current);
    }
    if (current === "[") {
      number = Number(numArr.pop());
    }

    if (characters.indexOf(current) !== -1) {
      charArr.push(current);
      if (current !== "]" && current !== "[") {
        char = char + charArr.pop();
      }
    }
  }

  console.log("decodeString:", char.repeat(number));
}

decodeString("4[ab]");
decodeString("2[b3[a]]");

function decodeStringTwo(s) {
  var char = "";
  var number = 0;
  var numArr = [];
  var charArr = [];
  var sSplit = s.split("");
  //console.log(sSplit);

  for (var i = 0; i < sSplit.length; i++) {
    var current = sSplit[i];

    if (numbers.indexOf(Number(current)) !== -1) {
      numArr.push(current);
    }

    if (characters.indexOf(current) !== -1) {
      charArr.push(current);

      if (current === "[") {
        number = Number(numArr.pop());
      }
      if (current !== "]") {
        char = charArr.pop();
      }
      if (current !== "[") {
        char = char.repeat(number);
        console.log("decodeStringTwo:", char);
      }
    }
  }
}

decodeStringTwo("4[ab]");
decodeStringTwo("2[b3[a]]");

// Question 3
// Your quirky boss collects rare, old coins.
// They found out you're a programmer and asked you to solve something they've been wondering for a long time.
// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(n, amount) {
  var combos = [];
  if (amount.length === 0) {
    return 0;
  }
  for (var i = 0; i < amount.length; i++) {
    var current = amount[i];
    if (amount.length === 1 && current === 0) {
      return 0;
    }

    for (var j = i; j < amount.length; j++) {
      var jCurrent = amount[j];
      if (current + jCurrent <= n || current + jCurrent === n) {
        combos.push([current, jCurrent]);
      }
    }
  }

  return combos;
}

console.log(changePossibilities(4, [1, 2, 3]));
