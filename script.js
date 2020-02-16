var weatherData;
var request = new XMLHttpRequest();
var date = new Date();


loadData();

function loadData() {
    
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Ogden,UT,us&units=imperial&cnt=5&appid=846d3b48355b6e95813bed8fb29f0fb3');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    
    document.getElementById("place").innerHTML = "Location: " + weatherData.city.name + ", UT";
    document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("date-two").innerHTML = (date.getMonth()+1) + "/" + (date.getDate()+1);
    document.getElementById("date-three").innerHTML = (date.getMonth()+1) + "/" + (date.getDate()+2);
    document.getElementById("date-four").innerHTML = (date.getMonth()+1) + "/" + (date.getDate()+3);
    document.getElementById("date-five").innerHTML = (date.getMonth()+1) + "/" + (date.getDate()+4);

    console.log(date)

    for (i=0; i < weatherData.list.length; i++) {
        console.log(i);

    document.getElementById("currentTemp").innerHTML = "Tempeture: " + weatherData.list[0].temp.day + "°";
    document.getElementById("conditions").innerHTML = "Weather: " + weatherData.list[0].weather[0].main;
    document.getElementById("conditionsDesc").innerHTML = "Description: " +  weatherData.list[0].weather[0].description;
    document.getElementById("realfeel").innerHTML = "Real Feel: " + weatherData.list[0].feels_like.day + "°";
    
    //document.getElementById("place-two").innerHTML = weatherData.city.name;
    //document.getElementById("date-two").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp-two").innerHTML = "Tempeture: " + weatherData.list[1].temp.day + "°";
    document.getElementById("conditions-two").innerHTML = "Weather: " + weatherData.list[1].weather[0].main;
    document.getElementById("conditionsDesc-two").innerHTML = "Description: " + weatherData.list[1].weather[0].description;
    document.getElementById("realfeel-two").innerHTML = "Real Feel: " + weatherData.list[1].feels_like.day + "°";

    //document.getElementById("place-three").innerHTML = weatherData.city.name;
    //document.getElementById("day-three").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp-three").innerHTML = "Tempeture: " + weatherData.list[2].temp.day + "°";
    document.getElementById("conditions-three").innerHTML = "Weather: " + weatherData.list[2].weather[0].main;
    document.getElementById("conditionsDesc-three").innerHTML = "Description: " + weatherData.list[2].weather[0].description;
    document.getElementById("realfeel-three").innerHTML = "Real Feel: " + weatherData.list[2].feels_like.day + "°";

    //document.getElementById("place-four").innerHTML = weatherData.city.name;
   // document.getElementById("day-four").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp-four").innerHTML = "Tempeture: " + weatherData.list[3].temp.day + "°";
    document.getElementById("conditions-four").innerHTML = "Weather: " + weatherData.list[3].weather[0].main;
    document.getElementById("conditionsDesc-four").innerHTML = "Description: " + weatherData.list[3].weather[0].description;
    document.getElementById("realfeel-four").innerHTML = "Real Feel: " + weatherData.list[3].feels_like.day + "°";

    //document.getElementById("place-five").innerHTML = weatherData.city.name;
    //document.getElementById("day-five").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp-five").innerHTML = "Tempeture: " + weatherData.list[4].temp.day + "°";
    document.getElementById("conditions-five").innerHTML = "Weather: " + weatherData.list[4].weather[0].main;
    document.getElementById("conditionsDesc-five").innerHTML = "Description: " + weatherData.list[4].weather[0].description;
    document.getElementById("realfeel-five").innerHTML = "Real Feel: " + weatherData.list[4].feels_like.day + "°";
    

    }



    document.getElementById("day-one").addEventListener("mouseover", mouseOver);
    document.getElementById("day-one").addEventListener("mouseout", mouseOut);
    document.getElementById("day-one").addEventListener("click", picOne);
    document.getElementById("day-two").addEventListener("click", picTwo);

    function mouseOver() {
        document.getElementById("day-one").style.fontWeight = "bold";
        document.getElementById("day-one").style.backgroundColor = "#d0dfeb";
        document.getElementById("day-two").style.fontWeight = "bold";
        document.getElementById("day-two").style.backgroundColor = "#d0dfeb";

    }
    function mouseOut() {
        document.getElementById("day-one").style.fontWeight = "normal";
        document.getElementById("day-one").style.backgroundColor = "#f0f5f8";
        document.getElementById("day-two").style.fontWeight = "normal";
        document.getElementById("day-two").style.backgroundColor = "#f0f5f8";
    }
    function picOne() {
        //if (weatherData.list[0].weather[0].main == snow)
        document.getElementById("day-one").style.backgroundColor = "lightgray";
    }
    function picTwo() {
        //document.getElementById("day-two").style.color = "green";
    }

}