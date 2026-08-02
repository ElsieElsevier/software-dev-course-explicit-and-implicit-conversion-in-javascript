/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // Explicitly setting the string to a number type 
console.log("The result is: " + result); // Output of the operation is a number type

let isValid = false; // Boolean of any string evaluates to a truthy, so set it to false
if (isValid) {
    console.log("This is valid!"); // Now that isValid = false, it evaluates to a falsy
}

let age = Number("25"); // Convert the string age to a number data type 
let totalAge = age + 5; 
console.log("Total Age: " + totalAge); // Number + a number = number data type

// My Own Code
console.log("")
console.log("")
console.log("Before type conversion:");

// Implicit type conversion
// JavaScript implicitly converts the string the number zero to a string, so the addition operator can act on it
let distance = "50" + 0; 
console.log("Today's running distance is " + distance + " meters"); // The output is a string data type

distance = "five hundred"; 
let teamRun = Number(distance); // If I have a string but try to convert it to a number, it becomes NaN
if (teamRun) { 
  console.log("The sprinters are practicing the 4x4 event");
} 
else { // Now, the boolean will evaluate to false since it's a NaN value
  console.log("The sprinters are practicing the 100 meter dash")
}

console.log("")
console.log("")
console.log("After type conversion:");
// Explicitly converting the string to a number type
distance = Number("400") - 0; 
console.log("Today's running distance is " + distance + " meters"); // The output is a number data type

teamRun = distance > 100; // If distance is greater than 100, then it evalauates to true
if (teamRun) { 
  console.log("The sprinters are practicing the 4x4 event");
} 
else { // If distance is not greater than 100, then it evaluates to false
  console.log("The sprinters are practicing the 100 meter dash")
}
