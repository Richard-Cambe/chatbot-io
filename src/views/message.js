import logo from '../img/fox.png';
import user from '../img/user.png';

export default (test, time, message) => (
  test === 'bot' ? (
    `<div class="row ">
      <div class="col-8 mt-3 mb-3">
        <div class="botText d-flex" style="max-width: 540px;">
          <div class="col-md-4">
            <img src="${logo}" class="img-fluid rounded-start" alt="...">
            <p class="botcard-text"><small class="text-body-secondary">${time}</small></p>
          </div>
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <p class="botcard-text">${message}</p><br><br>
                <p class="botcard-text"><small class="text-body-secondary">${time}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
      </div>
    </div>`
  ) : (`
  <div class="row mt-3 mb-3">
    <div class="col-4">
    </div>
    <div class="col-8 d-flex justify-content-end">
      <div class="MyText" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <p class="Mycard-text">${message}</p><br><br>
              <p class="Mycard-text"><small class="text-body-secondary">${time}</small></p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="${user}" class="img-fluid rounded-start" alt="...">
          </div>
        </div>
      </div>
    </div>
  </div>
`)
);
