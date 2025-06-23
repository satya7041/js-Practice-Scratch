// creating stopWatch
const button = document.getElementById("start-timer-btn");
let interval = null;
function startTimer(){
     if (interval) {
    clearInterval(interval);
  }
 const minutes = parseInt(document.getElementById('mint-input').value || 0);
    const seconds = parseInt(document.getElementById('sec-input').value || 0);
   let timeInSecond = minutes * 60 + seconds;
    

   interval = setInterval(()=>{
    if (timeInSecond<=0) {
        clearInterval(interval);
         interval = null;
        document.getElementById("message").innerText = "Times up..!"
        return;
    }
    const displayMin = String(Math.floor(timeInSecond / 60)).padStart(2, '0');
    const displaySec = String(timeInSecond % 60).padStart(2, '0');
    
    document.getElementById("message").innerText = `${displayMin}:${displaySec}`;
    timeInSecond --;
   },1000)
}

button.addEventListener('click',()=>{
    startTimer();
})
