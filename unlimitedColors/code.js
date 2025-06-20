const randomColor = function(){
    const hex= "0123456789ABCDEF" //hex color value start from 0 and end to F
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color +=hex [Math.floor( Math.random()* 16)]
        
    }
    return color

}
console.log(randomColor());
// console.log(Math.floor( Math.random()* 16)); //use Math.floor to avoid decimal
//  value, i declare inside for loop, this for inly understand
let intervalId

const startChangingColor = function (){

if (!intervalId) {
    intervalId = setInterval(changeBgColor,1000)
}
  function changeBgColor(){
    
    document.body.style.backgroundColor = randomColor()
}

}
const stopChangingColor = function (){
    clearInterval(intervalId)
    intervalId = null
}
document.querySelector("#start").addEventListener
('click', startChangingColor)

document.querySelector("#stop").addEventListener
('click', stopChangingColor)