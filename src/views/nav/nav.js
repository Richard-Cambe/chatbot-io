import viewBotList from '../chatbot/botslist/botslist';
import './index.scss';

const bots = [
  { image: 'http://localhost:81/fox_yellow.png', name: 'Yellow Bot', class: 'yellowBot' },
  { image: 'http://localhost:81/fox_green.png', name: 'Green Bot', class: 'greenBot' },
  { image: 'http://localhost:81/fox_pink.png', name: 'Pink Bot', class: 'pinkBot' }
];

export default () => (`
  <div class="nav">
    <a class="logo-link" href="/chatbot"><img src="http://localhost:81/fox.png" alt="" id="basicBot" class="logo-nav"></a>
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
