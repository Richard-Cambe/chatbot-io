import viewBotMessage from './botMessage';
import viewUserMessage from './userMessage';

export default () => (`
  ${viewUserMessage()}
  ${viewBotMessage()}
  ${viewUserMessage()}
  ${viewUserMessage()}

  <div class="input-group mb-3 fixed-bottom container input">
    <input type="text" class="form-control" placeholder="Enter your question" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary mx-2" type="button" id="button-addon2">SEND</button>
  </div>
`);
