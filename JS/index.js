// Start Feature Section
const featText = document.querySelectorAll(".feature .feat-text > p");

featText.forEach((text) => {
  text.addEventListener("click", () => {
    featText.forEach((text) => text.classList.remove("active"));
    text.classList.toggle("active");
  });
});
// End Feature Section
// Start Deals Section
const apartment = document.querySelector(".deals .apartment"),
  villaHouse = document.querySelector(".deals .villa-house"),
  penthouse = document.querySelector(".deals .penthouse"),
  dealContent = document.querySelector(".deals .deal-content");

apartment.addEventListener("click", () => {
  villaHouse.classList.remove("active");
  penthouse.classList.remove("active");

  apartment.classList.add("active");

  dealContent.innerHTML = `
    <div class="col-lg-3">
      <div class="vial-info rounded-3 p-4 bg-white">
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Total Flat Space</span>
          <h5 class="fw-bold">185 m2</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Floor number</span>
          <h5 class="fw-bold">26th</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Number of rooms</span>
          <h5 class="fw-bold">4</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Parking Available</span>
          <h5 class="fw-bold">Yes</h5>
        </div>
        <div class="py-4 d-flex align-items-center justify-content-between">
          <span>Payment Process</span>
          <h5 class="fw-bold">Bank</h5>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div>
        <img src="Images/deal-01.jpg" alt="" class="w-100 h-100 rounded-3" />
      </div>
    </div>
    <div class="col-lg-3 d-flex flex-column justify-content-between">
      <div class="text">
        <h6 class="mt-0 mb-4 fw-bold">Extra Info About Property</h6>
        <p class="m-0 lh-lg">This beautiful apartment offers spacious living areas, modern amenities, and a convenient location for comfortable living.</p>
        <p class="my-4 lh-lg">When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
      </div>
      <div class="px-2 mb-2 spatial-btn">
        <span><i class="fa-solid fa-calendar"></i></span>
        <a href="property-details.html" class="content">Schedule a visit</a>
      </div>
    </div>
  `;
});
villaHouse.addEventListener("click", () => {
  apartment.classList.remove("active");
  penthouse.classList.remove("active");

  villaHouse.classList.add("active");

  dealContent.innerHTML = `
    <div class="col-lg-3">
      <div class="vial-info rounded-3 p-4 bg-white">
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Total Flat Space</span>
          <h5 class="fw-bold">250 m2</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Floor number</span>
          <h5 class="fw-bold">26th</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Number of rooms</span>
          <h5 class="fw-bold">5</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Parking Available</span>
          <h5 class="fw-bold">Yes</h5>
        </div>
        <div class="py-4 d-flex align-items-center justify-content-between">
          <span>Payment Process</span>
          <h5 class="fw-bold">Bank</h5>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div>
        <img src="Images/deal-02.jpg" alt="" class="w-100 h-100 rounded-3" />
      </div>
    </div>
    <div class="col-lg-3 d-flex flex-column justify-content-between">
      <div class="text">
        <h6 class="mt-0 mb-4 fw-bold">Extra Info About Property</h6>
        <p class="m-0 lh-lg">This beautiful apartment offers spacious living areas, modern amenities, and a convenient location for comfortable living.</p>
        <p class="my-4 lh-lg">Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
      </div>
      <div class="px-2 mb-2 spatial-btn">
        <span><i class="fa-solid fa-calendar"></i></span>
        <a href="property-details.html" class="content">Schedule a visit</a>
      </div>
    </div>
  `;
});
penthouse.addEventListener("click", () => {
  villaHouse.classList.remove("active");
  apartment.classList.remove("active");

  penthouse.classList.add("active");

  dealContent.innerHTML = `
    <div class="col-lg-3">
      <div class="vial-info rounded-3 p-4 bg-white">
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Total Flat Space</span>
          <h5 class="fw-bold">320 m2</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Floor number</span>
          <h5 class="fw-bold">34th</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Number of rooms</span>
          <h5 class="fw-bold">6</h5>
        </div>
        <div class="py-4 border-bottom d-flex align-items-center justify-content-between">
          <span>Parking Available</span>
          <h5 class="fw-bold">Yes</h5>
        </div>
        <div class="py-4 d-flex align-items-center justify-content-between">
          <span>Payment Process</span>
          <h5 class="fw-bold">Bank</h5>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div>
        <img src="Images/deal-03.jpg" alt="" class="w-100 h-100 rounded-3" />
      </div>
    </div>
    <div class="col-lg-3 d-flex flex-column justify-content-between">
      <div class="text">
        <h6 class="mt-0 mb-4 fw-bold">Extra Info About Property</h6>
        <p class="m-0 lh-lg">This beautiful apartment offers spacious living areas, modern amenities, and a convenient location for comfortable living.</p>
        <p class="my-4 lh-lg">Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
      </div>
      <div class="px-2 mb-2 spatial-btn">
        <span><i class="fa-solid fa-calendar"></i></span>
        <a href="property-details.html" class="content">Schedule a visit</a>
      </div>
    </div>
  `;
});
// End Deals Section
