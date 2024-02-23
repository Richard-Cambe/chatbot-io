import tutu from '../bot/bot';

export default () => (`
  <ul class="list-group list-group-flush">
    ${tutu(1)}
    ${tutu(3)}
    ${tutu(2)}
    ${tutu(100)}
  </ul>
`);
