import axios from 'axios';

class CocktailsAPI {
  constructor() {
    this.options = {
      method: 'GET',
      url: 'https://cocktails3.p.rapidapi.com/random',
      headers: {
        'X-RapidAPI-Key': 'c334bb4508mshb03669024827d94p149615jsnb6fd1c7a7512',
        'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
      }
    };
  }

  async getRandomCocktail() {
    try {
      const response = await axios.request(this.options);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default CocktailsAPI;
