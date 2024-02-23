import view404 from '../views/404/404';

const Quatre04 = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${view404()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Quatre04;
