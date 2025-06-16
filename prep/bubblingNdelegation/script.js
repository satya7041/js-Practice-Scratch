function runFunction(){
console.log("hello")
//has this method
// function name(){
//     console.log(arguments);
//     console.log(typeof arguments);
// }
// name("satyam",24,"hello",true)
 const name = (...hello) =>{
    console.log(hello);
    console.log(typeof hello);
}
name("shivam",24,"hello",true)
}
document.querySelector("ul").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});
