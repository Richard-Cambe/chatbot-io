import homefox from './img/fox.png';
import './index.scss';

export default () => (`
  <div class="home_title">
    <h1 class="home_h1">Chatbot-io</h1>
    <img class="logo" src='${homefox}'/>
    <a href="/chatbot"><button class="hellobutton" type ="button">Start chatting</button></a>
  </div>
`);
