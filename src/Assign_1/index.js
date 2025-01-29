//Funtion type practice
//Convert the following function declaration into a function expression and an arrow function:
console.log(add(2,3)); //5
function add(a,b) {
    return a+b;
}

//Function expression
newFunction(); 
function newFunction() {
    const add = function (a, b) {
        return a + b;
    };
    console.log(add(2,3));
}

//Arrow function
addFunction();
function addFunction() {
    const add = (a, b) => a + b;
    console.log(add(2, 3));
}

