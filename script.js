const Country = document.getElementById('Country');
const Humidity = document.getElementById('Humidity');
const Condition = document.getElementById('Condition');
const Temp = document.getElementById('Temp');
const FeelsLike = document.getElementById('FeelsLike');
const Rainchance = document.getElementById('Rainchance');

const SubmitBtn = document.getElementById('SubmitBtn');
let UserInput = document.querySelector('#UserInput');
const StartLocation = 'berlin';

SubmitBtn.addEventListener('click', DifferentLocation);

function DifferentLocation(e){
    e.preventDefault();
    RefreshLocation(UserInput.value);
    UserInput.value = '';
}

//getting the API data and setting it to variables --> for CELCIUS
function RefreshLocation(UserInput){
    fetch('https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=' + UserInput, {mode: 'cors'})

    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        console.log(response);
        const a = response.location.country;
        const b = response.current.temp_c;
        const c = response.current.feelslike_c;
        const d = response["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_rain"];
        const e = response.current.humidity;
        const f = response.current.condition.text;
        console.log(a, b + "°C", c + "°C", d + "%", e + "%", f);
        RenderPage(a, b, c, d, e, f);
    })
}

RefreshLocation(StartLocation);

//build page with API data
function RenderPage(country, humidity, condition, temp, feelsLike, rainchance){
    Country.textContent = country;
    Humidity.textContent = humidity;
    Condition.textContent = condition;
    Temp.textContent = temp;
    FeelsLike.textContent = feelsLike;
    Rainchance.textContent = rainchance;
}