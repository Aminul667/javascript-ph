function isVowel(letter) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U"
  ) {
    return "VOWEL";
  }
  return "CONSONANT";
}
console.log(isVowel("a"));
