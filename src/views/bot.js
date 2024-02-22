import bot from '../img/fox.png';

export default (tutu) => (`
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src="${bot}" class="rounded-circle" width="70" alt="...">
      <h6>Bot 4</h6>
    </div>
    <span class="badge rounded-pill">${tutu}</span>
  </li>
`);
