const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      <p>home</p>
      <a href="/message"> clic </a>
      <button>hello</button>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
