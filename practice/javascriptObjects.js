// let houoseKeepher = {


//     yearsOfExperience: 6,
//     name: "Donna",
//     age: 34,
//     greetGuest: function () {
//         alert("hello");
//     
// }

//ADD in console to view behavior
/*
The H in household had to be caps to work since its a constructure

*/

function HouseKeeper(yearsOfExperience, name, age) {

    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.age = age;
    this.clean = function () {

        alert("cleaning in progress...");
    }
}
let otherHouse = new HouseKeeper(6, "tamya", 3);
otherHouse.clean()