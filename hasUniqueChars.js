// // Write your Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true

// hasUniqueChars("Moonday")
// // returns false

// Uppercase and lowercase letters should be considered separately:
// hasUniqueChars("Bob")
// // returns truecode below

const givenWord = (word) => {
  for (let i = 0; i < word.length; i++) {
    for (let x = i + 1; x < word.length; x++) {
      if (word[i] === word[x]) {
        return false;
      }
    }
  }
  return true;
};

console.log(givenWord("lucyu"));
