// closure function use in html

const myName = document.getElementById("my-name");
const button = document.getElementById("my-btn");

function makeTextSizer(size){
  function changeSize(){
    myName.style.fontSize = `${size}px`;
  }
  return changeSize;
}

const size14 = makeTextSizer(14);
const size24 = makeTextSizer(24);
const size30 = makeTextSizer(30);
const size50 = makeTextSizer(50);

button.addEventListener('click', size50);


//lets create counter using closure

function counter(){
  let count =1;
function increment(){
  console.log(count++);
}
return increment;
}

let counter1 = counter();
counter1();
counter1();
counter1();