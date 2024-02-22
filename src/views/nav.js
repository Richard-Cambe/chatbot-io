import logo from '../img/fox.png';
import greenBot from '../img/fox_green.png';
import viewBotList from './botslist';

export default () => (`
<div class="Nav">
  <img src="${logo}" class="fox" alt="...">
  <a href="/"><h1>Chatbot-io</h1></a>
  <div class="d-flex align-items-center">
    <img src="${logo}" class="rounded-circle" width="70" alt="...">
    <img src="${greenBot}" class="rounded-circle" width="70" alt="...">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

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
