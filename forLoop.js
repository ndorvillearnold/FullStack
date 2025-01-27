
//WHILE check for a program in a certain state appose to For loop is for iteration

let output = []

function fizzBuzz(){

    for(let count = 1; count <= 100 ;count++){ // Check if count is 100 or less, otherwise stop the loop

       if (count % 3 === 0 && count % 5 === 0){ // If count is divisible by both 3 and 5
          output.push("FizBuzz"); // Add / push "FizzBuzz" to output
        }else if(count % 3 === 0){
           output.push("Fizz");
        }else if (count % 5 === 0){
         output.push("Buzz");
        }else{
            output.push(count); //pushing the number to the empty array
        }
        
           //increment -  everytime we run it will add a  number for us to check  and notice its inside while loop
           // console.log(output);// not ideal place to place consile. place it before the function ends
    }
    
         console.log(output);// just number
}

fizzBuzz()