import logo from './img/fox.png';
import greenBot from './img/fox_green.png';
import yellowBot from './img/fox_yellow.png';
import pinkBot from './img/fox_pink.png';
import viewBotList from '../chatbot/botslist/botslist';
import './index.scss';

const bots = [
  { image: yellowBot, name: 'Yellow Bot', class: 'yellowBot' },
  { image: greenBot, name: 'Green Bot', class: 'greenBot' },
  { image: pinkBot, name: 'Pink Bot', class: 'pinkBot' }
];

export default () => (`
  <div class="nav">
    <a class="logo-link" href="/chatbot"><img src="${logo}" alt="" id="basicBot" ></a>
    <a href="/"><h1>Chatbot-io</h1></a>
    <div class="nav-bot-icons">
      ${bots.map((bot) => `<a href="/chatbot?bot=${bot.class}"><img src='${bot.image}' alt='${bot.name}' title='${bot.name}' id='${bot.class}''></a>`).join('')}
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
