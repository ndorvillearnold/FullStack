


// function fizzBuzz(){

//     let output = [];
//     for(let i = 1; i <= 100; i++){


//     }



//     }





// }







function fizzBuzz() {

    let output = [];
    let count = 1;

    while (count <= 100) { // Check if count is 100 or less, otherwise stop the loop

        if (count % 3 === 0 && count % 5 === 0) { // If count is divisible by both 3 and 5
            output.push("FizBuzz"); // Add / push "FizzBuzz" to output
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count); //pushing the number to the empty array
        }

        count++; //increment -  everytime we run it will add a  number for us to check  and notice its inside while loop
        console.log(output);// I wont get anything
    }

    console.log(output);// value of output  // Its not inside while loop - 
}

fizzBuzz()