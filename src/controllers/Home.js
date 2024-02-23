import homefox from '../img/fox.png';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      <div class="home_title" style="background-image: url("${homefox}")">
        <h1 class="home_h1">Chatbot-io</h1></div>
        <img src='${homefox}'/>
          <a href="/message"><button class="hello" type ="button">hello</button></a>    
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
