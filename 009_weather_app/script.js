
const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp")

//Note- Due to http instead if https, this will may not work, because i am working on github codespace, so
//  kindly run local instead of github codespace
    async function getWeather(cityName){
        const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=fddb74a67d2842c9b77115826252006&q=${cityName}&aqi=yes`)
        return await promise.json()
    }
 
    // http://api.weatherapi.com/v1/current.json?key=fddb74a67d2842c9b77115826252006&q=London&aqi=yes

button.addEventListener("click",async()=> {
    const value = input.value;
   const result = await getWeather(value);
   cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
   cityTime.innerText = result.location.localtime;
   cityTemp.innerText = result.current.temp_c;
   console.log("result is: ", result)
})