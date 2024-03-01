class OpenWeatherAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getWeather(cityName) {
    const url = `${this.baseUrl}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=fr`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  }
}

export default OpenWeatherAPI;
