class Weather{
    constructor(city, country){
        this._key = '7eaa66f1b9819a5f2d4f3786cd7abb07';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        //fetch information from openweather api
        //units=metric for celsius temp
        const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${this._key}&q=${this.city},${this.country}&units=metric`)

        const locationWeather = await fetchWeather.json()
        return {
            locationWeather
        }
    }

    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}