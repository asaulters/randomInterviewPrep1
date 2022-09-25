// Write a template string according to the following example:
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
//const string1 = `Their names were: ${a}, ${b}, and ${c}.`

// modify the template variable to be a template string
function format(a, b, c) {
  // the result string must give: "Their names were: a, b and c."
  const template = `Their names were: ${a}, ${b} and ${c}.`;
  return template;
}

// Scientists have discovered that in four decades, the world will EXPLODE! It will also
// take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

//Q- How many people will there be in three decades
// 3 decades => 360 months
// mult months x n => total new
// add to current var

function futurePeople(population, n) {
  let a = n * 360;
  let total = population + a;
  return total;
}

// Create a function that accepts an array and returns the last item in the array.
//Q - Show the last item in the array
// get arr length -1
// return index of last item

function getLastItem(arr) {
  const arrLen = arr.length - 1;
  return arr[arrLen];
}

// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as
// input and calculates the area of that shape.
// Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

//Q - What is the area of the shape?
//take shape input
// based upon shape input plug B and H into area formula

function areaShape(base, height, shape) {
  if (shape === "triangle") {
    return 0.5 * base * height;
  } else if (shape === "parallelogram") {
    return base * height;
  } else {
    return "Error, incorrect shape given";
  }
}

// Write a function that returns true if a year is a leap, otherwise return false.
// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month,
// creating February 29.

// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning
// of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.

// Q - Is given year a leap year?
// Check for a remainder for year / 4
// if so check if year is a beginning of a century
// if eith true, return true, else, return false

function leapYear(year) {
  if (year % 4 === 0 || year % 100 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
leapYear(2300);

// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr) {
  let a = arr.join("");
  return a;
}

// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
//Take num and decide if it is even/odd by using %2
// if odd=> return even, and if even => return odd
// misread!!

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "odd";
  } else {
    console.log("even");
  }
}

isEvenOrOdd(10);

// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.
// G - remove n elements from the front of the array
function drop(arr, val = 1) {
  return arr.slice(val);
}

drop([1, 2, 3], 0);

// Create a function that takes an array and a string as arguments and returns the index of the string.
// G - find the index of the given string in the given array

function findIndex(arr, str) {
  console.log(arr.indexOf(str));
}

findIndex(["a", "b", "c", "d", "e", "f"], "f");

// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function
// to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// G - Find the word based upon the rules given
// match based upon lowercase

function detectWord(str) {
  const lowerRules = /[a-z]/g;
  const wordArr = str.match(lowerRules);
  return wordArr.join("");
}

detectWord("UcUNFYGaFYFYGtNUH");

// Create a function that finds the index of a given item.
// find the index
// if index isnt there, return -1

function search(arr, item) {
  return arr.indexOf(item);
}

// Create a function to concatenate two integer arrays.

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialised with the attributes name and
// age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

// G - order ages based upon given person

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	compareAge(other) {
//         p1 = new Person("Samuel", 24)
//         p2 = new Person("Joel", 36)
//         p3 = new Person("Lily", 24)

// 		// Write code here!

// 	}
// }

//

function word(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  console.log(words.indexOf(s));
}

word("nine");

// Create a function that searches for the index of a given item in an array. If the item is present, it
// should return the index, otherwise, it should return -1.
// G - what is the index of the given item in an array
// use indexOf to search arr

function search(arr, item) {
  console.log(arr.indexOf(item));
}

search([2, 4, 6, 8, 10], 8);

// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers
// into strings and a function called stringToInt() that converts strings into integers.
// G - change string to int or vice versa
function intToString(num) {
  return num.toString();
}

function stringToInt(num) {
  return parseInt(num);
}

// Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
// g - How many stickers does a cube with a side length of n have
// determine the exponent of n
// multiply by 6 (6 sides to a cube)

function howManyStickers(n) {
  let sideStickers = n * n;
  console.log(sideStickers * 6);
}

howManyStickers(14);

//
// *****************************************************************************************************************************************************// *****************************************************************************************************************************************************

// *****************************************************************************************************************************************************

// *****************************************************************************************************************************************************

// *****************************************************************************************************************************************************
// *****************************************************************************************************************************************************
// *****************************************************************************************************************************************************

//

// Write a function that will return if string is a palindrome
// G - return if string is a palindrome
// split str into arr
// reverse arr
//

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(isPalindrome("racecar"));

// write a function that will return min and max number in arr
// G - return min and max number in arr

function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log(min, max);
}

minMax([1, 5, 6, 54, 12, -5]);

// write a function that will verufyif str has balanced parenthesis
// Apparently common at higher end companies?
// G - find out if parenthese is balannced
// find middle two and see if they are the same,
// if so remove and check next, if not return not balanced
//  OR
// use first and last, if same => shift and pop
function balancedPar(str1) {
  let stack = [];
}

balancedPar("{{()}}");
