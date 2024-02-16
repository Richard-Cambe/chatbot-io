const Message = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      <p>message</p>
      <a> clic </a>
      <button>hello</button>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Message;
