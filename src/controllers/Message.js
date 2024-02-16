import viewNav from '../views/nav';
import viewMessage from '../views/message';
import viewContacts from '../views/contacts';

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
        <div class="row">
          <div class="col-3">
            ${viewContacts()}
          </div>
          <div class="col-9">
            ${viewMessage()}
          </div>
        </div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Message;
