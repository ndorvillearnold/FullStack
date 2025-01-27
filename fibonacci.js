


function fibonacci(n){
    let output = [];

    if(n === 1){

       output = [0]
    }else if(n === 2){
        output = [0,1]
  
      }else{
        output = [0,1]
        output.push(output[0] + [1]);
      }
      

    return output
}
    
    fibonacci(5)
    