import logo from './img/fox.png';
import greenBot from './img/fox_green.png';
import yellowBot from './img/fox_yellow.png';
import pinkBot from './img/fox_pink.png';
import viewBotList from '../chatbot/botslist/botslist';
import './index.scss';

const bots = [
  { image: yellowBot, name: 'Yellow Bot' },
  { image: greenBot, name: 'Green Bot' },
  { image: pinkBot, name: 'Pink Bot' }
];

export default () => (`
  <div class="nav">
    <img src="${logo}" alt="">
    <a href="/"><h1>Chatbot-io</h1></a>
    <div class="nav-bot-icons">
      ${bots.map((bot) => `<img src='${bot.image}' alt='${bot.name}' title='${bot.name}'>`).join('')}
      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title bots-list-title" id="offcanvasRightLabel">Bots List</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          ${viewBotList()}
        </div>
      </div>
    </div>
  </div>
`);
