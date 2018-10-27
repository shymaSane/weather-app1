class Weather{
    constructor(){
        this._key = '7eaa66f1b9819a5f2d4f3786cd7abb07';
    }

    getWeather(city, country) {
        //fetch information from openweather api
        //units=metric for celsius temp
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${this._key}&q=${city},${country}&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return {
                data
            }
        })
    }
}