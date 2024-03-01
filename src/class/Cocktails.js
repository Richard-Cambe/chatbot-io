class CocktailsAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://cocktails3.p.rapidapi.com/search/byingredient';
  }

  async getDrinks(alcool) {
    const url = `${this.baseUrl}/${alcool}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return 'ohh';
    }
  }
}

export default CocktailsAPI;
