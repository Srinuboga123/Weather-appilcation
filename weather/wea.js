let weather={
    api:"2c433dfd80b72f6bd6a65c5046970d68",
    weatherdata : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=2c433dfd80b72f6bd6a65c5046970d68")
        .then((response)=>response.json())
        .then((data)=>this.displayweather(data));
    },
    displayweather: function(data){
        const {name }=data;
        const {description } =data.weather[0];
        const{speed} = data.wind;
        const {temp, humidity,pressure}=data.main;
        document.querySelector(".city").innerText="weather in "+name;
        document.querySelector(".temp").innerText = "Temperature ="+temp+"°C";
        document.querySelector(".desc").innerText=description;
        document.querySelector(".humidity").innerText="Humidity="+humidity+"%";
        document.querySelector(".speed").innerText="Wind speed="+speed+"Kmph";
    },
    search:function(){
        this.weatherdata(document.querySelector(".input").value);
    }

}

    weather.weatherdata('london');

document.querySelector(".search").addEventListener("click",function(){
    weather.search();
});