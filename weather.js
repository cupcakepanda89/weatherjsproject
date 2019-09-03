class Weather {
    // https://home.openweathermap.org/api_keys
    constructor(city, country){
        this.apiKey = '15fb4e6de0b49e59259d3898287dbf3f';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}