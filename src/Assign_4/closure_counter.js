//Create a createCounter function that returns an object with methods:
//increment(): Increases count by 1.
//decrement(): Decreases count by 1.
//getCount() =: Returns the current count.
//Use a closure to keep the count variable private.
//My first solution
function createCounter(){
    let count =0;
    const methods = {
        increment (){
            ++count;
        },
        decrement: function(){
             --count;
        },
        getCount: function(){
            return count
        }
        
    
    } 
   return methods;
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); 

//Improved solution

function createCounter() {
    let count = 0; // Start at 0
    return {
      increment() { count++; }, // No return (or return the new count if needed) Remove Returns in increment/decrement: The methods should modify the count, not return a value
      decrement() { count--; },
      getCount() { return count; }
    };
  }
  
  //const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // ✅ 1 (correctly starts at 0 + 1)

  //Advanced: Flexible Initialization (Bonus)
  function createCounter(initialCount = 0) { // Default to 0
    let count = initialCount;
    return { increment, decrement, getCount };
  }
 // const counter = createCounter(5); // Starts at 5