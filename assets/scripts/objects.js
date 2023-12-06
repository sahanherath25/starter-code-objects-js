const title=document.querySelector(".title");

// title.addEventListener("input",function () {
//
// })

const person={
    firstName:"SAHAN",
    lastName:"HERATH",
    age:24,
    country:"SWITZERLAND",
    "FATHER NAME":"DR.V.S.B HERATH"
}

console.log("FIRST NAMEW",person.firstName)
console.log("FIRST NAMEW",person["firstName"])
console.log("FATHER NAMEW",person["FATHER NAME"])