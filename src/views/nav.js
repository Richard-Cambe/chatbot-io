import logo from '../img/fox.png';
import bot from '../img/user.png';

export default () => (`
<div class="Nav">
  <img src="${logo}" class="fox" alt="...">
  <a href="/home"><h1>Chatbot-io</h1></a>
  <div class="d-flex align-items-center">
    <img src="${bot}" class="rounded-circle" width="70" alt="...">
    <img src="${bot}" class="rounded-circle" width="70" alt="...">
    <button><i class="fa-solid fa-bars"></i></button>
  </div>
</div>   
`);
