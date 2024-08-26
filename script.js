// Appel a API avec ville en paramètre de fonction 
let apiCall = function (city) {

    const apiKey = "b55dfa54110a93914b958f68f3716bd7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const codeIcon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${codeIcon}@2x.png`;

            document.querySelector('#city').innerHTML = data.name + ' , ' + data.sys.country;
            document.querySelector('#temp-max').innerHTML = `${Math.round(data.main.temp_max)} °C`;
            document.querySelector('#temp-min').innerHTML = `${Math.round(data.main.temp_min)} °C`;
            document.querySelector('#icon').src = iconUrl;
            document.querySelector('#description').innerHTML = data.weather[0].description;
            document.querySelector('#temp').innerHTML = `<img src="celsius.png" alt="icone degré celsius">${Math.round(data.main.temp)}°C`;
            document.querySelector('#humidity').innerHTML = `<img src="humidite.png" alt="icone humidité">${data.main.humidity}%`;
            document.querySelector('#wind').innerHTML = ` <img src="vent.png" alt="icone vent">${Math.round(data.wind.speed)}km/h`;
        })
        .catch(err => console.log('Erreur : ' + err));


}

// Ecouteur d'evenement pour soumission input 
document.querySelector('#input button').addEventListener('click', function () {
    let city = document.querySelector('#inputCity').value;

    apiCall(city);
});

// Appel par défaut au chargement de la page 
apiCall('Beauvais');