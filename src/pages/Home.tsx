const Home = () => {
  return (
    <div className="wrapper">
      {/* <!-- Header --> */}

      {/* <!-- Mobile Headr --> */}
      <div className="mobile-header d-lg-none">
        {/* <!-- Search --> */}
        <div className="h-col h-search-toggle">
          <a
            className="h-search-icon h-icon"
            data-bs-toggle="offcanvas"
            href="#header_search_bar"
            role="button"
            aria-controls="header_search_bar"
          >
            <i className="bi bi-search"></i>
            <span>SEARCH</span>
          </a>
        </div>
        {/* <!-- Notification --> */}
        <div className="h-col h-notification">
          <a
            className="h-notification-icon h-icon"
            data-bs-toggle="offcanvas"
            href="#header_notification_bar"
            role="button"
            aria-controls="header_notification_bar"
          >
            <i className="bi bi-bell"></i>
            <span>Activity</span>
          </a>
        </div>
        {/* <!-- User --> */}
        <div className="h-col h-user">
          <a
            className="h-user-icon h-icon"
            data-bs-toggle="offcanvas"
            href="#header_user_bar"
            role="button"
            aria-controls="header_user_barLabel"
          >
            <i className="bi-person-circle"></i>
            <span>ACCOUNT</span>
          </a>
        </div>
      </div>
      {/* <!-- User --> */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="header_user_bar"
        aria-labelledby="header_user_barLabel"
      >
        <div className="offcanvas-header border-bottom border-gray-300">
          <div className="offcanvas-title" id="header_user_barLabel">
            <div className="d-flex align-items-center">
              <div className="avatar">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/img/avatar-2.jpg"
                  title=""
                  alt=""
                />
              </div>
              <div className="col ps-3">
                <h6 className="mb-0">Jupiter</h6>
                <span className="fs-xs fw-400">@jupiter_0202</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i className="bi-subtract"></i>
                <span className="text-truncate ps-3">653211545655652112</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <span className="fw-400 mb-3 d-block">Balance</span>
                <div className="d-flex">
                  <div className="icon-sm">
                    <i className="cf cf-etc h4 fw-400 m-0"></i>
                  </div>
                  <div className="col ps-3">
                    <h4 className="m-0">3,89 ETH</h4>
                  </div>
                </div>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i className="bi-person"></i>
                <span className="ps-3">My Account</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i className="bi-gear"></i>
                <span className="ps-3">Setting</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i className="bi-bookmark"></i>
                <span className="ps-3">Saved</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i className="bi-clock-history"></i>
                <span className="ps-3">Your Activity</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i className="bi-bag-check"></i>
                <span className="ps-3">Report a Problem</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i className="bi-lock"></i>
                <span className="ps-3">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- End User -->
<!-- Search --> */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="header_search_bar"
        aria-labelledby="header_search_barLabel"
      >
        <div className="offcanvas-header border-bottom border-gray-300">
          <h5 className="offcanvas-title" id="header_search_barLabel">
            Search
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form className="h-search-form d-flex w-100 border border-gray-300 p-1 rounded-3">
            <input
              type="text"
              placeholder="Search Here"
              value=""
              className="border-0 rounded-0 shadow-none form-control form-control-sm flex-full"
            />
            <button className="btn icon-md btn-border-mode p-0 search-btn rounded-3">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <div className="pt-4">
            <h6 className="mb-3 text-uppercase fs-sm fw-500">Latest Search</h6>
            <ul className="list-unstyled d-flex flex-wrap">
              <li className="me-2 mb-2">
                <a className="btn btn-sm btn-border-mode rounded-3" href="#">
                  Latest NFT's{" "}
                  <span className="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li className="me-2 mb-2">
                <a className="btn btn-sm btn-border-mode rounded-3" href="#">
                  Top NFT's <span className="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li className="me-2 mb-2">
                <a className="btn btn-sm btn-border-mode rounded-3" href="#">
                  Low <span className="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li className="me-2 mb-2">
                <a className="btn btn-sm btn-border-mode rounded-3" href="#">
                  Offers <span className="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li className="me-2 mb-2">
                <a className="btn btn-sm btn-border-mode rounded-3" href="#">
                  Top Sale <span className="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li className="me-2 mb-2">
                <a className="btn btn-sm btn-border-mode rounded-3" href="#">
                  Authors<span className="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li className="me-2 mb-2">
                <a className="btn btn-sm btn-border-mode rounded-3" href="#">
                  Best Seller
                  <span className="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <h6 className="mb-3 text-uppercase fs-sm fw-500">Top Nft's</h6>
            <div className="swiper-hover-arrow position-relative">
              <div
                className="swiper swiper-container"
                data-swiper-options='{
                                  "slidesPerView": 1.80,
                                  "spaceBetween": 15,
                                  "loop": true,
                                  "pagination": {
                                    "el": ".swiper-pagination",
                                    "clickable": true
                                    }
                            }'
              >
                <div className="swiper-wrapper">
                  {/* <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-media">
                        <a href="#">
                          <img
                            className="product-card-img"
                            src="assets/img/product-8.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-card-body">
                        <div className="product-title d-flex align-items-center">
                          <h6 className="m-0">
                            <a className="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i className="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div className="product-actions d-flex fs-sm">
                          <div className="price col lh-sm">
                            <span className="m-0">
                              Mirrored{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div className="price col lh-sm">
                            <span className="m-0">
                              3.99 ETH{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="product-card-cart">
                          <a className="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                        <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-media">
                        <a href="#">
                          <img
                            className="product-card-img"
                            src="assets/img/product-1.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-card-body">
                        <div className="product-title d-flex align-items-center">
                          <h6 className="m-0">
                            <a className="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i className="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div className="product-actions d-flex fs-sm">
                          <div className="price col lh-sm">
                            <span className="m-0">
                              Mirrored{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div className="price col lh-sm">
                            <span className="m-0">
                              3.99 ETH{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="product-card-cart">
                          <a className="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                        <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-media">
                        <a href="#">
                          <img
                            className="product-card-img"
                            src="assets/img/product-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-card-body">
                        <div className="product-title d-flex align-items-center">
                          <h6 className="m-0">
                            <a className="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i className="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div className="product-actions d-flex fs-sm">
                          <div className="price col lh-sm">
                            <span className="m-0">
                              Mirrored{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div className="price col lh-sm">
                            <span className="m-0">
                              3.99 ETH{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="product-card-cart">
                          <a className="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                        <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-media">
                        <a href="#">
                          <img
                            className="product-card-img"
                            src="assets/img/product-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-card-body">
                        <div className="product-title d-flex align-items-center">
                          <h6 className="m-0">
                            <a className="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i className="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div className="product-actions d-flex fs-sm">
                          <div className="price col lh-sm">
                            <span className="m-0">
                              Mirrored{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div className="price col lh-sm">
                            <span className="m-0">
                              3.99 ETH{" "}
                              <span className="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="product-card-cart">
                          <a className="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box --> */}
                </div>
                <div className="swiper-pagination mt-4  position-relative bottom-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Search -->
<!-- Notifications --> */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="header_notification_bar"
        aria-labelledby="header_notification_barLabel"
      >
        <div className="offcanvas-header border-bottom border-gray-300">
          <h5 className="offcanvas-title" id="header_notification_barLabel">
            Notification
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                src="assets/img/avatar-1.jpg"
                title=""
                alt=""
              />
            </div>
            <div className="col ps-3 d-flex align-items-center">
              <div className="col pe-3">
                <h6 className="mb-1">
                  <a href="#" className="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>sold for 2.515 ETH</span>
                <span className="fs-xs w-100 d-block">
                  25 minutes 10 seconds ago
                </span>
              </div>
              <div className="icon btn btn-border-mode p-0 rounded-3">
                <i className="bi-bag-check"></i>
              </div>
            </div>
          </div>
          <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                src="assets/img/avatar-2.jpg"
                title=""
                alt=""
              />
            </div>
            <div className="col ps-3 d-flex align-items-center">
              <div className="col pe-3">
                <h6 className="mb-1">
                  <a href="#" className="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>listed by @donsee_04</span>
                <span className="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div className="icon btn btn-border-mode p-0 rounded-3">
                <i className="bi-check-lg"></i>
              </div>
            </div>
          </div>
          <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                src="assets/img/avatar-3.jpg"
                title=""
                alt=""
              />
            </div>
            <div className="col ps-3 d-flex align-items-center">
              <div className="col pe-3">
                <h6 className="mb-1">
                  <a href="#" className="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>Bid by @obbabe_01</span>
                <span className="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div className="icon btn btn-border-mode p-0 rounded-3">
                <i className="bi-pin"></i>
              </div>
            </div>
          </div>
          <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                src="assets/img/avatar-1.jpg"
                title=""
                alt=""
              />
            </div>
            <div className="col ps-3 d-flex align-items-center">
              <div className="col pe-3">
                <h6 className="mb-1">
                  <a href="#" className="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>sold for 2.515 ETH</span>
                <span className="fs-xs w-100 d-block">
                  25 minutes 10 seconds ago
                </span>
              </div>
              <div className="icon btn btn-border-mode p-0 rounded-3">
                <i className="bi-bag-check"></i>
              </div>
            </div>
          </div>
          <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                src="assets/img/avatar-2.jpg"
                title=""
                alt=""
              />
            </div>
            <div className="col ps-3 d-flex align-items-center">
              <div className="col pe-3">
                <h6 className="mb-1">
                  <a href="#" className="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>listed by @donsee_04</span>
                <span className="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div className="icon btn btn-border-mode p-0 rounded-3">
                <i className="bi-check-lg"></i>
              </div>
            </div>
          </div>
          <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                src="assets/img/avatar-3.jpg"
                title=""
                alt=""
              />
            </div>
            <div className="col ps-3 d-flex align-items-center">
              <div className="col pe-3">
                <h6 className="mb-1">
                  <a href="#" className="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>Bid by @obbabe_01</span>
                <span className="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div className="icon btn btn-border-mode p-0 rounded-3">
                <i className="bi-pin"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer d-flex p-3 border-top border-gray-300">
          <a className="btn btn-mode mx-3 col" href="#">
            Manage
          </a>
          <a className="btn btn-danger mx-3 col" href="#">
            Clear All
          </a>
        </div>
      </div>
      {/* <!-- End Notifications -->
        <!-- End Header -->
        <!-- Main --> */}
      <main>
        {/* <!-- Section --> */}
        <section
          className="section bg-effect pb-0 bg-no-repeat bg-bottom-center"
          style={{ backgroundImage: "url(assets/img/effect/bg-01.png)" }}
        >
          <div className="bg-ef-1"></div>
          <div className="bg-ef-2"></div>
          <div className="bg-ef-3"></div>
          <div className="bg-ef-4"></div>
          <div className="container position-relative pt-7">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-7 text-center pb-7">
                <h6 className="mb-3 fs-sm fw-400 dark-text text-opacity-75">
                  The NEFT marketplace with everything for everyone{" "}
                </h6>
                <h1 className=" display-4">
                  Discover Collect And Sell Remarkable NFTs.
                </h1>
                <div className="pt-4">
                  <a className="btn btn-gradient rounded-pill me-2" href="#">
                    Start Collecting
                  </a>
                  <a className="btn btn-mode rounded-pill" href="#">
                    Create NFT
                  </a>
                </div>
              </div>
              <div className="col-12 border-bottom border-2 border-white border-opacity-10">
                <img src="assets/img/home-banner.png" title="" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section className="section">
          <div className="container">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-7 text-center">
                <h6 className="text-primary">HOT STUFF</h6>
                <h2 className="h1">Best Collection in this Month</h2>
              </div>
            </div>
            <div className="swiper-hover-arrow position-relative swiper-center-scale">
              <div
                className="swiper swiper-container"
                data-swiper-options='{
                                  "slidesPerView": 2,
                                  "spaceBetween": 0,
                                  "loop": true,
                                  "centeredSlides": true,
                                  "pagination": {
                                    "el": ".swiper-pagination",
                                    "clickable": true
                                    },
                                  "navigation": {
                                    "nextEl": ".swiper-next-02",
                                    "prevEl": ".swiper-prev-02"
                                  },
                                  "breakpoints": {
                                    "600": {
                                      "slidesPerView": 2
                                    },
                                    "991": {
                                      "slidesPerView": 3,
                                      "spaceBetween": 0
                                    },
                                    "1200": {
                                      "slidesPerView": 3.5,
                                      "spaceBetween": 0
                                    }
                                  }
                            }'
              >
                <div className="swiper-wrapper">
                  {/* <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="card border-0 rounded-3">
                      <img
                        className="card-img rounded-3"
                        src="assets/img/product-1.jpg"
                        title=""
                        alt=""
                      />
                      <div className="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div className="mt-auto text-center p-3">
                          <h4 className="text-white h3">Sacred Teardrops</h4>
                          <p className="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a
                              className="btn btn-gradient rounded-pill"
                              href="#"
                            >
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="card border-0 rounded-3">
                      <img
                        className="card-img rounded-3"
                        src="assets/img/product-2.jpg"
                        title=""
                        alt=""
                      />
                      <div className="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div className="mt-auto text-center p-3">
                          <h4 className="text-white h3">Sacred Teardrops</h4>
                          <p className="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a
                              className="btn btn-gradient rounded-pill"
                              href="#"
                            >
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="card border-0 rounded-3">
                      <img
                        className="card-img rounded-3"
                        src="assets/img/product-3.jpg"
                        title=""
                        alt=""
                      />
                      <div className="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div className="mt-auto text-center p-3">
                          <h4 className="text-white h3">Sacred Teardrops</h4>
                          <p className="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a
                              className="btn btn-gradient rounded-pill"
                              href="#"
                            >
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="card border-0 rounded-3">
                      <img
                        className="card-img rounded-3"
                        src="assets/img/product-4.jpg"
                        title=""
                        alt=""
                      />
                      <div className="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div className="mt-auto text-center p-3">
                          <h4 className="text-white h3">Sacred Teardrops</h4>
                          <p className="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a
                              className="btn btn-gradient rounded-pill"
                              href="#"
                            >
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="card border-0 rounded-3">
                      <img
                        className="card-img rounded-3"
                        src="assets/img/product-5.jpg"
                        title=""
                        alt=""
                      />
                      <div className="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div className="mt-auto text-center p-3">
                          <h4 className="text-white h3">Sacred Teardrops</h4>
                          <p className="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a
                              className="btn btn-gradient rounded-pill"
                              href="#"
                            >
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box --> */}
                </div>
                <div className="swiper-pagination mt-4  position-relative bottom-0"></div>
              </div>
              <div className="swiper-arrow-style-02 swiper-next swiper-next-02">
                <i className="bi bi-chevron-right"></i>{" "}
              </div>
              <div className="swiper-arrow-style-02 swiper-prev swiper-prev-02">
                <i className="bi bi-chevron-left"></i>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section className="section bg-effect">
          <div className="bg-ef-1"></div>
          <div className="bg-ef-2"></div>
          <div className="bg-ef-3"></div>
          <div className="bg-ef-4"></div>
          <div className="container position-relative">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-7 text-center">
                <h6 className="text-primary text-uppercase">Discover</h6>
                <h2 className="h1">Explore New NFTs</h2>
              </div>
            </div>
            <div className="row gy-4 section-heading">
              <div className="col-6 col-lg-auto">
                <div className="dropdown">
                  <button
                    className="btn btn-border-mode dropdown-toggle rounded-pill"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort by
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Recently added
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Price: Low to High
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Price: High to Low
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Auction ending soon
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg order-lg-0 order-2">
                <ul className="list-menu-01 justify-content-lg-center">
                  <li>
                    <a
                      className="btn btn-border-mode rounded-pill active"
                      href="#"
                    >
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-border-mode rounded-pill" href="#">
                      Art
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-border-mode rounded-pill" href="#">
                      Game
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-border-mode rounded-pill" href="#">
                      Virtual Worlds
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-border-mode rounded-pill" href="#">
                      Photography
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-auto d-flex justify-content-end">
                <div className="dropdown">
                  <button
                    className="btn btn-border-mode dropdown-toggle rounded-pill"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-8.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="12/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-1.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="12/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-2.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="12/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-3.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="12/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-4.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="12/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-5.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="10/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-6.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="10/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-card">
                  <div className="product-card-user">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div className="avatar-status text-primary border-0">
                            <i className="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          className="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-media">
                    <a href="#">
                      <img
                        className="product-card-img"
                        src="assets/img/product-7.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div className="product-card-timer">
                      <ul
                        className="countdown bg-dark bg-opacity-25 blur-md"
                        data-countdown-date="10/30/2023 12:00:00"
                      >
                        <li>
                          <div data-days></div>
                          <span>Days</span>
                        </li>
                        <li>
                          <div data-hours></div>
                          <span>Hours</span>
                        </li>
                        <li>
                          <div data-minutes></div>
                          <span>minutes</span>
                        </li>
                        <li>
                          <div data-seconds></div>
                          <span>seconds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <div className="product-title d-flex align-items-center">
                      <h6 className="m-0">
                        <a className="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i className="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div className="product-actions d-flex fs-sm">
                      <div className="price col lh-sm">
                        <span className="m-0">
                          Mirrored{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div className="price col lh-sm">
                        <span className="m-0">
                          3.99 ETH{" "}
                          <span className="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="product-card-cart">
                      <a className="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section className="section bg-effect">
          <div className="bg-ef-center"></div>
          <div className="container position-relative">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-7 text-center">
                <h6 className="text-primary text-uppercase">Auctions</h6>
                <h2 className="h1">Most Liked Auctions</h2>
              </div>
            </div>
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="rounded-3 overflow-hidden">
                  <a href="#">
                    <img
                      src="assets/img/single-product-1.jpg"
                      title=""
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 ps-lg-7">
                <h5 className="mb-3">
                  <a className="text-reset" href="#">
                    Marching Struniawski
                  </a>
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum.
                </p>
                <div className="row g-3 pt-3">
                  <div className="col-6 col-lg-4">
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="col ps-3">
                        <span className="text-opacity-85 fw-600 fs-sm d-block pb-1">
                          Creator
                        </span>
                        <h6 className="m-0">0XANC1ΞX</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-4">
                    <div className="d-flex">
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="col ps-3">
                        <span className="text-opacity-85 fw-600 fs-sm d-block pb-1">
                          Creator
                        </span>
                        <h6 className="m-0">EJAN.ETH</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-top border-gray-400 my-4" />
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="fw-400 mb-3 opacity-75">Auction End in</h6>
                    <ul
                      className="countdown d-flex list-unstyled m-0"
                      data-countdown-date="12/30/2023 12:00:00"
                    >
                      <li className="bg-gray-200 me-2 px-3 py-2 rounded-3 lh-sm text-center">
                        <div className="h6 mb-0" data-days></div>
                        <span className="fs-xs text-uppercase">Days</span>
                      </li>
                      <li className="bg-gray-200 me-2 px-3 py-2 rounded-3 lh-sm text-center">
                        <div className="h6 mb-0" data-hours></div>
                        <span className="fs-xs text-uppercase">Hours</span>
                      </li>
                      <li className="bg-gray-200 me-2 px-3 py-2 rounded-3 lh-sm text-center">
                        <div className="h6 mb-0" data-minutes></div>
                        <span className="fs-xs text-uppercase">minutes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 d-flex flex-column">
                    <h6 className="fw-400 mb-3 opacity-75">Current Bid</h6>
                    <div className="d-flex align-items-center col">
                      <div className="icon-sm">
                        <i className="cf cf-etc h4 fw-400 m-0"></i>
                      </div>
                      <div className="col ps-3">
                        <h4 className="m-0">3,89 ETH</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex pt-5">
                  <a
                    className="icon-md btn btn-border-mode p-0 rounded-circle"
                    href="#"
                  >
                    <i className="fi-heart"></i>
                  </a>
                  <a
                    className="btn btn-gradient rounded-pill mx-2 mx-lg-4 flex-fill"
                    href="#"
                  >
                    Buy Now
                  </a>
                  <a
                    className="btn btn-border-mode rounded-pill flex-fill"
                    href="#"
                  >
                    Place A Bid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section className="section bg-effect">
          <div className="bg-ef-1"></div>
          <div className="bg-ef-3"></div>
          <div className="bg-ef-4"></div>
          <div className="bg-ef-2"></div>
          <div className="bg-ef-center"></div>
          <div className="container position-relative">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-7 text-center">
                <h6 className="text-primary text-uppercase">Collection</h6>
                <h2 className="h1">Top Collections of</h2>
              </div>
            </div>
            <ul
              className="nav nav-pills justify-content-lg-center mb-3 overflow-x-auto mw-100 flex-nowrap pb-3"
              id="collections-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="btn btn-border-mode text-uppercase mx-lg-3 me-3 rounded-pill active"
                  id="pills-top_sellers-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-top_sellers"
                  type="button"
                  role="tab"
                  aria-controls="pills-top_sellers"
                  aria-selected="true"
                >
                  Top Sellers
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="btn btn-border-mode text-uppercase mx-lg-3 me-3 rounded-pill"
                  id="pills-creators-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-creators"
                  type="button"
                  role="tab"
                  aria-controls="pills-creators"
                  aria-selected="false"
                >
                  Top Creators
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="btn btn-border-mode text-uppercase mx-lg-3 me-3 rounded-pill"
                  id="pills-buyers-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-buyers"
                  type="button"
                  role="tab"
                  aria-controls="pills-buyers"
                  aria-selected="false"
                >
                  Top Buyers
                </button>
              </li>
            </ul>
            <div className="tab-content" id="collections-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-top_sellers"
                role="tabpanel"
                aria-labelledby="pills-top_sellers-tab"
                tabIndex={0}
              >
                <div className="row g-3">
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        01
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        02
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        03
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        04
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-3.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        05
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-4.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        06
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-5.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        07
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-6.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        08
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-7.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        09
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-8.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-creators"
                role="tabpanel"
                aria-labelledby="pills-creators-tab"
                tabIndex={0}
              >
                <div className="row g-3">
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        01
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        02
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        03
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        04
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-3.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        05
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-4.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        06
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-5.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        07
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-6.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        08
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-7.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        09
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-8.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-buyers"
                role="tabpanel"
                aria-labelledby="pills-buyers-tab"
                tabIndex={0}
              >
                <div className="row g-3">
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        01
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        02
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        03
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        04
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-3.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        05
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-4.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        06
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-5.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        07
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-6.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        08
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-7.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="user-card-01">
                      <div className="user-card-nuber h6 m-0 pe-3 fw-400">
                        09
                      </div>
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar-8.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="user-card-info flex-fill px-3">
                        <h6 className="mb-1">
                          <a href="#" className="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div className="user-card-price">
                        <div className="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}
        {/* <section className="section">
                <div className="container">
                    <div className="nav nav-pills user-steps-section" id="v-steps-tab" role="tablist" aria-orientation="vertical">
                        <div className="user-steps-card active" data-bs-toggle="pill" role="tab" aria-selected="true">
                            <div className="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>01</span>
                                <i className="cf cf-esp"></i>
                            </div>
                            <div className="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a className="btn btn-gradient" href="#">
                                    Start Now
                                    <span className="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div className="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div className="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>02</span>
                                <i className="cf cf-esp"></i>
                            </div>
                            <div className="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a className="btn btn-gradient" href="#">
                                    Start Now
                                    <span className="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div className="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div className="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>03</span>
                                <i className="cf cf-esp"></i>
                            </div>
                            <div className="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a className="btn btn-gradient" href="#">
                                    Start Now
                                    <span className="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div className="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div className="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>04</span>
                                <i className="cf cf-esp"></i>
                            </div>
                            <div className="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a className="btn btn-gradient" href="#">
                                    Start Now
                                    <span className="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div className="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div className="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>05</span>
                                <i className="cf cf-esp"></i>
                            </div>
                            <div className="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a className="btn btn-gradient" href="#">
                                    Start Now
                                    <span className="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  */}
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section className="section overflow-hidden">
          <div className="container">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-7 text-center">
                <h6 className="text-primary text-uppercase">Resourcess</h6>
                <h2 className="h1">Getting Started</h2>
              </div>
            </div>
            <div className="swiper-hover-arrow position-relative">
              <div
                className="swiper swiper-container swiper-no-scroll"
                data-swiper-options='{
                                  "slidesPerView": 1.5,
                                  "spaceBetween": 24,
                                  "loop": true,
                                  "centeredSlides": true,
                                  "pagination": {
                                    "el": ".swiper-pagination",
                                    "clickable": true
                                    },
                                  "navigation": {
                                    "nextEl": ".swiper-next-02",
                                    "prevEl": ".swiper-prev-02"
                                  },
                                  "breakpoints": {
                                    "600": {
                                      "slidesPerView": 1.5
                                    },
                                    "991": {
                                      "slidesPerView": 2.5,
                                      "spaceBetween": 24
                                    },
                                    "1200": {
                                      "slidesPerView": 3.5,
                                      "spaceBetween": 24
                                    }
                                  }
                            }'
              >
                <div className="swiper-wrapper">
                  {/* <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          className="rounded-3"
                          src="assets/img/blog-1.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="pt-4">
                        <h6>
                          <a className="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          className="rounded-3"
                          src="assets/img/blog-2.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="pt-4">
                        <h6>
                          <a className="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          className="rounded-3"
                          src="assets/img/blog-3.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="pt-4">
                        <h6>
                          <a className="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          className="rounded-3"
                          src="assets/img/blog-4.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="pt-4">
                        <h6>
                          <a className="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          className="rounded-3"
                          src="assets/img/blog-5.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="pt-4">
                        <h6>
                          <a className="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div className="swiper-slide">
                    <div className="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          className="rounded-3"
                          src="assets/img/blog-1.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="pt-4">
                        <h6>
                          <a className="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box --> */}
                </div>
                <div className="swiper-pagination mt-4  position-relative bottom-0"></div>
              </div>
              <div className="swiper-arrow-style-02 swiper-next swiper-next-02">
                <i className="bi bi-chevron-right"></i>{" "}
              </div>
              <div className="swiper-arrow-style-02 swiper-prev swiper-prev-02">
                <i className="bi bi-chevron-left"></i>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section --> */}
      </main>
    </div>
  );
};

export default Home;
