'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  //creates an empty array
  let sumArray = [];
  //declare variable and assign it the sum of a and b
  let added = a + b;
  //declare variable and give it value of concatenated/template literal string
  let sumstring = `The sum of ${a} and ${b} is ${added}.`;
  //adding values of both variables to the array
  sumArray.push(added, sumstring);
  return sumArray;
}

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  //declare variable as an empty array
  let multiplyArray = [];
  //set variable equal to product of a and b
  let times = a * b;
  //set variable to concatenated string
  let multiplyString = `The product of ${a} and ${b} is ${times}.`;
  //push both variables into the array
  multiplyArray.push(times, multiplyString);
  return multiplyArray;
}

// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  //assign empty array
  let samArray = [];
  //adds a + (b+c), but only using the index 0 value of the multiply function, which would be the sum and not sum and string 
  let samsum = sum(a,sum(b,c)[0])[0];
  //multiplies a * (b*c) same principle as above
  let sammultiply = multiply(a,multiply(b,c)[0])[0];
  //set concatenated string to give sum value
  let samstringone =  `${a} and ${b} and ${c} sum to ${samsum}.`;
  //set concatenated string to give product value
  let samstringtwo = `The product of ${a} and ${b} and ${c} is ${sammultiply}.`;
  //pushes all 4 variables into the array from before
  samArray.push(samsum, sammultiply, samstringone, samstringtwo);
  return samArray;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  //empty array
  let fourArray = [];
  //sumofnum = num1 + (num2 + num3), showing first index value of the sum function, sum and not sum and string value
  let sumofnum = sum(sumArr[0], sum(sumArr[1], sumArr[2])[0])[0];
  //concatenated string value
  let sumofnumstring = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sumofnum} is their sum.`
  //pushes values into the array
  fourArray.push(sumofnum, sumofnumstring,);
  return fourArray;
}

// Here is the test for sumArray(); uncomment it to run it

// testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  //declares empty array
  let fiveArray = [];
  //product = num1 * (num2 * num3), but only the product value, not product and string, which would normally follow with the multiply function created previously
  let productofnum = multiply(multArr[0], multiply(multArr[1], multArr[2])[0])[0];
  //concatenated string value
  let productofnumstring = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${productofnum}.`
  //pushes values into array
  fiveArray.push(productofnum, productofnumstring,);
  return fiveArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
  //sets variable to multiply numbers against equal to 1
  let allTogether = 1;
  //loop that iterates through all values in a specific array
  for(let i = 0; i < dynamicArray.length; i++){
    //allTogether = the value of allTogether * whatever array value we're on, multiplying allTogether with it's previous values as we iterate through the loop
    allTogether = multiply(allTogether,dynamicArray[i])[0];
  }
  //declares empty array variable
  let sixArray = [];
  //creates numbers in the array without array brackets and with a comma between each so it's neat for the string value
  let dyArrNoBrack = dynamicArray.join(',');
  //concatenated string value
  let mAAstring =  `The numbers ${dyArrNoBrack} have a product of ${allTogether}.`;
  //pushes values to the array
  sixArray.push(allTogether,mAAstring);
  return sixArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
