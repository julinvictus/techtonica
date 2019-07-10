/ Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.


// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log). 
// Underneath the function, write the line of code that runs the function. 

function logGreeting() {
    console.log('Hello!');
}

// Exercise 2. Define a function called getName() that *returns* a string that is your name. 
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function. 

function getName(name) {
    return name;
}
getName('Juliana');

// Exercise 3. Call a function within a function -- Write a function called logGreeting2() 
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2(). 

function logGreeting2() {
    function myName(name) {
        return name;
    }
    console.log(`Hello! My name is ${myName('Juliana')}`);
}
logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sumAllNumbers (num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        return num1 + num2 + num3;
    } else {
        console.log ('One of the parameters is not a number');
    }
}
sumAllNumbers(2,20,4);
sumAllNumbers(2,3,4);
sumAllNumbers(-2,3,4);
sumAllNumbers("lol",3,4);


// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
function checkAge(age){
    if (age <= 14 || age >= 65 ){
        return true;
    } else {
        return false;
    }
}
checkAge(22);
checkAge(2);
checkAge(89);

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function repeatString(num, string){
    for (let i=0; i<num; i++ ){
        console.log(string);
    }
}
repeatString(2, "juliana");
repeatString(10, "juliana");

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does 
// It returns parameter p1 multiplied by 2

// 2. What prints out for the value of y
// It prints out the number 4

// 3. What prints out for the value of z
// It prints out the number 8 


// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// Yes :D


// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does 
// It subtracts the value of parameter p2 from the value of parameter p1

// 2. What prints out for the value of a
// It prints out the number 6

// 3. What prints out for the value of b
// It prints out the number 5

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// Yes :D


// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice"
groceryList.split(',');


// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = 'wake up--->brush teeth--->eat breakfast--->go to work'
mySchedule.split('--->', 2);


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
// It was ok, I used browser console to test it and MDN website 

// Email your file to the course staff, 
// or commit your file to GitHub and email us a link.