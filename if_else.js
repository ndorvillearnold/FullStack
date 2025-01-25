// let loveScore = Math.random() * 100
// loveScore = Math.floor(loveScore) + 1 
// console.log("Your love score is " + loveScore + "%") 

function loveScore(number) {
    if (number > 70) {
      console.log(' Your love score is ' + number + ' greater then 70');
    } else if (number > 30 && number <= 70) {
      console.log('Meets **both**  requirement since its ' + number);
    } else {
      console.log('Meets none of the  requirement');
    }
  }
  loveScore(20);
  