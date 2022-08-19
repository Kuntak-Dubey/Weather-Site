let weather = {
    "apikey" : "af2a9eb132efb2055c7a78422a544cb9", //api key
    fetchweather: function (city) {                     //fetchweather function name
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city 
        + "&units=metric&appid=" 
        + this.apikey
        )
        .then((Response) => Response.json())
        .then((data) => this.displayweather(data));
        
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description }= data.weather[0];
        const { temp, humidity } = data.main;
        const{ speed } = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + name ;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png" ;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".tempreture").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity in " + humidity +"%";
        document.querySelector(".wind").innerHTML = "Wind Speed :" + speed + "KMpH";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x1200/?'"+ description +")"
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        weather.search();
}
});

weather.fetchweather("Indore");