class ModalUi{
    constructor(){
        this.title = document.getElementById('card-title');
        this.cloud = document.getElementById('cloud');
        this.temp = document.getElementById('temp');
        this.icon = document.getElementById('icon');
        this.humidity = document.getElementById('humidity');
        this.temp_min = document.getElementById('temp_min');
        this.temp_max = document.getElementById('temp_max');
        this.wind = document.getElementById('wind');
    }

    showModal (data) {
        //using textContent because innerHtml wont work
        this.title.textContent = `${data.locationWeather.name}`;
        this.cloud.textContent = `${data.locationWeather.main.temp} °C`;
        this.temp.textContent = `${data.locationWeather.weather[0].description}`;
        this.humidity.textContent = `humidity: ${data.locationWeather.main.humidity}`;
        this.temp_min.textContent = `minmum temp: ${data.locationWeather.main.temp_min}`;
        this.temp_max.textContent = `maximum temp: ${data.locationWeather.main.temp_max}`;
        this.wind.textContent = `Wind: ${data.locationWeather.wind.speed} deg: ${data.locationWeather.wind.deg}`;
    }
}