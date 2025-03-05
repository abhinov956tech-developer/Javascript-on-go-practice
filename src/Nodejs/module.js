
const index = require('./index') //this is equal to import  a from '/b'
console.log(index.divide(10,5));

try {
    console.log("trying to divide by zero");
    let result=index.divide(10,2);
    console.log(result);
    
} catch (error) {
    console.log("caught an error", error.message);
    
}