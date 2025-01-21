
function lifeInWeeks(age){

    let Remiaing = 90 - age;
    let days = Remiaing * 365;
    let weeks = Remiaing * 52;
         let months =Remiaing * 12;

console.log('you have ' + days + 'days ' + weeks + 'weeks and ' +  months +  ' to live' + Remiaing)
}
lifeInWeeks(12);