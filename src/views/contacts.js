export default () => (`
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

  <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-between">
      Bot 1
      <span class="badge bg-primary rounded-pill">1</span>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      Bot 2
      <span class="badge bg-primary rounded-pill">15</span>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      Bot 3
      <span class="badge bg-primary rounded-pill">7</span>
    </li>
    <li class="list-group-item d-flex justify-content-between">
      Bot 4
      <span class="badge bg-primary rounded-pill">140</span>
    </li>
  </ul>

  <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    Button with data-bs-target
  </button>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bouton pour ouvrir l'offcanvas -->
  <button type="button" class="btn btn-primary" data-bs-toggle="offcanvas.show" data-bs-target="#myOffcanvas">Open Offcanvas</button>

  <!-- Structure de l'offcanvas -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="myOffcanvas" aria-labelledby="myOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="myOffcanvasLabel">Offcanvas Title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <!-- Contenu de l'offcanvas -->
      ...
    </div>
  </div>

`);
