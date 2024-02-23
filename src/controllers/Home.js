import viewHome from '../views/home/home';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      ${viewHome()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
