export default () => (`
  <div class="row">
    <div class="col-6">
    </div>
    <div class="col-6">
      <div class="MyText" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="Mycard-title">Card title</h5>
              <p class="Mycard-text">My Text</p>
              <p class="Mycard-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="botText" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Bot Text</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
    </div>
  </div>


  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Enter your question" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary mx-2" type="button" id="button-addon2">Button</button>
  </div>
`);
