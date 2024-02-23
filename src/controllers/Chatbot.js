import viewNav from '../views/nav/nav';
import viewConv from '../views/conv/conv';
import viewMessage from '../views/chatbot/message/message';

const Chatbot = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.bots = ['Pablo', 'Richard'];
    this.actions = {};

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
      messageDisplay.innerHTML += viewMessage('user', time, message);
      messageInput.value = '';
      this.autoScroll();

      if (messageDisplay.innerHTML.includes(message)) {
        this.addBotMessage('message envoyé');
      } else {
        this.addBotMessage('message non envoyé');
      }
    }
  }

  addBotMessage(messageContent) {
    const messageDisplay = document.querySelector('#messageDisplay');
    if (messageContent.trim() !== '') {
      const time = Chatbot.getTime();
      messageDisplay.innerHTML += viewMessage('bot', time, messageContent);
      this.autoScroll();
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
