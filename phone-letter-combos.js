/*
PROBLEM:
Good morning! Here's your coding interview problem for today.

This problem was asked by Yelp.

Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/

let phoneKey = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}
let inputStr = '2347'

function getCombo(input) {
  // console.log(`running. origInput = ${input}`);
  if (input.length > 1) {
    let ansPassUp = []
    nextAns = getCombo(input.substring(1, input.length))
    let currentLetters = phoneKey[input[0]]
    // console.log(currentLetters);
    currentLetters.forEach((letter, i) => {
      nextAns.forEach((nextAnsLetter, i) => {
        ansPassUp.push(letter + nextAnsLetter)
      })
    })
    return ansPassUp
  } else {
    return phoneKey[input]
  }
}

console.log(getCombo(inputStr));
// console.log(answerArr);
