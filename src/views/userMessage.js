import user from '../img/user.png';

export default () => (`
  <div class="row mt-3 mb-3">
    <div class="col-4">
    </div>
    <div class="col-8 d-flex justify-content-end">
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
`);
