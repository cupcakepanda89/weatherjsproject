// Init Storage ob
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather obj
const weather = new Weather(weatherLocation.city,weatherLocation.country);
// Init UI obj
const ui = new UI();


// Get weather when DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',()=>{
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // Change location
    weather.changeLocation(city,country);

    // Set location in localstorage
    storage.setLocationData(city,country);

    // Get and display weather again
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        // console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
