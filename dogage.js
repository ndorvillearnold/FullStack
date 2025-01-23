
function lifeInWeeks(age){

    let remaining = 90 - age;
    let days = remaining * 365;
    let weeks = remaining * 52;
    let months =remaining * 12;
    return remaining

console.log('you have ' + days + ' days ' + weeks + ' weeks and ' +  months +  ' to live ' + remaining)
// LOGGED you have 28470 days 4056 weeks and 936 to live 78

}
lifeInWeeks(12);