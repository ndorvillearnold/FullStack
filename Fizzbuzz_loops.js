

//count++     on line 30 ;  was put in the position because its insode the while loop? or should it come after? 
// This was also something i struggled with knowing the position to put the count for the loop

//tomorrow is definetly going over loops please
//How do i know exactly where to put that


/* 

thats to stop code to 100 before it keeps going while(count <= 100){


*/
let output = [];
let count = 1;

function fizzBuzz(){

    while(count <= 100){

       if (count % 3 === 0 && count % 5 === 0){
          output.push("FizBuzz");
        }else if(count % 3 === 0){
           output.push("Fizz");
        }else if (count % 5 === 0){
         output.push("Buzz");
        }else{
            output.push(count); //pushing the number to the empty array
        }
        
           count++; //increment -  everytime we run it will add a  number for us to check
            console.log(output);// just number
    }
    
         console.log(output);// just number
}

fizzBuzz()



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