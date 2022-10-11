

// function person(firstname,lastname){
//     this.firstname = firstname;
//     this.lastname = lastname
// }

// let jane = new person("jane","dae")
// console.log(jane)

// let gautam = new person("gautam","jakhar")
// console.log(gautam);

// person.prototype.printname = function() {  // function prototyping!
//     return this.firstname + " " + this.lastname;
//  }

//  console.log(gautam.firstname.toString()) //already to string is in prototype chain 
//  console.log(jane.printname())
 
//  let firstset = [1,2,3,4,5,6]
//  let anotherset = [8,9,43,123,4,45]

//  console.log(firstset,anotherset)



// Array.prototype.evenNumbers = function() { //add new function to existing data type object
//     return this.filter(function (items) {
//         return items % 2 === 0
//     })
// }

// console.log(firstset.evenNumbers())

// let originalfilter = Array.prototype.filter;

// //call by value or call by referance
// // object change and store at same memory location no new copy
// // let a = 2;
// // let b = 5

// // object create
// let org = {org:"Devsnest"}
// let anotherPerson = Object.create(org, {name: {value: "Foo"}})
// console.log(anotherPerson)
// org.location = "New Delhi ";
// Object.hasOwn(anotherPerson, "name")

// //object asign

// let somePerson = {name:"Gautam"}
// let carP = {car:"SomeCar"}

// console.log(Object.assign({},somePerson,carP))

// function hello(){
//     return function world(){
//         return "Hello World!"
//     }

// }

// console.log(hello())

let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve(10000);
        reject(new Error("Fuck off "))
    }, 3000);
})

promise.then((money) =>{
    if(money === 10000){
        console.log("Yay, I got my money back!");
    }
}).catch(error => {
    console.error("Erooorrr", error.message)
})