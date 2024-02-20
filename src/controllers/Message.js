import viewNav from '../views/nav';
import viewMessage from '../views/message';

const Message = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      ${viewNav()}
      <div class="container">
        ${viewMessage()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Message;
