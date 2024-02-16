import logo from '../img/fox.png';
import bot from '../img/user.png';

export default () => (`
<div class="Nav">
  <img src="${logo}" class="fox" alt="...">
  <a href="/home"><h1>Chatbot-io</h1></a>
  <div class="row align-items-center">
    <div class="col-4">
      <img src="${bot}" class="rounded-circle" width="70" alt="...">
    </div>
    <div class="col-4">
      <img src="${bot}" class="rounded-circle" width="70" alt="...">
    </div>
    <div class="col-4">
      <button><i class="fa-solid fa-bars"></i></button>
    </div>
  </div>
</div>   
`);
