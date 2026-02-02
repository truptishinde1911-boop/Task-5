function getWeather() {

    let city = document.getElementById("city").value;
    let apiKey = "YOUR_API_KEY_HERE";

    if (city === "") {
        document.getElementById("weather").innerHTML =
            "Please enter a city name";
        return;
    }

    let url =
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city + "&appid=" + apiKey + "&units=metric";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod === "404") {
                document.getElementById("weather").innerHTML =
                    "City not found";
                return;
            }

            document.getElementById("weather").innerHTML =
                "<p><b>City:</b> " + data.name + "</p>" +
                "<p><b>Temperature:</b> " + data.main.temp + " °C</p>" +
                "<p><b>Weather:</b> " + data.weather[0].description + "</p>" +
                "<p><b>Humidity:</b> " + data.main.humidity + "%</p>";
        })
        .catch(error => {
            document.getElementById("weather").innerHTML =
                "Error fetching data";
        });
}
