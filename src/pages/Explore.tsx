// import React from 'react'

function Explore() {
  return (
    <main>
      {/* <!-- Section --> */}
      <section
        className="section bg-effect bg-no-repeat bg-top-center"
        // style={{
        //   backgroundImage: "url(assets/img/ai-img-7.png)",
        //   contain: "content",
        // }}
      >
        <div className="bg-ef-1"></div>
        <div className="bg-ef-2"></div>
        <div className="bg-ef-center"></div>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1>NFT Core Collection</h1>
              <p>
                Create an insane top-quality NFT collection with Peace, Love,
                Unity and Respect.
              </p>
              <form className="h-search-form d-flex w-100 border border-gray-300 p-1 rounded-3 bg-body">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="border-0 rounded-0 shadow-none form-control form-control-sm flex-full bg-transparent"
                />
                <button className="btn icon-md btn-border-mode p-0 search-btn rounded-3">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section -->
    <!-- Section --> */}
      <section className="py-6">
        <div className="container">
          <div className="row align-items-start">
            <div
              className="sidebar-col offcanvas-lg offcanvas-start"
              tabIndex={-1}
              id="explor_sidbar_filter"
              aria-labelledby="explor_sidbar_filterLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="explor_sidbar_filterLabel">
                  Filters
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#explor_sidbar_filter"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body p-0">
                <div className="explo-sidebar w-100">
                  <div className="accordion" id="explor_sidebar">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="ex_sidebar-heading_01"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ex_sidebar_01"
                          aria-expanded="true"
                          aria-controls="ex_sidebar_01"
                        >
                          Status
                        </button>
                      </h2>
                      <div
                        id="ex_sidebar_01"
                        className="accordion-collapse collapse show"
                        aria-labelledby="ex_sidebar-heading_01"
                      >
                        <div className="accordion-body">
                          <ul className="sidebar-check-list">
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_01"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox_01"
                                >
                                  Buy Now
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_02"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox_02"
                                >
                                  On Auction
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_03"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox_03"
                                >
                                  New
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_04"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox_04"
                                >
                                  Has Offers
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="ex_sidebar-heading_02"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ex_sidebar_02"
                          aria-expanded="false"
                          aria-controls="ex_sidebar_02"
                        >
                          Price
                        </button>
                      </h2>
                      <div
                        id="ex_sidebar_02"
                        className="accordion-collapse collapse"
                        aria-labelledby="ex_sidebar-heading_02"
                      >
                        <div className="accordion-body">
                          <select className="form-select mb-3">
                            <option>USD</option>
                            <option>ETH</option>
                            <option>SOL</option>
                          </select>
                          <div className="d-flex mb-3">
                            <input
                              type="text"
                              name="min"
                              className="form-control"
                              placeholder="Min"
                            />
                            <span className="fw-600 m-3 lh-1">to</span>
                            <input
                              type="text"
                              name="max"
                              className="form-control"
                              placeholder="Max"
                            />
                          </div>
                          <button className="btn btn-primary w-100">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="ex_sidebar-heading_03"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ex_sidebar_03"
                          aria-expanded="false"
                          aria-controls="ex_sidebar_03"
                        >
                          Quantity
                        </button>
                      </h2>
                      <div
                        id="ex_sidebar_03"
                        className="accordion-collapse collapse"
                        aria-labelledby="ex_sidebar-heading_03"
                      >
                        <div className="accordion-body">
                          <ul className="sidebar-check-list">
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="radio_sidebar"
                                  id="radio_sidebar1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio_sidebar1"
                                >
                                  All items
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="radio_sidebar"
                                  id="radio_sidebar2"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio_sidebar2"
                                >
                                  Single items
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="radio_sidebar"
                                  id="radio_sidebar3"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio_sidebar3"
                                >
                                  Bundles
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="ex_sidebar-heading_04"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ex_sidebar_04"
                          aria-expanded="false"
                          aria-controls="ex_sidebar_04"
                        >
                          Collections
                        </button>
                      </h2>
                      <div
                        id="ex_sidebar_04"
                        className="accordion-collapse collapse"
                        aria-labelledby="ex_sidebar-heading_04"
                      >
                        <div className="accordion-body">
                          <ul className="sidebar-check-list">
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_05"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_05"
                                >
                                  <em className="text-truncate pe-2 fst-normal">
                                    CryptoPunks
                                  </em>
                                  <em className="ms-auto fst-normal fs-sm">
                                    9,998
                                  </em>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_06"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_06"
                                >
                                  <em className="text-truncate pe-2 fst-normal">
                                    Mutant Hound Collars
                                  </em>
                                  <em className="ms-auto fst-normal fs-sm">
                                    4,598
                                  </em>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_07"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_07"
                                >
                                  <em className="text-truncate pe-2 fst-normal">
                                    Mutant Hounds
                                  </em>
                                  <em className="ms-auto fst-normal fs-sm">
                                    3,598
                                  </em>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_08"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_08"
                                >
                                  <em className="text-truncate pe-2 fst-normal">
                                    The Captainz
                                  </em>
                                  <em className="ms-auto fst-normal fs-sm">
                                    5,598
                                  </em>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="ex_sidebar-heading_05"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ex_sidebar_05"
                          aria-expanded="false"
                          aria-controls="ex_sidebar_05"
                        >
                          Chains
                        </button>
                      </h2>
                      <div
                        id="ex_sidebar_05"
                        className="accordion-collapse collapse"
                        aria-labelledby="ex_sidebar-heading_05"
                      >
                        <div className="accordion-body">
                          <ul className="sidebar-check-list">
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_09"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_09"
                                >
                                  Arbitrum
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_10"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_10"
                                >
                                  Avalanche
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_11"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_11"
                                >
                                  BNB Chain
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_12"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_12"
                                >
                                  Ethereum
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_13"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_13"
                                >
                                  Klaytn
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="ex_sidebar-heading_06"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ex_sidebar_06"
                          aria-expanded="false"
                          aria-controls="ex_sidebar_06"
                        >
                          Category
                        </button>
                      </h2>
                      <div
                        id="ex_sidebar_06"
                        className="accordion-collapse collapse"
                        aria-labelledby="ex_sidebar-heading_06"
                      >
                        <div className="accordion-body">
                          <ul className="sidebar-check-list">
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_14"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_14"
                                >
                                  Art
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_15"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_15"
                                >
                                  Collectibles
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_16"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_16"
                                >
                                  Domain Names
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_17"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_17"
                                >
                                  Music
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_18"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_18"
                                >
                                  Photography
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="ex_sidebar-heading_07"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ex_sidebar_07"
                          aria-expanded="false"
                          aria-controls="ex_sidebar_07"
                        >
                          Currency
                        </button>
                      </h2>
                      <div
                        id="ex_sidebar_07"
                        className="accordion-collapse collapse"
                        aria-labelledby="ex_sidebar-heading_07"
                      >
                        <div className="accordion-body">
                          <ul className="sidebar-check-list">
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_19"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_19"
                                >
                                  ETH
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_20"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_20"
                                >
                                  WETH
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox_21"
                                />
                                <label
                                  className="form-check-label d-flex"
                                  htmlFor="checkbox_21"
                                >
                                  APE
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row pb-3 align-items-center">
                <div className="col-7">
                  <button
                    className="btn btn-border-mode rounded-pill d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#explor_sidbar_filter"
                    aria-controls="explor_sidbar_filter"
                  >
                    {" "}
                    <i className="btn-icon bi-funnel-fill"></i> Filter
                  </button>
                  <p className="m-0 d-none d-lg-block">Total 2000 Items</p>
                </div>
                <div className="col-5 d-flex justify-content-end">
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
                        <a className="dropdown-item active" href="#">
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
              </div>
              <div className="row g-3">
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                <div className="col-sm-6 col-lg-4">
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
                          src="assets/img/product-9.jpg"
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
                <div className="col-sm-6 col-lg-4">
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
                          src="assets/img/product-10.jpg"
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
                <div className="col-sm-6 col-lg-4">
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
                          src="assets/img/product-11.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="product-card-timer">
                        <ul
                          className="countdown bg-dark bg-opacity-25 blur-md"
                          data-countdown-date="09/30/2023 12:00:00"
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
                <div className="col-sm-6 col-lg-4">
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
                          src="assets/img/product-12.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div className="product-card-timer">
                        <ul
                          className="countdown bg-dark bg-opacity-25 blur-md"
                          data-countdown-date="11/30/2023 12:00:00"
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
              <div className="pt-7 text-center">
                <button className="btn btn-primary" type="button">
                  <span className="spinner-border spinner-border-sm"></span>
                  Loading...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section --> */}
    </main>
  );
}

export default Explore;
