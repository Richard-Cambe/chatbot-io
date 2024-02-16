import user from '../img/user.png';
import logo from '../img/fox.png';

export default () => (`
  <div class="row">
    <div class="col-6">
    </div>
    <div class="col-6">
      <div class="MyText" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <p class="Mycard-text">Bonjour, je m'appelle Pablo, j'utilise Chatbot pour la première fois ! </p>
              <p class="Mycard-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="${user}" class="img-fluid rounded-start" alt="...">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="botText d-flex" style="max-width: 540px;">
      <div class="col-md-4">
            <img src="${logo}" class="img-fluid rounded-start" alt="...">
          </div>
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <p class="botcard-text">Salut Pablo ! J'espère que ça va te plaire ! </p><br><br>
              <p class="botcard-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
    </div>
  </div>

  <div class="row">
  <div class="col-6">
  </div>
  <div class="col-6">
    <div class="MyText" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <p class="Mycard-text">Pour l'instant ça va, merci !</p><br><br>
            <p class="Mycard-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="col-md-4">
          <img src="${user}" class="img-fluid rounded-start" alt="...">
        </div>
      </div>
    </div>
  </div>
</div>


  <div class="input-group mb-3 fixed-bottom container">
    <input type="text" class="form-control" placeholder="Enter your question" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary mx-2" type="button" id="button-addon2">SEND</button>
  </div>
`);
