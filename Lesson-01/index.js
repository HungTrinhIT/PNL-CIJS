//Single thread
//Heap , call stack
//Mobile- React Native
//Electron
//Cocos

/*
 1. Data type
Primitive
    - Number
    - Boolean: true , false
    - Undefined
    - Null
    - Symbol
    - String

 Reference 
    - function
    - array
    - object

2.  const,let and var
    - scope: global > function > block
        + var: global, function scope
        + let, const: block scope

    - hoisting:
 
*/

console.log("Lesson 01");

// global scope
var products;

const gloablVariable = "Hello";

function greeting() {
  // Function scope
  const greeting = "Hello world";
  console.log(greeting);
}

{
  {
    let blockVariable = true;
    {
      console.log(blockVariable);
    }
  }
}

console.log("Top-", products);
products = [1, 3, 5, 7, 10, 15];
console.log("Bottom-", products);

// Problem 1
// 1: 1st, 109: 109th, 302: 302nd
console.log("\n\nProblem1");
function humanizeFormat(num) {
  //logic
  const digit = num % 10;
  switch (digit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}
console.log(humanizeFormat(10));
console.log(humanizeFormat(21));
console.log(humanizeFormat(12));
console.log(humanizeFormat(12313232133));
console.log(humanizeFormat(-5));

console.log("\n\nProblem 2");
function repeatString(str, count) {
  let result = "";
  for (i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

console.log(repeatString("VietNam", 3));
console.log(repeatString("ABCD", 10));
console.log(repeatString("A", 2));

console.log("\n\nProblem 3");
// result = []
// 1,2,1,1,3,4,5
function removeDuplicateElementsFromArray(nums) {
  const uniqueArray = [];
  for (let num of nums) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }

  return uniqueArray;
}
console.log("Here");
console.log(
  removeDuplicateElementsFromArray([1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 100, 100, -2])
);
console.log(removeDuplicateElementsFromArray([1]));
console.log(removeDuplicateElementsFromArray([]));
