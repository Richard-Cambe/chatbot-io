import bot from '../img/fox.png';
import greenBot from '../img/fox_green.png';
import brownBot from '../img/fox_brown.png';
import yellowBot from '../img/fox_yellow.png';

export default () => (`
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img src="${bot}" class="rounded-circle" width="70" alt="...">
        <h6>Bot 4</h6>
      </div>
      <span class="badge rounded-pill">140</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img src="${greenBot}" class="rounded-circle" width="70" alt="...">
        <h6>Bot 1</h6>
      </div>
      <span class="badge rounded-pill">1</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img src="${brownBot}" class="rounded-circle" width="70" alt="...">
        <h6>Bot 2</h6>
      </div>
      <span class="badge rounded-pill">15</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img src="${yellowBot}" class="rounded-circle" width="70" alt="...">
        <h6>Bot 3</h6>
      </div>
      <span class="badge rounded-pill">7</span>
    </li>
  </ul>
`);
