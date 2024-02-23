import logo from './img/fox.png';
import greenBot from './img/fox_green.png';
import viewBotList from '../chatbot/botslist/botslist';
import './index.scss';

export default () => (`
  <div class="nav">
    <img src="${logo}" alt="">
    <a href="/"><h1>Chatbot-io</h1></a>
    <div class="nav-bot-icons">
      <img src="${logo}" alt="">
      <img src="${greenBot}" alt="">
      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Bots List</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          ${viewBotList()}
        </div>
      </div>
    </div>
  </div>
`);
