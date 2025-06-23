// Creating clock 
const stopButton = document.getElementById("stop-btn");
function showTime(){
    const currentTime = new Date(); 
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    console.log("date is: ", time)
    document.getElementById("time").innerText = time
}
// showTime()
 let interval = setInterval(showTime, 1000)

stopButton.addEventListener('click',()=> {
    clearInterval(interval);
})