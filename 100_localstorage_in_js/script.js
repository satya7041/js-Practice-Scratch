const button = document.getElementById("click-btn");
const username = document.getElementById("username");
const show = document.getElementById("myName");
button.addEventListener('click', ()=> {
    const value = username.value;
    localStorage.setItem('name',value); //storing username in localstorage
    location.reload(); 
})

window.addEventListener('load',()=>{  //recommended approach
    const value = localStorage.getItem('name');
    show.innerText = value;
})
// show.innerText = localStorage.getItem('name'); //not good approach