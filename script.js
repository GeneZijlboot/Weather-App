const Country = document.getElementById('Country');
const Wind = document.getElementById('Wind');
const Condition = document.getElementById('Condition');
const Temp = document.getElementById('Temp');
const FeelsLike = document.getElementById('FeelsLike');
const Rainchance = document.getElementById('Rainchance');
const Dates = document.getElementById('date');

const SubmitBtn = document.getElementById('SubmitBtn');
let UserInput = document.querySelector('#UserInput');
const StartLocation = 'Netherlands';

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
    .then(function(response) {
        console.log(response);
        const a = response.location.name;
        const b = response.current.wind_kph;
        const c = response.current.condition.text;
        const d = response.current.temp_c;
        const e = response.current.feelslike_c;
        const f = response["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_rain"];
        const g = response.location.localtime;
        RenderPage(a, b, c, d, e, f, g);
    })
    .catch(function(error) {
        console.log(error);
    })
}

RefreshLocation(StartLocation);

//build page with API data
function RenderPage(country, wind, condition, temp, feelsLike, rainchance, date){
    Country.innerHTML = `<i class="material-icons" style="font-size:30px;color:snow">&#xe55f</i>` + country;
    Wind.textContent = wind + "kph";
    Condition.textContent = condition;
    Temp.textContent = temp + "°C";
    FeelsLike.textContent = feelsLike + "°C";
    Rainchance.textContent = rainchance + "%";
    Dates.textContent = date;
}