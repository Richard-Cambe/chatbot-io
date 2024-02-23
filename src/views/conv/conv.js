export default () => (`
  <div class="messageTop"></div>
  <div id="messageDisplay" class="message-display"></div>
  <div class="messageBottom"></div>
  <div class="input-group mb-3 container fixed-bottom input-fixed-bottom">
    <input type="text" class="form-control" placeholder="Enter your question" aria-label="Recipient's username" aria-describedby="button-addon2" id="messageInput">
    <button class="btn btn-outline-secondary mx-2" type="button" id="sendButton">>></button>
  </div>
`);
