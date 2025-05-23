const buttonOne = document.getElementById("increment");
const buttonTwo = document.getElementById("decrement");
const counter = document.getElementById("counter");

let count = 0;

buttonOne.addEventListener("click",function(){
    count++;
    counter.textContent = count;
});

buttonTwo.addEventListener("click", function(){
    count--;
    counter.textContent = count;
})
