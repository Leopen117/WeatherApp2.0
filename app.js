const text0 = document.getElementById("text0");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const pic0 = document.getElementById("pic0");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const pic6 = document.getElementById("pic6");
const button = document.getElementById("submit");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
let percipitation = "";
let dataJson

async function getTemperatureForLatLong(){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&daily=weather_code,temperature_2m_max`;
    const dataPromise = await fetch(url);
    dataJson = await dataPromise.json();
    picChange(pic0, text0);
}

function picChange(pic, text){
if(dataJson.daily.weather_code[0] == 60 | dataJson.daily.weather_code[0] == 61) {
    percipitation = "Heute empfehle ich mindestens eine Regenjacke!";
    pic.src = "Images/static/cloudy.jpg";
} else if(dataJson.daily.weather_code[0] == 62 | dataJson.daily.weather_code[0] == 63) {
    percipitation = "Heute empfehle ich dir eine Regenjacke UND einen Schirm!";
    pic.scr = "Images/static/rain.jpg";
} else if(dataJson.daily.weather_code[0] == 64 | dataJson.daily.weather_code[0] == 65) {
    percipitation = "Heute empfehle ich dir zu hause zu bleiben oder ein Boot zu nehmen!";
    pic.src = "Images/static/lightning.jpg";   
} else {
    console.log("ELSE")
    percipitation = "Heute bleibt es trocken!";
    pic.src = "Images/static/sun.jpg";
}
const tempValue = "Es werden maximal " + dataJson.daily.temperature_2m_max[0] + dataJson.daily_units.temperature_2m_max + "!" + "\n" + percipitation;
text.value = tempValue;
}
button.addEventListener("click", getTemperatureForLatLong);
