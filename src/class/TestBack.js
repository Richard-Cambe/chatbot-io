import axios from 'axios';

class TestAPI {
  constructor() {
    this.baseUrl = 'http://localhost/messages';
    this.options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  async getBackMessage() {
    try {
      const response = await axios.request(this.baseUrl);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default TestAPI;
