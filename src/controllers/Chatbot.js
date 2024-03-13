import yellowBot from '../img/fox_yellow.png';
import greenBot from '../img/fox_green.png';
import pinkBot from '../img/fox_pink.png';
import basicBot from '../img/fox.png';
import viewNav from '../views/nav/nav';
import viewConv from '../views/conv/conv';
import viewMessage from '../views/chatbot/message/message';
import OpenWeatherAPI from '../class/weather';
import CocktailsAPI from '../class/Cocktails';

const Chatbot = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.weatherAPI = new OpenWeatherAPI('e676494295147bd631b1a74058149074');
    this.CocktailsAPI = new CocktailsAPI('c334bb4508mshb03669024827d94p149615jsnb6fd1c7a7512');
    this.bots = [
      {
        name: 'Basic Bot',
        image: basicBot,
        actions: ['help', 'random'],
        color: 'orange',
        colorCode: '#ff4802'
      },
      {
        name: 'Yellow Bot',
        image: yellowBot,
        actions: ['hello', 'meteo'],
        color: 'yellow',
        colorCode: '#D2CD2E'
      },
      {
        name: 'Green Bot',
        image: greenBot,
        actions: ['hello', 'memes'],
        color: 'green',
        colorCode: '#3FB430'
      },
      {
        name: 'Pink Bot',
        image: pinkBot,
        actions: ['hello'],
        color: 'pink',
        colorCode: '#CF11D8'
      }
    ];

    this.salutationsParLangue = {
      Français: 'Bonjour',
      Anglais: 'Hello',
      Espagnol: 'Hola',
      Allemand: 'Guten Tag',
      Italien: 'Buongiorno',
      Mandarin: '你好',
      Arabe: 'مرحبا',
      Japonais: 'こんにちは',
      Portugais: 'Bom dia',
      Néerlandais: 'Goedendag',
      Suédois: 'God dag',
      Norvégien: 'Hei',
      Danois: 'Hej',
      Estonien: 'Tere',
      Letton: 'Sveiki',
      Lituanien: 'Labas',
      Polonais: 'Cześć',
      Tchèque: 'Ahoj',
      Slovaque: 'Ahoj',
      Hongrois: 'Szervusz',
      Russe: 'Zdravstvuyte',
      Turc: 'Merhaba',
      Grec: 'γειά σου',
      Hébreu: 'Shalom',
      Hindi: 'Namaste',
      Thaï: 'Sawasdee',
      Coréen: 'Annyeonghaseyo'
    };

    this.run();
  }

  autoScroll() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  static getTodayDate() {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }

  static getTime() {
    const date = new Date();
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    const time = `${h}:${m}:${s}`;

    return time;
  }

  addMessage() {
    const messageInput = document.querySelector('#messageInput');
    const message = messageInput.value.trim();
    if (message !== '') {
      const time = Chatbot.getTime();
      const day = Chatbot.getTodayDate();
      const messageDisplay = document.querySelector('#messageDisplay');
      const color = 'none';
      const name = 'user';
      const colorCode = '#14B0C0';
      messageDisplay.innerHTML += viewMessage('user', color, colorCode, name, time, day, message);
      messageInput.value = '';
      this.autoScroll();

      if (messageDisplay.innerHTML.includes(message)) {
        const salutations = Object.values(this.salutationsParLangue)
          .map((salut) => salut.toLowerCase());
        switch (true) {
          case salutations.includes(message.toLowerCase()):
            this.botHello(message);
            break;
          case message.toLowerCase().startsWith('help'):
            this.botHelp();
            break;
          case message.toLowerCase().startsWith('meteo '): {
            const cityName = message.substring(6);
            this.botWeather(cityName);
            break;
          }
          case message.toLowerCase().startsWith('alcool '): {
            const alcoolName = message.substring(7);
            this.botDrinks(alcoolName);
            break;
          }
          default:
            this.botBase();
            break;
        }
      }
    }
  }

  addBotMessage(color, messageContent) {
    const messageDisplay = document.querySelector('#messageDisplay');
    if (messageContent.trim() !== '') {
      const time = Chatbot.getTime();
      const day = Chatbot.getTodayDate();
      const foundBot = this.bots.find((bot) => bot.color === color);
      const botImage = foundBot ? foundBot.image : null;
      const name = foundBot ? foundBot.name : null;
      const colorCode = foundBot ? foundBot.colorCode : null;
      messageDisplay.innerHTML += viewMessage('bot', botImage, colorCode, name, time, day, messageContent);
      this.autoScroll();
    }
  }

  botHello(salutation) {
    this.bots.forEach((bot) => {
      if (bot.actions.includes('hello')) {
        const messageContent = `${salutation.charAt(0).toUpperCase() + salutation.slice(1).toLowerCase()} User!`;
        this.addBotMessage(bot.color, messageContent);
      }
    });
  }

  botBase() {
    this.bots.forEach((bot) => {
      if (bot.actions.includes('random')) {
        this.addBotMessage(bot.color, '<b>Commande non trouvé:</b></br></br>Veuillez retapez votre commande ou tapez <b>"HELP"</b>');
      }
    });
  }

  botHelp() {
    this.bots.forEach((bot) => {
      if (bot.actions.includes('help')) {
        this.addBotMessage(bot.color, 'Avez vous besoin d aide? ');
      }
    });
  }

  async botWeather(cityName) {
    this.bots.forEach(async (bot) => {
      if (bot.actions.includes('meteo')) {
        const weatherData = await this.weatherAPI.getWeather(cityName);
        if (weatherData && weatherData.main && weatherData.weather
          && weatherData.weather.length > 0) {
          const message = `Météo à ${cityName}: ${weatherData.main.temp}°C, ${weatherData.weather[0].description}`;
          this.addBotMessage(bot.color, message);
        } else {
          this.addBotMessage(bot.color, "La ville que vous avez écrit n'est pas valide.");
        }
      }
    });
  }

  async botDrinks(alcool) {
    try {
      const data = await this.CocktailsAPI.getDrinks(alcool);
      if (data) {
        const message = `Alcool à ${data.body[0].name}:`;
        this.addBotMessage('pink', message);
      } else {
        this.addBotMessage('pink', 'Données météorologiques non disponibles.');
      }
    } catch (error) {
      this.addBotMessage('pink', 'Erreur lors de la récupération des données météo.');
    }
  }

  sendMessage() {
    document.getElementById('sendButton').addEventListener('click', () => this.addMessage());
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.addMessage();
      }
    });
  }

  render() {
    return `
      ${viewNav()}
      <div class="container">
        ${viewConv()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.autoScroll();
    this.sendMessage();
  }
};

export default Chatbot;
