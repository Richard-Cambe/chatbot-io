import viewNav from '../views/nav/nav';
import viewConv from '../views/conv/conv';
import viewMessage from '../views/chatbot/message/message';
import OpenWeatherAPI from '../class/weather';
import CocktailsAPI from '../class/Cocktails';
import TennisAPI from '../class/Tennis';
import BackAPI from '../class/Back';

const Chatbot = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.weatherAPI = new OpenWeatherAPI('e676494295147bd631b1a74058149074');
    this.CocktailsAPI = new CocktailsAPI();
    this.TennisAPI = new TennisAPI('c334bb4508mshb03669024827d94p149615jsnb6fd1c7a7512');
    this.BackAPI = new BackAPI();
    this.bots = [
      {
        name: 'Basic Bot',
        image: 'http://localhost:81/fox.png',
        actions: ['help', 'random'],
        color: 'orange',
        colorCode: '#ff4802',
        class: 'basicBot'
      },
      {
        name: 'Yellow Bot',
        image: 'http://localhost:81/fox_yellow.png',
        actions: ['hello', 'meteo'],
        color: 'yellow',
        colorCode: '#D2CD2E',
        class: 'yellowBot'
      },
      {
        name: 'Green Bot',
        image: 'http://localhost:81/fox_green.png',
        actions: ['hello', 'tennis'],
        color: 'green',
        colorCode: '#3FB430',
        class: 'greenBot'
      },
      {
        name: 'Pink Bot',
        image: 'http://localhost:81/fox_pink.png',
        actions: ['hello', 'drink'],
        color: 'pink',
        colorCode: '#CF11D8',
        class: 'pinkBot'
      }
    ];

    this.salutations = [
      { langue: 'Anglais', mot: 'Hello' },
      { langue: 'Français', mot: 'Bonjour' },
      { langue: 'Espagnol', mot: 'Hola' },
      { langue: 'Allemand', mot: 'Guten Tag' },
      { langue: 'Italien', mot: 'Buongiorno' },
      { langue: 'Portugais', mot: 'Bom dia' },
      { langue: 'Néerlandais', mot: 'Goedendag' },
      { langue: 'Suédois', mot: 'God dag' },
      { langue: 'Hébreu', mot: 'Shalom' },
      { langue: 'Norvégien', mot: 'Hei' },
      { langue: 'Danois', mot: 'Hej' },
      { langue: 'Estonien', mot: 'Tere' },
      { langue: 'Letton', mot: 'Sveiki' },
      { langue: 'Lituanien', mot: 'Labas' },
      { langue: 'Polonais', mot: 'Cześć' },
      { langue: 'Tchèque', mot: 'Ahoj' },
      { langue: 'Slovaque', mot: 'Ahoj' },
      { langue: 'Hongrois', mot: 'Szervusz' },
      { langue: 'Russe', mot: 'Zdravstvuyte' },
      { langue: 'Turc', mot: 'Merhaba' },
      { langue: 'Hindi', mot: 'Namaste' },
      { langue: 'Thaï', mot: 'Sawasdee' },
      { langue: 'Coréen', mot: 'Annyeonghaseyo' }
    ];

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
    const formattedDate = `${year}-${month}-${day}`;

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
      const defaultColor = '#14B0C0';
      const userName = 'user';

      messageDisplay.innerHTML += viewMessage(userName, 'none', defaultColor, userName, time, day, message);
      messageInput.value = '';
      this.autoScroll();

      const data = {
        type: '',
        name: userName,
        content: message,
        botColor: defaultColor,
        day,
        time,
        api: ''
      };

      if (messageDisplay.innerHTML.includes(message)) {
        const salutations = this.salutations.map((salut) => salut.mot.toLowerCase());

        if (salutations.includes(message.toLowerCase())) {
          data.api = 'hello';
          this.BackAPI.sendToBackend(data);
          this.botHello(message);
        } else if (message.toLowerCase().startsWith('help')) {
          data.api = 'help';
          this.BackAPI.sendToBackend(data);
          this.botHelp();
        } else if (message.toLowerCase().startsWith('meteo ')) {
          data.api = 'meteo';
          this.BackAPI.sendToBackend(data);
          const cityName = message.substring(6);
          this.botWeather(cityName);
        } else if (message.toLowerCase().startsWith('alcool')) {
          data.api = 'drink';
          this.BackAPI.sendToBackend(data);
          this.botDrinks();
        } else if (message.toLowerCase().startsWith('tennis ')) {
          data.api = 'tennis';
          this.BackAPI.sendToBackend(data);
          const genre = message.substring(7, 10);
          const ranking = message.substring(11);
          this.botTennis(genre, ranking);
        } else {
          data.api = 'random';
          this.BackAPI.sendToBackend(data);
          this.botBase();
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

      const data = {
        type: 'bot',
        name,
        content: messageContent,
        botColor: color,
        day,
        time
      };
      this.BackAPI.sendToBackend(data);
    }
  }

  botHello(salutation) {
    this.bots.forEach((bot) => {
      if (bot.actions.includes('hello')) {
        this.salutations.forEach((partie) => {
          if (partie.mot.toLowerCase().includes(salutation.toLowerCase())) {
            const messageContent = `${salutation.charAt(0).toUpperCase() + salutation.slice(1).toLowerCase()} User! Vous êtes ${partie.langue}?`;
            this.addBotMessage(bot.color, messageContent);
          }
        });
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
        const message = `
          <p> Avez vous besoin d'aide? </p>
          <details>
            <summary style="text-decoration: underline; text-underline-offset: 4px; text-decoration-color: #D2CD2E;">Yellow Bot: </summary>
            <ul>
              <li><b>Hello:</b> dite 'bonjour' dans n'importe quelle langue ce bot vous répond!</li>
              <li> fbreh </li>
            </ul>
          </details>
          <details>
            <summary style="text-decoration: underline; text-underline-offset: 4px; text-decoration-color: #3FB430;">Green Bot: </summary>
            <ul>
              <li> tutu </li>
              <li> fbreh </li>
            </ul>
          </details>
          <details>
            <summary style="text-decoration: underline; text-underline-offset: 4px; text-decoration-color: #CF11D8;">Pink Bot: </summary>
            <ul>
              <li> tutu </li>
              <li> fbreh </li>
            </ul>
          </details>
        `;
        this.addBotMessage(bot.color, message);
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

  async botDrinks() {
    this.bots.forEach(async (bot) => {
      if (bot.actions.includes('drink')) {
        const drinksData = await this.CocktailsAPI.getRandomCocktail();
        if (drinksData && drinksData.body && drinksData.body.length > 0) {
          const cocktail = drinksData.body[0];
          let message = `<b>${cocktail.name}:</b><br>`;
          cocktail.ingredients.forEach((ingredient) => {
            message += `  • ${ingredient}<br>`;
          });
          this.addBotMessage(bot.color, message);
        } else {
          this.addBotMessage(bot.color, 'Erreur dans la recherche de cocktail!');
        }
      }
    });
  }

  async botTennis(genre, ranking) {
    this.bots.forEach(async (bot) => {
      if (bot.actions.includes('tennis')) {
        const tennisData = await this.TennisAPI.getTennisPlayer(genre);
        if (tennisData && tennisData.data && Array.isArray(tennisData.data)
          && tennisData.data.length > 0) {
          const index = ranking - 1;
          if (index >= 0 && index < tennisData.data.length) {
            const playerData = tennisData.data[index];
            if (playerData && playerData.player) {
              const message = `${playerData.player.name}`;
              this.addBotMessage(bot.color, message);
            } else {
              this.addBotMessage(bot.color, 'Les données du joueur sont indisponibles.');
            }
          } else {
            this.addBotMessage(bot.color, "Le classement spécifié n'est pas valide.");
          }
        } else {
          this.addBotMessage(bot.color, 'Erreur dans la recherche du joueur!');
        }
      }
    });
  }

  messagesLoad(type, color, messageContent, time, day) {
    const messageDisplay = document.querySelector('#messageDisplay');
    const foundBot = this.bots.find((bot) => bot.color === color);
    const botImage = foundBot ? foundBot.image : null;
    const name = foundBot ? foundBot.name : 'USER';
    const colorCode = foundBot ? foundBot.colorCode : '#14B0C0';
    messageDisplay.innerHTML
      += viewMessage(type, botImage, colorCode, name, time, day, messageContent);
    this.autoScroll();
  }

  Load() {
    window.addEventListener('load', async () => {
      if (this.params.bot === undefined) {
        const botElement = document.getElementById('basicBot');
        botElement.classList.add('basicBot');
        document.documentElement.style.setProperty('--bot-color', '#ff4802');
        const backData = await this.BackAPI.getBackMessage();
        if (Array.isArray(backData)) {
          backData.forEach((data) => {
            const message = `${data.content}`;
            this.messagesLoad(data.type, data.botColor, message, data.time, data.day);
          });
        }
      } else if (this.params.bot === 'yellowBot') {
        const botElement = document.getElementById('yellowBot');
        botElement.classList.add('yellowBot');
        document.documentElement.style.setProperty('--bot-color', '#D2CD2E');
        const backData = await this.BackAPI.getBackYellowMessage();
        if (Array.isArray(backData)) {
          backData.forEach((data) => {
            const message = `${data.content}`;
            this.messagesLoad(data.type, data.botColor, message, data.time, data.day);
          });
        }
      } else if (this.params.bot === 'greenBot') {
        const botElement = document.getElementById('greenBot');
        botElement.classList.add('greenBot');
        document.documentElement.style.setProperty('--bot-color', '#3FB430');
        const backData = await this.BackAPI.getBackGreenMessage();
        if (Array.isArray(backData)) {
          backData.forEach((data) => {
            const message = `${data.content}`;
            this.messagesLoad(data.type, data.botColor, message, data.time, data.day);
          });
        }
      } else if (this.params.bot === 'pinkBot') {
        const botElement = document.getElementById('pinkBot');
        botElement.classList.add('pinkBot');
        document.documentElement.style.setProperty('--bot-color', '#CF11D8');
        const backData = await this.BackAPI.getBackPinkMessage();
        if (Array.isArray(backData)) {
          backData.forEach((data) => {
            const message = `${data.content}`;
            this.messagesLoad(data.type, data.botColor, message, data.time, data.day);
          });
        }
      }
    });
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
    this.sendMessage();
    this.Load();
    this.autoScroll();
  }
};

export default Chatbot;
