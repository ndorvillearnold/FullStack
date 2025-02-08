
function getName(name) {



    // let name = prompt("what is your name?")

    let firstChar = name.slice(0, 1).toUpperCase()

    //algorithm work in details steps

    console.log(firstChar)

    let rest = name.slice(1, name.length)
    console.log(firstChar + rest)
    rest.toLowerCase()

    let firstName = firstChar + rest

    return firstName


}

// getName('Harry');
console.log(getName('my name is naomy'))