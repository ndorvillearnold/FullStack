

// I LOSTR jobs because of this simple problem :-) 
let output = [];
let count = 1;


function fizzBuzz(){
    
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

    output.push(count);
}

   count++;
    console.log(output);// just number
}
