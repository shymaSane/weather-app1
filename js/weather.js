class Weather{
    constructor(){
        this._key = '7eaa66f1b9819a5f2d4f3786cd7abb07';
    }

    async getWeather(city, country) {
        //fetch information from openweather api
        //units=metric for celsius temp
        const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${this._key}&q=${city},${country}&units=metric`)

        const weather_promise = await fetchWeather.json()
        return {
            weather_promise
        }
    }
}