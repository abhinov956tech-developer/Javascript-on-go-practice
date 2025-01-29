//Create a function calculate that accepts three parameters:
//Two numbers.
//A callback function (e.g., (a, b) => a + b).
//Return the result of the callback applied to the numbers.
//Test with callbacks for addition, subtraction, and multiplication.

function calculate(a, b, calcFunction) {       
    return calcFunction(a, b);
}
function calcFunction() {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;

    console.log(calculate(2, 3, add)); // 5
    console.log(calculate(5, 2, subtract)); // 3
    console.log(calculate(3, 4, multiply)); // 12
}
calcFunction();
//1. Key Problems in above Code
//a. Callback Definitions Are Trapped Inside calcFunction
//You defined add, subtract, and multiply inside the calcFunction function. This means:
//These callbacks can’t be reused elsewhere in your code (poor modularity).
//calculate(2, 3, add) works only because add is in the same scope as the calculate call inside calcFunction, but this structure is messy.
//b. calcFunction Naming Conflict
//You named both the callback parameter in calculate and the outer test function as calcFunction, which is confusing and error-prone.
//c. Unnecessary Wrapping
//Wrapping everything in calcFunction() adds no value and complicates testing.

//Improved Solution
//Step 1: Define callbacks outside any function for reusability.
//Step 2: Test calculate directly (no need for a wrapper function).
//Step 3: Use descriptive names for clarity.
// ✅ CORRECTED CODE
function calculate(a, b, operation) {
    return operation(a, b);
  }
  
  // Define operations OUTSIDE (reusable)
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  
  // Test directly (no wrapper function)
  console.log(calculate(2, 3, add)); // 5
  console.log(calculate(5, 2, subtract)); // 3
  console.log(calculate(3, 4, multiply)); // 12
  
  // Example: Test with user input or variables
const x = 10, y = 4;
console.log(calculate(x, y, subtract)); // 6