let numberOfDrumbuttons = document.querySelectorAll(".drum").length
// let drumBtn = document.querySelectorAll(".drum")
// console.log(numberOfDrumbuttons)  length of array 7
// console.log(drumBtn)


//stopping at 7 since its the length
for (let i = 0; i < numberOfDrumbuttons; i++) {

    // console.log(i)
    let querySelectorArray = document.querySelectorAll(".drum")//array
    // console.log(querySelectorArray[i])

    //taking all the buttons and adding event listening

    //add event listener takes two arguments so ecample as higher order functions
    querySelectorArray[i].addEventListener("click", function () {


        let buttoninnerHTML = this.innerHTML;
        console.log(buttoninnerHTML);


        switch (buttoninnerHTML) {

            case "w":

                //is was googled on how to play a sound.

                let tom1 = new Audio("sounds/tom-1.mp3")

                tom1.play();

                break;

            case "a":

                let tom2 = new Audio("sounds/tom-2.mp3")

                tom2.play();

            case "s":

                let tom3 = new Audio("sounds/tom-3.mp3")

                tom3.play();

            case "d":

                let tom4 = new Audio("sounds/tom-4.mp3")

                tom4.play();



            case "j":

                let snare = new Audio("sounds/snare.mp3")

                snare.play();



            case "k":

                let crash = new Audio("sounds/crash.mp3")

                crash.play();

            case "l":

                let kick = new Audio("sounds/kick-bass.mp3")

                kick.play();





            default: console.log("this.innerHTML")

                break;

        }





    })

};



