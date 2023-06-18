import { useState } from "react";

const Home = () => {
  const [activeTile, setActiveTile] = useState(1);
  return (
    <div className="wrapper">
      {/* <!-- Header --> */}

      {/* <!-- Mobile Headr --> */}

      {/* <!-- User --> */}
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
                <img src="assets/img/ai-img-7.png" title="" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}

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
        <section className="section">
          <div className="container">
            <div className="row justify-content-center section-heading">
              <div className="col-lg-7 text-center">
                <h6 className="text-primary text-uppercase">How it works</h6>
                <h2 className="h1">How to use the platform </h2>
              </div>
            </div>
            <div
              className="nav nav-pills user-steps-section"
              id="v-steps-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <div
                data-bs-toggle="pill"
                role="tab"
                aria-selected={activeTile == 1}
                onClick={() => setActiveTile(1)}
                className={`user-steps-card ${
                  activeTile == 1 ? "active" : ""
                }`}
                tabIndex={activeTile == 1 ? 1 : -1}
              >
                <div className="icon-xl user-steps-card-icon bg-primary text-white">
                  <span>01</span>
                  <i className="cf cf-esp"></i>
                </div>
                <div className="user-steps-card-body text-center pt-5">
                  <h5>Register Your Assets</h5>
                  <p>Tell us where it is located and its value.</p>
                  <a className="btn btn-gradient" href="#">
                    Start Now
                    <span className="btn-icon bi-chevron-right"></span>
                  </a>
                </div>
              </div>
              <div
                data-bs-toggle="pill"
                role="tab"
                aria-selected={activeTile == 2}
                onClick={() => setActiveTile(2)}
                className={`user-steps-card ${
                  activeTile == 2 ? "active" : ""
                }`}
                tabIndex={activeTile == 2 ? 1 : -1}
              >
                <div className="icon-xl user-steps-card-icon bg-primary text-white">
                  <span>02</span>
                  <i className="cf cf-esp"></i>
                </div>
                <div className="user-steps-card-body text-center pt-5">
                  <h5>Verification</h5>
                  <p>We verify the asset</p>
                </div>
              </div>
              <div
                data-bs-toggle="pill"
                role="tab"
                aria-selected={activeTile == 3}
                onClick={() => setActiveTile(3)}
                className={`user-steps-card ${
                  activeTile == 3 ? "active" : ""
                }`}
                tabIndex={activeTile == 3 ? 1 : -1}
              >
                <div className="icon-xl user-steps-card-icon bg-primary text-white">
                  <span>03</span>
                  <i className="cf cf-esp"></i>
                </div>
                <div className="user-steps-card-body text-center pt-5">
                  <h5>Receive and mint your tokens</h5>
                  <p>You get 100 tokens of your real estate nft</p>
                </div>
              </div>
              <div
                data-bs-toggle="pill"
                role="tab"
                aria-selected={activeTile == 4}
                onClick={() => setActiveTile(4)}
                className={`user-steps-card ${
                  activeTile == 4 ? "active" : ""
                }`}
                tabIndex={activeTile == 4 ? 1 : -1}
              >
                <div className="icon-xl user-steps-card-icon bg-primary text-white">
                  <span>04</span>
                  <i className="cf cf-esp"></i>
                </div>
                <div className="user-steps-card-body text-center pt-5">
                  <h5>Buy and Sell fractions of your asset</h5>
                  <p>Trade or auction portions of your asset</p>
                  {/* <a className="btn btn-gradient" href="#">
                    Start Now
                    <span className="btn-icon bi-chevron-right"></span>
                  </a> */}
                </div>
              </div>
              <div
                data-bs-toggle="pill"
                role="tab"
                aria-selected={activeTile == 5}
                onClick={() => setActiveTile(5)}
                className={`user-steps-card ${
                  activeTile == 5 ? "active" : ""
                }`}
                tabIndex={activeTile == 5 ? 1 : -1}
              >
                <div className="icon-xl user-steps-card-icon bg-primary text-white">
                  <span>05</span>
                  <i className="cf cf-esp"></i>
                </div>
                <div className="user-steps-card-body text-center pt-5">
                  <h5>Get Paid for holding</h5>
                  <p>
                    You get monthly dividends if you hold a portion of the asset
                  </p>
                  <a className="btn btn-gradient" href="#">
                    Start Now
                    <span className="btn-icon bi-chevron-right"></span>
                  </a>
                </div>
              </div>
              <div
                data-bs-toggle="pill"
                role="tab"
                aria-selected={activeTile == 6}
                onClick={() => setActiveTile(6)}
                className={`user-steps-card ${
                  activeTile == 6 ? "active" : ""
                }`}
                tabIndex={activeTile == 6 ? 1 : -1}
              >
                <div className="icon-xl user-steps-card-icon bg-primary text-white">
                  <span>06</span>
                  <i className="cf cf-esp"></i>
                </div>
                <div className="user-steps-card-body text-center pt-5">
                  <h5>Claim asset</h5>
                  <p>
                    You can claim back your asset if you have monopoly of the
                    tokens (all 100). This involves delisting the token
                  </p>
                  <a className="btn btn-gradient" href="#">
                    Start Now
                    <span className="btn-icon bi-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
