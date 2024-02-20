import logo from '../img/fox.png';

export default () => (`
  <div class="row ">
    <div class="col-8 mt-3 mb-3">
      <div class="botText d-flex" style="max-width: 540px;">
        <div class="col-md-4">
          <img src="${logo}" class="img-fluid rounded-start" alt="...">
          <p class="botcard-text"><small class="text-body-secondary">${Date.now()}</small></p>
        </div>
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <p class="botcard-text">Salut Pablo ! J'espère que ça va te plaire ! </p><br><br>
              <p class="botcard-text"><small class="text-body-secondary">${Date.now()}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
    </div>
  </div>
`);
