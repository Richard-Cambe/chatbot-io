import viewNav from '../views/nav';
import viewMessages from '../views/messages';
import viewMessage from '../views/message';

const Message = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

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
    const messageDisplay = document.querySelector('#messageDisplay');
    const message = messageInput.value;
    if (message.trim() !== '') {
      const time = Message.getTime();
      messageDisplay.innerHTML += viewMessage('user', time, message);
      messageInput.value = '';
      this.autoScroll();
    }
  }

  render() {
    return `
      ${viewNav()}
      <div class="container">
        ${viewMessages()}
        ${this.autoScroll()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    document.getElementById('sendButton').addEventListener('click', () => this.addMessage());
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.addMessage();
      }
    });
  }
};

export default Message;
