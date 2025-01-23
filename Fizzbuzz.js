

// I LOST jobs because of this simple problem :-) 

//write a function Every single time it will add number in sequence called output and print out what you want in console.

let output = [];// we are keeping track of the numbers with this.
let count = 1;


function fizzBuzz(){
    

    //% modular check remainder  if divisible by 3 it will pring Fizz and Buzz for divisible by 5
if(count % 3 === 0 && count % 5 === 0){
  output.push("FizBuzz");
    
}
else if(count % 3 === 0){
   output.push("Fizz");

}
else if (count % 5 === 0){
 output.push("Buzz");
  
}
else{

    output.push(count); //pushing the number to the empty array
}

   count++; //increment -  everytime we run it will add a  number for us to check
    console.log(output);// just number
}


fizzBuzz() // to run this in the council I put FizzBuzz() and ran it there