import yellowBot from '../img/fox_yellow.png';
import greenBot from '../img/fox_green.png';
import pinkBot from '../img/fox_pink.png';
import basicBot from '../img/fox.png';
import viewNav from '../views/nav/nav';
import viewConv from '../views/conv/conv';
import viewMessage from '../views/chatbot/message/message';

const Chatbot = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
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
        actions: ['hello'],
        color: 'yellow',
        colorCode: '#D2CD2E'
      },
      {
        name: 'Green Bot',
        image: greenBot,
        actions: ['hello'],
        color: 'green'
      },
      {
        name: 'Pink Bot',
        image: pinkBot,
        actions: ['hello'],
        color: 'pink'
      }
    ];

    this.run();
  }

  autoScroll() {
    window.scrollTo(0, document.body.scrollHeight);
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
      const messageDisplay = document.querySelector('#messageDisplay');
      const color = 'none';
      messageDisplay.innerHTML += viewMessage('user', color, time, message);
      messageInput.value = '';
      this.autoScroll();

      if (messageDisplay.innerHTML.includes(message)) {
        switch (message.toLowerCase()) {
          case 'hello':
            this.botHello();
            break;
          case 'help':
            this.botHelp();
            break;
          default:
            this.botBase();
        }
      }
    }
  }

  addBotMessage(color, messageContent) {
    const messageDisplay = document.querySelector('#messageDisplay');
    if (messageContent.trim() !== '') {
      const time = Chatbot.getTime();
      const foundBot = this.bots.find((bot) => bot.color === color);
      const botImage = foundBot ? foundBot.image : null;
      messageDisplay.innerHTML += viewMessage('bot', botImage, time, messageContent);
      this.autoScroll();
    }
  }

  botHello() {
    this.bots.forEach((bot) => {
      if (bot.actions.includes('hello')) {
        this.addBotMessage(bot.color, 'Hello User');
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
