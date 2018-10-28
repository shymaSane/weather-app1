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
        
   
        // console.log(this.main)
        // this.main.innerHtml = `
        //     <div class="card text-center col-md-8 col-11 bg-primary text-white">
        //         <div class="card-header">
        //             Today's weather
        //         </div>
        //         <div class="card-body">
        //             <h3 class="card-title">${data.locationWeather.name}</h3>
        //             <p class="card-text">
        //                 <h5 class="sub-title">${data.locationWeather.main.temp}</h5>
        //                 <h5 class="subtitl">${data.locationWeather.weather[0].description}</h5>
        //                 <!-- change when needed -->
        //                 <span>${data.locationWeather.weather[0].icon}</span>
        //                 <ul class="list-group list-group-flush">
        //                     <li class="list-group-item">humidity: ${data.locationWeather.main.humidity}</li>
        //                     <li class="list-group-item">minmum temp: ${data.locationWeather.main.temp_min}</li>
        //                     <li class="list-group-item"> maximum temp: ${data.locationWeather.main.temp_max}</li>
        //                     <li class="list-group-item">Wind: ${data.locationWeather.wind.speed} deg: ${data.locationWeather.wind.deg}</li> 
        //                 </ul>
        //             </p>
        //             <button class="btn btn-primary" data-toggle="modal" data-target="#change-location-modal">Change Location</button>
        //         </div>
        //         <div class="card-footer">weather.com</div>
        //     </div>
        // `
    }
}