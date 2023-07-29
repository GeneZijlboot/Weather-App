const Country = document.getElementById('Country');
const Humidity = document.getElementById('Humidity');
const Condition = document.getElementById('Condition');
const Temp = document.getElementById('Temp');
const FeelsLike = document.getElementById('FeelsLike');
const Rainchance = document.getElementById('Rainchance');
const CheckBox = document.getElementById('checkbox');

const SubmitBtn = document.getElementById('SubmitBtn');
let UserInput = document.querySelector('#UserInput');
const StartLocation = 'berlin';

SubmitBtn.addEventListener('click', DifferentLocation);

function DifferentLocation(e){
    e.preventDefault();
    RefreshLocation(UserInput.value);
    UserInput.value = '';
}

CheckBox.addEventListener('click', RefreshLocation)

//getting the API data and setting it to variables --> for CELCIUS
function RefreshLocation(UserInput){
    fetch('https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=' + UserInput, {mode: 'cors'})

    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        if(CheckBox.checked === true){
            console.log('test');
            const a = response.location.country;
            const b = response.current.humidity;
            const c = response.current.condition.text;
            const d = response.current.temp_f;
            const e = response.current.feelslike_f;
            const f = response["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_rain"];
            RenderPageF(a, b, c, d, e, f);
        } else if(CheckBox.checked === false){
            console.log('testbbbbbb');
            const a = response.location.country;
            const b = response.current.humidity;
            const c = response.current.condition.text;
            const d = response.current.temp_c;
            const e = response.current.feelslike_c;
            const f = response["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_rain"];
            RenderPageC(a, b, c, d, e, f);
        }
    })
}

RefreshLocation(StartLocation);

//build page with API data
function RenderPageC(country, humidity, condition, temp, feelsLike, rainchance){
    Country.textContent = country;
    Humidity.textContent ="Humidity: " + humidity + "%";
    Condition.textContent = condition;
    Temp.textContent = temp + "°C";
    FeelsLike.textContent = "Feels like: " + feelsLike + "°C";
    Rainchance.textContent = "Chances of Rain: " + rainchance + "%";
}

function RenderPageF(country, humidity, condition, temp, feelsLike, rainchance){
    Country.textContent = country;
    Humidity.textContent ="Humidity: " + humidity + "%";
    Condition.textContent = condition;
    Temp.textContent = temp + "F";
    FeelsLike.textContent = "Feels like: " + feelsLike + "F";
    Rainchance.textContent = "Chances of Rain: " + rainchance + "%";
}