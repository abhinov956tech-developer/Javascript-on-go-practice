//module.exports is equal to export
//require is equal to import
function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function mul(a,b) {
    return a*b;
}

function div(a,b) {
    if(b == 0) {
        return "Error: Division by zero";
    } else {
        return a/b;
    }
}

     function divide(a,b){
     if(b == 0){
     throw new Error("Divide by zero is not allowed");
     }
     return a/b;
     }    

module.exports = {add, sub, mul, div,divide}; //Exporting the functions