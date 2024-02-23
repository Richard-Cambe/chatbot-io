import lostfox from './img/fox.png';
import './index.scss';

export default () => (`
  <div class="lost_title">
    <h1 class="lost_h1">ERROR 404 : PAGE NOT FOUND</h1>
    <img class="logo" src='${lostfox}'/>
    <a class = "lostlink" href="/"><button class="lostbutton" type ="button">Go to Charbot-io</button></a>
  </div>
`);
