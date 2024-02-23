import './index.scss';

export default () => (`
  <div class="messageTop"></div>

  <div id="messageDisplay" class="message-display"></div>

  <div class="messageBottom"></div>
  
  <div class="input-text">
    <input type="text" class="form-control" id="messageInput" placeholder="Enter your question">
    <button id="sendButton">SEND</button>
  </div>
`);
