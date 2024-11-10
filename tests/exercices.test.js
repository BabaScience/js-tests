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
  isFirstLetterUppercase
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
