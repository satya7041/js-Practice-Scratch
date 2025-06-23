// Note- Due to working on secure https codespace, may be this weather api will not work, so write in local ide..
const button = document.getElementById("get-location-button");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");

  async function getWeather(lat,long){
        const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=fddb74a67d2842c9b77115826252006&q=${lat},${long}&aqi=yes`)
        return await promise.json()
    }

async function gotLocation(position){
    const result = await getWeather(
        position.coords.latitude,
        position.coords.longitude
    );
    console.log("get location: ",result);
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTemp.innerText = `${result.current.temp_c} °C`;
}

function failedToGet(){
    console.log("There was an issue..");
}
button.addEventListener('click', async()=> {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
    // console.log("On button: ", result)
})
