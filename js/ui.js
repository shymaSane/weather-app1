class ModalUi{
    constructor(){
        this.main = document.getElementsByClassName('main-ui');
        // let sub_title = document.getElementsByClassName('sub-title');
    }

    showModal (data) {
        console.log(data)
        console.log(this.main)
        this.main.innerText = `
            <div class="card text-center col-md-8 col-11 bg-primary text-white">
                <div class="card-header">
                    Today's weather
                </div>
                <div class="card-body">
                    <h3 class="card-title">${data.weather_promise.name}</h3>
                    <p class="card-text">
                        <h5 class="sub-title">${data.weather_promise.main.temp}</h5>
                        <h5 class="subtitl">${data.weather_promise.weather[0].description}</h5>
                        <!-- change when needed -->
                        <span>${data.weather_promise.weather[0].icon}</span>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">humidity: ${data.weather_promise.main.humidity}</li>
                            <li class="list-group-item">minmum temp: ${data.weather_promise.main.temp_min}</li>
                            <li class="list-group-item"> maximum temp: ${data.weather_promise.main.temp_max}</li>
                            <li class="list-group-item">Wind: ${data.weather_promise.wind.speed} deg: ${data.weather_promise.wind.deg}</li> 
                        </ul>
                    </p>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#change-location-modal">Change Location</button>
                </div>
                <div class="card-footer">weather.com</div>
            </div>
        `
    }
}