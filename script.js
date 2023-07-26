const SubmitBtn = document.getElementById('SubmitBtn');

let UserInput = document.querySelector('#UserInput');

const StartLocation = 'Netherlands';
const ErrorMsg = 'je moeder';

SubmitBtn.addEventListener('click', DifferentLocation);

function RefreshGiphy(UserInput){
    //getting the api data --> outputting a response
    fetch('https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=' + UserInput, {mode: 'cors'})

    //then --> turning the result into a json file so the data is useable
    .then(function(response) {
        return response.json();
    })

    //then --> logging the specific Location data to the console
    .then(function(response){
        console.log(response); //logs the whole object

        //first column 
        /*
            search-bar:, date:, country:, sunny rainy thunder etc, 
        */
        console.log("Country: " + response["location"]["name"]); //country name
        console.log("temperature");

        //second column
        /*
            text:, every hour of the day:, with the temps.
        */
        console.log("Condition: " + response["forecast"]["forecastday"]["0"]["day"]["condition"]["text"]); //Condition
        console.log("Sunset: " + response["forecast"]["forecastday"]["0"]["astro"]["sunset"]); //sunrise
        console.log("Sunrise: " + response["forecast"]["forecastday"]["0"]["astro"]["sunrise"]); //sunset

        //third column
        //7 day forecast.

        //fourth column
        /*  
            Air quality
        */

        
        //fifth column
        /*  
            Precipitation
        */

        //last column
        /*
            sunset-sunrise
            humidity
            visibility
            rainfall-snowfall
            wind
            uv-index
        */
            
    })

    //then 'catch' the error message when there is no location found
    .catch(function(){
        console.log(ErrorMsg)
    });
}

//when clicking submit buttons, the page renders witht the new location(userinput)
function DifferentLocation(e){
    e.preventDefault();
    RefreshGiphy(UserInput.value);
    UserInput.value = ''; //clears the typed in user input
}

RefreshGiphy(StartLocation);