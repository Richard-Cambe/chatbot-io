import axios from 'axios';

class OpenWeatherAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getWeather(cityName) {
    const url = `${this.baseUrl}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=fr`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default OpenWeatherAPI;
