// function handleMouseOver(event) {

//     console.log(event)
// }


// // document.getElementById("btn2").addEventListener("click",handleclick) // mostly recommended way to listen events 
// // document.getElementById("btn2").addEventListener("click",function () {console.log("function1")})


// //remove event
// document.getElementById("start").addEventListener("click",function() {
//     document.addEventListener("mouseover",handleMouseOver)
// })

// document.getElementById("stop").addEventListener("click",function() {
//     document.removeEventListener("mouseover",handleMouseOver)
//     console.log("remove event")
// })

// //keypress keydown keyup event 
// document.addEventListener("keydown",function(e){
//     console.log(e.key)
//     if(e.key === "2"){
//         e.preventDefault();
//     }
// })

// document.getElementById("username").addEventListener("focus", function(){
//     console.log("focuse venet happend")
// })
// document.getElementById("username").addEventListener("blur", function(){
//     console.log("blur venet happend")
// })

// // capture events 
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit",function(event) {
        
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.username.value)
    })
})