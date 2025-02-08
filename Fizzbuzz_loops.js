

//count++     on line 30 ;  was put in the position because its insode the while loop? or should it come after? 
// This was also something i struggled with knowing the position to put the count for the loop

//tomorrow is definetly going over loops please
//How do i know exactly where to put that


/* 

Everything that has to do with a funciton should be in it ( )
mattress outside
 let output = [];
let count = 1;
:-)

thats to stop code to 100 before it keeps going while(count <= 100){


*/

function fizzBuzz(){

   let output = [];
   let count = 1;

    while(count <= 100){ // Check if count is 100 or less, otherwise stop the loop

       if (count % 3 === 0 && count % 5 === 0){ // If count is divisible by both 3 and 5
          output.push("FizBuzz"); // Add / push "FizzBuzz" to output
        }else if(count % 3 === 0){
           output.push("Fizz");
        }else if (count % 5 === 0){
         output.push("Buzz");
        }else{
            output.push(count); //pushing the number to the empty array
        }
        
           count++; //increment -  everytime we run it will add a  number for us to check  and notice its inside while loop
            console.log(output);// I wont get anything
    }
    
         console.log(output);// value of output  // Its not inside while loop - 
}

fizzBuzz()


/************************************************************************************************************************
 * On line resource to remember
 * count++ = You want to increment count at the end of each loop iteration, after the if/else block, but still inside the while loop. T
 * his ensures that you’re checking the next number for the next round of checks.
 * 
 * Why Here?:

The count++ should be placed after the logic that determines whether to push "Fizz", "Buzz", "FizzBuzz", or the number itself into the output array. 
This is because you first need to evaluate count to decide what to push, and then you increment count for the next iteration.


To understand where to put count++ (the increment operation), let’s break down the flow of the fizzBuzz function with some colored lines:

Current Code (with colored lines for clarity):
javascript
Copy
function fizzBuzz(){

    while(count <= 100){ // Check if count is 100 or less, otherwise stop the loop

       if (count % 3 === 0 && count % 5 === 0){ // If count is divisible by both 3 and 5
          output.push("FizzBuzz"); // Add "FizzBuzz" to output
        }else if(count % 3 === 0){ // If count is divisible by 3 only
           output.push("Fizz"); // Add "Fizz" to output
        }else if (count % 5 === 0){ // If count is divisible by 5 only
         output.push("Buzz"); // Add "Buzz" to output
        }else{ 
            output.push(count); // If count is neither divisible by 3 nor 5, add the count itself to the output
        }

           count++; // Increment count here, so the next iteration checks the next number
           console.log(output); // Log the output array after each iteration
    }

         console.log(output); // Log the final output array when the loop ends
}
Explanation of Where to Put count++:
Location of count++:

You want to increment count at the end of each loop iteration, after the if/else block, but still inside the while loop. This ensures that you’re checking the next number for the next round of checks.
Why Here?:

The count++ should be placed after the logic that determines whether to push "Fizz", "Buzz", "FizzBuzz", or the number itself into the output array. This is because you first need to evaluate count to decide what to push, and then you increment count for the next iteration.
Visual Breakdown:

The process goes like this:
Start with count.
Check if it meets any of the conditions (e.g., divisible by 3, 5, or both).
Push the appropriate value to the output array.
Increment count.
Print the output after every iteration.

count++ is always at the end of each iteration so that count advances by 1, making sure you check the next number on the next loop.

y putting count++ after the conditions, the function properly checks numbers from 1 to 100, handles the logic for "Fizz", "Buzz", and "FizzBuzz", and then moves to the next number until it reaches 101 and stops.
 */

/*
------------------------------------------------------------------------------------
BELOW IS NOT IDEAL to write fizbus because you have to keep puttin the function in console to run 

 I LOST jobs because of this simple problem :-) 

write a function Every single time it will add number in sequence called output and print out what you want in console.
*/ 


// let output = [];// we are keeping track of the numbers with this.
// let count = 1;


// function fizzBuzz(){
    

//     //% modular check remainder  if divisible by 3 it will pring Fizz and Buzz for divisible by 5
// if(count % 3 === 0 && count % 5 === 0){
//   output.push("FizBuzz");
    
// }
// else if(count % 3 === 0){
//    output.push("Fizz");

// }
// else if (count % 5 === 0){
//  output.push("Buzz");
  
// }
// else{

//     output.push(count); //pushing the number to the empty array
// }

//    count++; //increment -  everytime we run it will add a  number for us to check
//     console.log(output);// just number
// }


// fizzBuzz() // to run this in the council I put FizzBuzz() and ran it there