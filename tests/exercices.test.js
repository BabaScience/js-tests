const {
  sayHello,
  add,
  isEvenOrOdd,
  celsiusToFahrenheit,
  findLargerNumber,
  printArrayElements,
  countCharacters,
  reverseString,
  generateRandomNumber,
  isFirstLetterUppercase,
  findSmallestNumber,
  capitalizeWords,
  removeDuplicates,
  countVowels,
  factorial,
  fizzBuzz,
  isPalindrome,
  countCharacter,
  findMissingNumber,
  sumOfDigits

} = require("../src/exercices");

// 1. Test Hello World
test("sayHello should return 'Hello, World!'", () => {
  expect(sayHello()).toBe("Hello, World!");
});

// 2. Test Simple Addition
// test("add should return the sum of two numbers", () => {
//   expect(add(2, 3)).toBe(5);
//   expect(add(-1, 1)).toBe(0);
// });

// 3. Test Even or Odd
// test("isEvenOrOdd should return 'Even' for even numbers and 'Odd' for odd numbers", () => {
//   expect(isEvenOrOdd(2)).toBe("Even");
//   expect(isEvenOrOdd(3)).toBe("Odd");
// });

// 4. Test Celsius to Fahrenheit
// test("celsiusToFahrenheit should convert Celsius to Fahrenheit", () => {
//   expect(celsiusToFahrenheit(0)).toBe(32);
//   expect(celsiusToFahrenheit(100)).toBe(212);
// });

// 5. Test Larger Number
// test("findLargerNumber should return the larger of two numbers", () => {
//   expect(findLargerNumber(5, 10)).toBe(10);
//   expect(findLargerNumber(20, 10)).toBe(20);
// });

// 6. Test Print Array Elements
// test("printArrayElements should return the same array", () => {
//   const arr = [1, 2, 3];
//   expect(printArrayElements(arr)).toEqual(arr);
// });

// 7. Test Count Characters
// test("countCharacters should return the number of characters in a string", () => {
//   expect(countCharacters("hello")).toBe(5);
//   expect(countCharacters("")).toBe(0);
// });

// 8. Test Reverse a String
// test("reverseString should return the reversed string", () => {
//   expect(reverseString("hello")).toBe("olleh");
//   expect(reverseString("JavaScript")).toBe("tpircSavaJ");
// });

// 9. Test Generate Random Number
// test("generateRandomNumber should return a number between 1 and 100", () => {
//   const randomNum = generateRandomNumber();
//   expect(randomNum).toBeGreaterThanOrEqual(1);
//   expect(randomNum).toBeLessThanOrEqual(100);
// });

// 10. Test Uppercase Check
// test("isFirstLetterUppercase should check if the first letter is uppercase", () => {
//   expect(isFirstLetterUppercase("Hello")).toBe(true);
//   expect(isFirstLetterUppercase("hello")).toBe(false);
// });

// 11. Test Find the Smallest Number
test("findSmallestNumber should return the smallest number in the array", () => {
  expect(findSmallestNumber([5, 3, 8, 1])).toBe(1);
  expect(findSmallestNumber([20, 30, 40])).toBe(20);
});

// 12. Test Capitalize Each Word
test("capitalizeWords should capitalize the first letter of each word in a string", () => {
  expect(capitalizeWords("hello world")).toBe("Hello World");
  expect(capitalizeWords("javascript is fun")).toBe("Javascript Is Fun");
});

// 13. Test Remove Duplicates from Array
test("removeDuplicates should remove duplicate elements from the array", () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
});

// 14. Test Count Vowels in a String
test("countVowels should return the number of vowels in a string", () => {
  expect(countVowels("hello")).toBe(2);
  expect(countVowels("javascript")).toBe(3);
});

// 15. Test Factorial of a Number
test("factorial should return the factorial of a given number", () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(0)).toBe(1);
});

// 16. Test FizzBuzz
// FizzBuzz is a bit different. We will capture console output for testing.
test("fizzBuzz should print correct FizzBuzz sequence", () => {
  const consoleSpy = jest.spyOn(console, "log");
  fizzBuzz(5);
  expect(consoleSpy.mock.calls[0][0]).toBe(1);
  expect(consoleSpy.mock.calls[1][0]).toBe(2);
  expect(consoleSpy.mock.calls[2][0]).toBe("Fizz");
  expect(consoleSpy.mock.calls[3][0]).toBe(4);
  expect(consoleSpy.mock.calls[4][0]).toBe("Buzz");
  consoleSpy.mockRestore();
});

// 17. Test Palindrome Check
test("isPalindrome should return true for palindromes and false otherwise", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("madam")).toBe(true);
});

// 18. Test Count Occurrences of a Character
test("countCharacter should return the number of times a character appears in a string", () => {
  expect(countCharacter("hello", "l")).toBe(2);
  expect(countCharacter("javascript", "a")).toBe(2);
});

// 19. Test Find Missing Number in Array
test("findMissingNumber should return the missing number in an array of consecutive numbers", () => {
  expect(findMissingNumber([1, 2, 4, 5])).toBe(3);
  expect(findMissingNumber([10, 11, 12, 14])).toBe(13);
});

// 20. Test Sum of Digits
test("sumOfDigits should return the sum of the digits in a number", () => {
  expect(sumOfDigits(123)).toBe(6); // 1 + 2 + 3 = 6
  expect(sumOfDigits(456)).toBe(15); // 4 + 5 + 6 = 15
});
