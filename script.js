const Country = document.getElementById('Country');
const Wind = document.getElementById('Wind');
const Condition = document.getElementById('Condition');
const Temp = document.getElementById('Temp');
const FeelsLike = document.getElementById('FeelsLike');
const Rainchance = document.getElementById('Rainchance');
const Dates = document.getElementById('date');
const TempClicky = document.getElementById('TempClicky');
const SubmitBtn = document.getElementById('SubmitBtn');
const Button = document.getElementById('Button');
let UserInput = document.querySelector('#UserInput');
UserInput.value = "Norway"
let Degree = '°C';

SubmitBtn.addEventListener('click', DifferentLocation);
Button.addEventListener('click', TempSwap)

//getting the API data and setting it to variables --> for CELCIUS
function RefreshLocationC(NewLocation){
    fetch('https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=' + NewLocation, {mode: 'cors'})
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

//getting the API data and setting it to variables --> for FAHRENHEIT
function RefreshLocationF(NewLocation){
    fetch('https://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=' + NewLocation, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        const a = response.location.name;
        const b = response.current.wind_kph;
        const c = response.current.condition.text;
        const d = response.current.temp_f;
        const e = response.current.feelslike_f;
        const f = response["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_rain"];
        const g = response.location.localtime;
        RenderPage(a, b, c, d, e, f, g);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function DifferentLocation(e){
    e.preventDefault();
    RefreshLocationC(UserInput.value);
    Button.checked = false;
    Degree = '°C';
    TempClicky.textContent = "C";
}

//build page with API data
function RenderPage(country, wind, condition, temp, feelsLike, rainchance, date){
    Country.innerHTML = `<i class="material-icons" style="font-size:30px;color:snow">&#xe55f</i>` + country;
    Wind.textContent = wind + "kph";
    Condition.textContent = condition;
    Temp.textContent = temp + Degree;
    FeelsLike.textContent = feelsLike + Degree;
    Rainchance.textContent = rainchance + "%";
    Dates.textContent = date;
}

function TempSwap(){
    if(Button.checked === true){
        TempClicky.textContent = "F";
        Degree = '°F';
        RefreshLocationF(UserInput.value);
    } else if(Button.checked == false){
        TempClicky.textContent = "C";
        Degree = '°C';
        RefreshLocationC(UserInput.value);
    }
}

RefreshLocationC(UserInput.value);