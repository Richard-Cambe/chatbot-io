import axios from 'axios';

class TennisAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://tennis-api-atp-wta-itf.p.rapidapi.com/tennis/v2';
  }

  async getTennisPlayer(genre) {
    const options = {
      method: 'GET',
      url: `${this.baseUrl}/${genre}/ranking/singles/`,
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'tennis-api-atp-wta-itf.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default TennisAPI;
