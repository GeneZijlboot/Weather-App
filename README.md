# Weather-App

/*
//switching Fahrenheit with Celcius

const Temperature = document.getElementById('Temperature');
let Celcius = true

Temperature.addEventListener('click', TempSwap);

function TempSwap(){
    if(Celcius === true){
        console.log(Celcius);
        Celcius = false;
    } else if(Celcius === false){
        console.log(Celcius)
        Celcius = true;
    }
}
*/

    /*
    .then(function(response){
        console.log(response);
        Country.textContent = date.name;
        Country.textContent = "Country: " + response["location"]["name"];
        TodaysDate.textContent = "Date: " + response["forecast"]["forecastday"]["0"]["date"];
        Condition.textContent = "Condition: " + response["forecast"]["forecastday"]["0"]["day"]["condition"]["text"]; 
    })
    .catch(function(error){
        console.log(error);
        console.log(ErrorMsg)
    });
    */

//goodshit fam!
//getting the API data and setting it to variables --> for FAHRENHEIT
function RefreshLocationFahrenHeit(UserInput){
    fetch('https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=' + UserInput, {mode: 'cors'})

    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        console.log(response);
        const a = response.location.country;
        const b = response.current.temp_f;
        const c = response.current.feelslike_f;
        console.log(a, b, c, d);
    })
}