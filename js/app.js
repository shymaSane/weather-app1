//start app.js when dcument ready
const weather = new Weather('Amman', 'Jordan')
const ui = new ModalUi
document.addEventListener("DOMContentLoaded", function() { 
   //init weather class with deafult location

//    document.getElementById('card-title').textContent = "amman"
//    console.log(document.getElementById('card-title').innerHtml)
   //init ui
   function getWeather() {
       weather.getWeather().then(data => {
           ui.showModal(data)
       })
   }
   
   getWeather()
   
});