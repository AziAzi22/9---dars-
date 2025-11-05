// qo'shimcha masalalar

// 1 - masala

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word){
//     // ...
//   word = word.toLowerCase()
// let object = {}
// for(let i = 0; i < word.length; i++){
//   object[word[i]] ? object[word[i]]++ : object[word[i]] = 1
// }
//   let result = ""
//  for(let i = 0; i < word.length; i++){
//    result += object[word[i]] === 1 ? "(" : ")"
//  }
//     return result
// }
// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));

// 2 - masala

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
// Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript/Groovy: MORSE_CODE['.--']
// C#: MorseCode.Get(".--") (returns string)
// Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
// Elm: MorseCodes.get : Dict String String
// F#: MorseCode.get ".--" (returns string)
// Haskell: morseCodes ! ".--" (Codes are in a Map String String)
// Java: MorseCode.get(".--")
// Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
// NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols
// Racket: morse-code (a hash table)
// Rust: MORSE_CODE
// Scala: morseCodes(".--")
// Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

// After you complete this kata, you may try yourself at Decode the Morse code, advanced.

// decodeMorse = function(morseCode){
//   // you can use the preloaded MORSE_CODE:
//   // let letter = MORSE_CODE[morse]

//   // Your code here
//   morseCode = morseCode.trim().split("   ")
//   let result = []
//   for(let i = 0; i < morseCode.length; i++){
//     let wort = ""
//     let letters = morseCode[i].split(" ")
//     for(let j = 0; j < letters.length; j++){
//     wort += MORSE_CODE[letters[j]]
//       }
//     result.push(wort)
//     }
//   return result.join(" ")
//   }
//   console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

//////////  buni bu yerda tekahirib bo'lmyadi ustoz,  MORSE_CODE berilmagan, saytga kirib ko'rsangiz bo'ladi : https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

// 3 - masala

//   Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// function comp(array1, array2){
//   //your code here
//   let a = array1
//   let b = array2
//   if(!a || !b) return false
//   if(a.length !== b.length) return false
//   for(let i = 0; i < a.length; i++){
//   let x = false
//     for(let j = 0; j < b.length; j++){
//       if(a[i]**2 === b[j]){
//         x = true
//         b.splice(j, 1)
//         break
//       }
//     }
//     if(!x) return false
//   }
//   return true
// }
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));

// 4 - masala

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function solution(string) {
//   if(string.length <= 1) return string
//   let result = ""
//   for(let i = 0; i < string.length; i++){
//    if(/[A-Z]/.test(string[i])){
//      result += " " + string[i]
//    }else{
//      result += string[i]
//    }
//   }
//   return result
// }
// console.log(solution("camelCasing"));
// console.log(solution("identifier"));
// console.log(solution(""));

// 5 - masala

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway

// function pigIt(str) {
//   //Code here
//   let result = "";
//   let x = null;
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i - 1] === " ") {
//       if (/[a-zA-Z]/.test(str[i])) {
//         x = str[i] + "ay";
//       } else {
//         x = str[i];
//       }
//     } else if (str[i] === " ") {
//       result += x + " ";
//       x = null;
//     } else {
//       result += str[i];
//     }
//   }
//   if (x !== null) result += x;
//   return result;
// }
// console.log(pigIt("Pig latin is cool"))
// console.log(pigIt("Hello world !"));

// 6 - masala

