function isLeap(year) {

    if (year % 4 === 0 || year % 400 === 0) {

        return "leap year";
    }
    else {

        return "not leap year";
    }
}

console.log(isLeap(1990))
console.log(isLeap(2008))
console.log(isLeap(2012))


