//init local storage
const storage = new StorageLoc;
const initLocation = storage.getLocationStorage();

//init weather class
const weather = new Weather(initLocation.city, initLocation.country);

//init ModalUi class
const ui = new ModalUi();

//fetch weather data and manipulate the dom
function changeWeather() {
    weather.getWeather().then(data => {
        ui.showModal(data)
    })
}

changeWeather()

//start app.js when document ready
document.addEventListener("DOMContentLoaded", function() { 
    //add event to the change button in the modal
    let changeButton  = document.getElementById('change-location')
    changeButton.addEventListener('click', (e) =>{
        //without preventDefault the dom wont be manipulated
        e.preventDefault()
        //get input values
        let city = document.getElementById('city').value;
        let country = document.getElementById('country').value;

        //change the location in weather class the new location inputs
        weather.changeLocation(city,country);
        
        //change weather information
        changeWeather()
        
    })

    
   
 
   
});