//start appjs when dcument ready

document.addEventListener("DOMContentLoaded", function(event) {
    //fetch button 
   let button = document.getElementById('change-location')
   //init ui
   const ui = new ModalUi
   //add eventlistenr to show location modals
   button.addEventListener('click', (e) => {
       let city = document.getElementById('city')
       let country = document.getElementById('country')
       console.log(city.value , country.value)
      
       
   })
});