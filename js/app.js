//start appjs when dcument ready

document.addEventListener("DOMContentLoaded", function(event) {
    //fetch button 
   let button = document.getElementById('change-location')
   //init weather class
   const weather = new Weather
   //init ui
   const ui = new ModalUi
   
   //add eventlistenr to show location modals
   button.addEventListener('click', (e) => {
        //input values
        e.preventDefault()
       let city = document.getElementById('city').value
       let country = document.getElementById('country').value
       if(city !== "" && country !== ""){
           //change information
           //get the information from the api
           let data = weather.getWeather(city, country)
           //display the ui
       }
       else{
           //keep current information
       }
       
   })
});