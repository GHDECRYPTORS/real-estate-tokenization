import React from "react";

const Home = () => {
  return (
    <div class="wrapper">
      {/* <!-- Header --> */}
      <header class="main-header fixed-top headroom border-bottom border-gray-200 @@classes">
        <nav class="navbar navbar-expand-lg">
          <div class="container align-items-center">
            <div class="logo">
              <a class="navbar-brand" href="index.html">
                <img
                  class="logo-dark"
                  src="assets/img/logo.svg"
                  title=""
                  alt=""
                />
                <img
                  class="logo-light"
                  src="assets/img/logo-light.svg"
                  title=""
                  alt=""
                />
              </a>
            </div>
            <div
              class="offcanvas nav-offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvas_Header_01"
              aria-labelledby="offcanvas_Header_01"
            >
              <div class="offcanvas-header flex-wrap border-bottom border-gray-200">
                <div class="offcanvas-title">
                  <div class="d-flex align-items-center">
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/img/avatar-2.jpg"
                        title=""
                        alt=""
                      />
                    </div>
                    <div class="col ps-3">
                      <h6 class="mb-0">Jupiter</h6>
                      <span class="fs-xs fw-400">@jupiter_0202</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#offcanvas_Header_01"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item dropdown dropdown-hover">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Home
                    </a>
                    <ul class="dropdown-menu start">
                      <li>
                        <a class="dropdown-item" href="index.html">
                          Home Option 01
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown dropdown-hover">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Explore
                    </a>
                    <ul class="dropdown-menu start">
                      <li>
                        <a class="dropdown-item" href="explore.html">
                          Explore
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="explore-details.html">
                          Explore Details
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="activity.html">
                          Explore Activity
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown dropdown-hover">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Collectors
                    </a>
                    <ul class="dropdown-menu start">
                      <li>
                        <a class="dropdown-item" href="collection.html">
                          My Collection
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="collections-details.html"
                        >
                          Details
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="collections-details-activity.html"
                        >
                          Activity
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown dropdown-hover">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Account
                    </a>
                    <ul class="dropdown-menu start">
                      <li>
                        <a class="dropdown-item" href="edit-profile.html">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="view-profile.html">
                          View Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="profile-activity.html">
                          View Activity
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="profile-favorites.html">
                          View Favorites
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="add-nft.html">
                          Add NFT's
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="connect-wallet.html">
                          Connect Wallet
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="login.html">
                          Login
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="sign-up.html">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown dropdown-hover">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul class="dropdown-menu start">
                      <li>
                        <a class="dropdown-item" href="about.html">
                          About
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="blog-single.html">
                          Single Blog
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="help.html">
                          Help
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="help-articles.html">
                          Help Details
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="offcanvas-footer"></div>
            </div>
            <div class="header-end d-flex justify-content-end">
              {/* <!-- Search --> */}
              <div class="d-none d-lg-block h-col h-search-toggle">
                <a
                  class="h-search-icon h-icon"
                  data-bs-toggle="offcanvas"
                  href="#header_search_bar"
                  role="button"
                  aria-controls="header_search_bar"
                >
                  <i class="bi bi-search"></i>
                </a>
              </div>
              {/* <!-- Notification --> */}
              <div class="d-none d-lg-block h-col h-notification">
                <a
                  class="h-notification-icon h-icon"
                  data-bs-toggle="offcanvas"
                  href="#header_notification_bar"
                  role="button"
                  aria-controls="header_notification_bar"
                >
                  <i class="bi bi-bell"></i>
                  <sup>10</sup>
                </a>
              </div>
              {/* <!-- User --> */}
              <div class="d-none d-lg-block h-col h-user">
                <a
                  class="h-user-icon h-icon"
                  data-bs-toggle="offcanvas"
                  href="#header_user_bar"
                  role="button"
                  aria-controls="header_user_barLabel"
                >
                  <i class="bi-person-circle"></i>
                </a>
              </div>
              {/* <!-- Switch --> */}
              <div class="h-col h-switch dropdown">
                <button
                  class="theme-switch h-icon dropdown-toggle"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <span class="bi my-1 theme-icon-active">
                    <i class="bi-circle-half"></i>
                  </span>
                  <span class="d-none">Toggle theme</span>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="bd-theme"
                >
                  <li>
                    <button
                      type="button"
                      class="dropdown-item"
                      data-bs-theme-value="light"
                    >
                      <span class="bi me-2 opacity-50 theme-icon">
                        <i class="bi-sun-fill"></i>
                      </span>
                      Light
                      <span class="bi ms-auto d-none">
                        <i class="bi-check2"></i>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="dropdown-item"
                      data-bs-theme-value="dark"
                    >
                      <span class="bi me-2 opacity-50 theme-icon">
                        <i class="bi-moon-stars-fill"></i>
                      </span>
                      Dark
                      <span class="bi ms-auto d-none">
                        <i class="bi-check2"></i>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="dropdown-item active"
                      data-bs-theme-value="auto"
                    >
                      <span class="bi me-2 opacity-50 theme-icon">
                        <i class="bi-circle-half"></i>
                      </span>
                      Auto
                      <span class="bi ms-auto d-none">
                        <i class="bi-check2"></i>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              {/* <!-- Mobile Toggle --> */}
              <div class="h-col h-toggler d-xl-none">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas_Header_01"
                  aria-controls="offcanvas_Header_01"
                >
                  <span class="px-navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Mobile Headr --> */}
      <div class="mobile-header d-lg-none">
        {/* <!-- Search --> */}
        <div class="h-col h-search-toggle">
          <a
            class="h-search-icon h-icon"
            data-bs-toggle="offcanvas"
            href="#header_search_bar"
            role="button"
            aria-controls="header_search_bar"
          >
            <i class="bi bi-search"></i>
            <span>SEARCH</span>
          </a>
        </div>
        {/* <!-- Notification --> */}
        <div class="h-col h-notification">
          <a
            class="h-notification-icon h-icon"
            data-bs-toggle="offcanvas"
            href="#header_notification_bar"
            role="button"
            aria-controls="header_notification_bar"
          >
            <i class="bi bi-bell"></i>
            <span>Activity</span>
          </a>
        </div>
        {/* <!-- User --> */}
        <div class="h-col h-user">
          <a
            class="h-user-icon h-icon"
            data-bs-toggle="offcanvas"
            href="#header_user_bar"
            role="button"
            aria-controls="header_user_barLabel"
          >
            <i class="bi-person-circle"></i>
            <span>ACCOUNT</span>
          </a>
        </div>
      </div>
      {/* <!-- User --> */}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="header_user_bar"
        aria-labelledby="header_user_barLabel"
      >
        <div class="offcanvas-header border-bottom border-gray-300">
          <div class="offcanvas-title" id="header_user_barLabel">
            <div class="d-flex align-items-center">
              <div class="avatar">
                <img
                  class="avatar-img rounded-circle"
                  src="assets/img/avatar-2.jpg"
                  title=""
                  alt=""
                />
              </div>
              <div class="col ps-3">
                <h6 class="mb-0">Jupiter</h6>
                <span class="fs-xs fw-400">@jupiter_0202</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-unstyled">
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i class="bi-subtract"></i>
                <span class="text-truncate ps-3">653211545655652112</span>
              </a>
            </li>
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <span class="fw-400 mb-3 d-block">Balance</span>
                <div class="d-flex">
                  <div class="icon-sm">
                    <i class="cf cf-etc h4 fw-400 m-0"></i>
                  </div>
                  <div class="col ps-3">
                    <h4 class="m-0">3,89 ETH</h4>
                  </div>
                </div>
              </a>
            </li>
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i class="bi-person"></i>
                <span class="ps-3">My Account</span>
              </a>
            </li>
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i class="bi-gear"></i>
                <span class="ps-3">Setting</span>
              </a>
            </li>
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i class="bi-bookmark"></i>
                <span class="ps-3">Saved</span>
              </a>
            </li>
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i class="bi-clock-history"></i>
                <span class="ps-3">Your Activity</span>
              </a>
            </li>
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i class="bi-bag-check"></i>
                <span class="ps-3">Report a Problem</span>
              </a>
            </li>
            <li class="mb-2">
              <a
                class="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                href="#"
              >
                <i class="bi-lock"></i>
                <span class="ps-3">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- End User -->
<!-- Search --> */}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="header_search_bar"
        aria-labelledby="header_search_barLabel"
      >
        <div class="offcanvas-header border-bottom border-gray-300">
          <h5 class="offcanvas-title" id="header_search_barLabel">
            Search
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form class="h-search-form d-flex w-100 border border-gray-300 p-1 rounded-3">
            <input
              type="text"
              placeholder="Search Here"
              value=""
              class="border-0 rounded-0 shadow-none form-control form-control-sm flex-full"
            />
            <button class="btn icon-md btn-border-mode p-0 search-btn rounded-3">
              <i class="bi bi-search"></i>
            </button>
          </form>
          <div class="pt-4">
            <h6 class="mb-3 text-uppercase fs-sm fw-500">Latest Search</h6>
            <ul class="list-unstyled d-flex flex-wrap">
              <li class="me-2 mb-2">
                <a class="btn btn-sm btn-border-mode rounded-3" href="#">
                  Latest NFT's <span class="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li class="me-2 mb-2">
                <a class="btn btn-sm btn-border-mode rounded-3" href="#">
                  Top NFT's <span class="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li class="me-2 mb-2">
                <a class="btn btn-sm btn-border-mode rounded-3" href="#">
                  Low <span class="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li class="me-2 mb-2">
                <a class="btn btn-sm btn-border-mode rounded-3" href="#">
                  Offers <span class="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li class="me-2 mb-2">
                <a class="btn btn-sm btn-border-mode rounded-3" href="#">
                  Top Sale <span class="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li class="me-2 mb-2">
                <a class="btn btn-sm btn-border-mode rounded-3" href="#">
                  Authors<span class="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
              <li class="me-2 mb-2">
                <a class="btn btn-sm btn-border-mode rounded-3" href="#">
                  Best Seller<span class="btn-icon bi-graph-up-arrow"></span>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div class="pt-4">
            <h6 class="mb-3 text-uppercase fs-sm fw-500">Top Nft's</h6>
            <div class="swiper-hover-arrow position-relative">
              <div
                class="swiper swiper-container"
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
                <div class="swiper-wrapper">
                  {/* <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-card-media">
                        <a href="#">
                          <img
                            class="product-card-img"
                            src="assets/img/product-8.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <div class="product-title d-flex align-items-center">
                          <h6 class="m-0">
                            <a class="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i class="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div class="product-actions d-flex fs-sm">
                          <div class="price col lh-sm">
                            <span class="m-0">
                              Mirrored{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div class="price col lh-sm">
                            <span class="m-0">
                              3.99 ETH{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div class="product-card-cart">
                          <a class="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                        <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-card-media">
                        <a href="#">
                          <img
                            class="product-card-img"
                            src="assets/img/product-1.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <div class="product-title d-flex align-items-center">
                          <h6 class="m-0">
                            <a class="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i class="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div class="product-actions d-flex fs-sm">
                          <div class="price col lh-sm">
                            <span class="m-0">
                              Mirrored{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div class="price col lh-sm">
                            <span class="m-0">
                              3.99 ETH{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div class="product-card-cart">
                          <a class="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                        <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-card-media">
                        <a href="#">
                          <img
                            class="product-card-img"
                            src="assets/img/product-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <div class="product-title d-flex align-items-center">
                          <h6 class="m-0">
                            <a class="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i class="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div class="product-actions d-flex fs-sm">
                          <div class="price col lh-sm">
                            <span class="m-0">
                              Mirrored{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div class="price col lh-sm">
                            <span class="m-0">
                              3.99 ETH{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div class="product-card-cart">
                          <a class="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                        <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="product-card">
                      <div class="product-card-media">
                        <a href="#">
                          <img
                            class="product-card-img"
                            src="assets/img/product-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="product-card-body">
                        <div class="product-title d-flex align-items-center">
                          <h6 class="m-0">
                            <a class="text-reset stretched-linka" href="#">
                              Space Shapes #3
                            </a>
                          </h6>
                          <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                            <i class="avatar-text fi-heart"></i>
                          </button>
                        </div>
                        <div class="product-actions d-flex fs-sm">
                          <div class="price col lh-sm">
                            <span class="m-0">
                              Mirrored{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                18 ETH
                              </span>{" "}
                            </span>
                          </div>
                          <div class="price col lh-sm">
                            <span class="m-0">
                              3.99 ETH{" "}
                              <span class="text-body fw-400 w-100 d-block">
                                1/1
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                        <div class="product-card-cart">
                          <a class="btn btn-primary w-100" href="#">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box --> */}
                </div>
                <div class="swiper-pagination mt-4  position-relative bottom-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Search -->
<!-- Notifications --> */}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="header_notification_bar"
        aria-labelledby="header_notification_barLabel"
      >
        <div class="offcanvas-header border-bottom border-gray-300">
          <h5 class="offcanvas-title" id="header_notification_barLabel">
            Notification
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div class="avatar">
              <img
                class="avatar-img rounded-circle"
                src="assets/img/avatar-1.jpg"
                title=""
                alt=""
              />
            </div>
            <div class="col ps-3 d-flex align-items-center">
              <div class="col pe-3">
                <h6 class="mb-1">
                  <a href="#" class="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>sold for 2.515 ETH</span>
                <span class="fs-xs w-100 d-block">
                  25 minutes 10 seconds ago
                </span>
              </div>
              <div class="icon btn btn-border-mode p-0 rounded-3">
                <i class="bi-bag-check"></i>
              </div>
            </div>
          </div>
          <div class="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div class="avatar">
              <img
                class="avatar-img rounded-circle"
                src="assets/img/avatar-2.jpg"
                title=""
                alt=""
              />
            </div>
            <div class="col ps-3 d-flex align-items-center">
              <div class="col pe-3">
                <h6 class="mb-1">
                  <a href="#" class="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>listed by @donsee_04</span>
                <span class="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div class="icon btn btn-border-mode p-0 rounded-3">
                <i class="bi-check-lg"></i>
              </div>
            </div>
          </div>
          <div class="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div class="avatar">
              <img
                class="avatar-img rounded-circle"
                src="assets/img/avatar-3.jpg"
                title=""
                alt=""
              />
            </div>
            <div class="col ps-3 d-flex align-items-center">
              <div class="col pe-3">
                <h6 class="mb-1">
                  <a href="#" class="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>Bid by @obbabe_01</span>
                <span class="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div class="icon btn btn-border-mode p-0 rounded-3">
                <i class="bi-pin"></i>
              </div>
            </div>
          </div>
          <div class="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div class="avatar">
              <img
                class="avatar-img rounded-circle"
                src="assets/img/avatar-1.jpg"
                title=""
                alt=""
              />
            </div>
            <div class="col ps-3 d-flex align-items-center">
              <div class="col pe-3">
                <h6 class="mb-1">
                  <a href="#" class="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>sold for 2.515 ETH</span>
                <span class="fs-xs w-100 d-block">
                  25 minutes 10 seconds ago
                </span>
              </div>
              <div class="icon btn btn-border-mode p-0 rounded-3">
                <i class="bi-bag-check"></i>
              </div>
            </div>
          </div>
          <div class="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div class="avatar">
              <img
                class="avatar-img rounded-circle"
                src="assets/img/avatar-2.jpg"
                title=""
                alt=""
              />
            </div>
            <div class="col ps-3 d-flex align-items-center">
              <div class="col pe-3">
                <h6 class="mb-1">
                  <a href="#" class="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>listed by @donsee_04</span>
                <span class="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div class="icon btn btn-border-mode p-0 rounded-3">
                <i class="bi-check-lg"></i>
              </div>
            </div>
          </div>
          <div class="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
            <div class="avatar">
              <img
                class="avatar-img rounded-circle"
                src="assets/img/avatar-3.jpg"
                title=""
                alt=""
              />
            </div>
            <div class="col ps-3 d-flex align-items-center">
              <div class="col pe-3">
                <h6 class="mb-1">
                  <a href="#" class="stretched-link text-reset">
                    Drunk Robots
                  </a>
                </h6>
                <span>Bid by @obbabe_01</span>
                <span class="fs-xs w-100 d-block">
                  48 minutes 35 seconds ago
                </span>
              </div>
              <div class="icon btn btn-border-mode p-0 rounded-3">
                <i class="bi-pin"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="offcanvas-footer d-flex p-3 border-top border-gray-300">
          <a class="btn btn-mode mx-3 col" href="#">
            Manage
          </a>
          <a class="btn btn-danger mx-3 col" href="#">
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
          class="section bg-effect pb-0 bg-no-repeat bg-bottom-center"
          style={{ backgroundImage: "url(assets/img/effect/bg-01.png)" }}
        >
          <div class="bg-ef-1"></div>
          <div class="bg-ef-2"></div>
          <div class="bg-ef-3"></div>
          <div class="bg-ef-4"></div>
          <div class="container position-relative pt-7">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-7 text-center pb-7">
                <h6 class="mb-3 fs-sm fw-400 dark-text text-opacity-75">
                  The NEFT marketplace with everything for everyone{" "}
                </h6>
                <h1 class=" display-4">
                  Discover Collect And Sell Remarkable NFTs.
                </h1>
                <div class="pt-4">
                  <a class="btn btn-gradient rounded-pill me-2" href="#">
                    Start Collecting
                  </a>
                  <a class="btn btn-mode rounded-pill" href="#">
                    Create NFT
                  </a>
                </div>
              </div>
              <div class="col-12 border-bottom border-2 border-white border-opacity-10">
                <img src="assets/img/home-banner.png" title="" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section class="section">
          <div class="container">
            <div class="row justify-content-center section-heading">
              <div class="col-lg-7 text-center">
                <h6 class="text-primary">HOT STUFF</h6>
                <h2 class="h1">Best Collection in this Month</h2>
              </div>
            </div>
            <div class="swiper-hover-arrow position-relative swiper-center-scale">
              <div
                class="swiper swiper-container"
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
                <div class="swiper-wrapper">
                  {/* <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="card border-0 rounded-3">
                      <img
                        class="card-img rounded-3"
                        src="assets/img/product-1.jpg"
                        title=""
                        alt=""
                      />
                      <div class="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div class="mt-auto text-center p-3">
                          <h4 class="text-white h3">Sacred Teardrops</h4>
                          <p class="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a class="btn btn-gradient rounded-pill" href="#">
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="card border-0 rounded-3">
                      <img
                        class="card-img rounded-3"
                        src="assets/img/product-2.jpg"
                        title=""
                        alt=""
                      />
                      <div class="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div class="mt-auto text-center p-3">
                          <h4 class="text-white h3">Sacred Teardrops</h4>
                          <p class="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a class="btn btn-gradient rounded-pill" href="#">
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="card border-0 rounded-3">
                      <img
                        class="card-img rounded-3"
                        src="assets/img/product-3.jpg"
                        title=""
                        alt=""
                      />
                      <div class="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div class="mt-auto text-center p-3">
                          <h4 class="text-white h3">Sacred Teardrops</h4>
                          <p class="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a class="btn btn-gradient rounded-pill" href="#">
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="card border-0 rounded-3">
                      <img
                        class="card-img rounded-3"
                        src="assets/img/product-4.jpg"
                        title=""
                        alt=""
                      />
                      <div class="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div class="mt-auto text-center p-3">
                          <h4 class="text-white h3">Sacred Teardrops</h4>
                          <p class="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a class="btn btn-gradient rounded-pill" href="#">
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="card border-0 rounded-3">
                      <img
                        class="card-img rounded-3"
                        src="assets/img/product-5.jpg"
                        title=""
                        alt=""
                      />
                      <div class="card-img-overlay d-flex flex-column bg-dark-gradient">
                        <div class="mt-auto text-center p-3">
                          <h4 class="text-white h3">Sacred Teardrops</h4>
                          <p class="text-white text-opacity-85">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing
                            elite.
                          </p>
                          <div>
                            <a class="btn btn-gradient rounded-pill" href="#">
                              Live Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box --> */}
                </div>
                <div class="swiper-pagination mt-4  position-relative bottom-0"></div>
              </div>
              <div class="swiper-arrow-style-02 swiper-next swiper-next-02">
                <i class="bi bi-chevron-right"></i>{" "}
              </div>
              <div class="swiper-arrow-style-02 swiper-prev swiper-prev-02">
                <i class="bi bi-chevron-left"></i>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section class="section bg-effect">
          <div class="bg-ef-1"></div>
          <div class="bg-ef-2"></div>
          <div class="bg-ef-3"></div>
          <div class="bg-ef-4"></div>
          <div class="container position-relative">
            <div class="row justify-content-center section-heading">
              <div class="col-lg-7 text-center">
                <h6 class="text-primary text-uppercase">Discover</h6>
                <h2 class="h1">Explore New NFTs</h2>
              </div>
            </div>
            <div class="row gy-4 section-heading">
              <div class="col-6 col-lg-auto">
                <div class="dropdown">
                  <button
                    class="btn btn-border-mode dropdown-toggle rounded-pill"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort by
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Recently added
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Price: Low to High
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Price: High to Low
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Auction ending soon
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg order-lg-0 order-2">
                <ul class="list-menu-01 justify-content-lg-center">
                  <li>
                    <a class="btn btn-border-mode rounded-pill active" href="#">
                      All Categories
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-border-mode rounded-pill" href="#">
                      Art
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-border-mode rounded-pill" href="#">
                      Game
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-border-mode rounded-pill" href="#">
                      Virtual Worlds
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-border-mode rounded-pill" href="#">
                      Photography
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg-auto d-flex justify-content-end">
                <div class="dropdown">
                  <button
                    class="btn btn-border-mode dropdown-toggle rounded-pill"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row g-3">
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-8.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-1.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-2.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-3.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-4.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-5.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-6.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="product-card">
                  <div class="product-card-user">
                    <div class="avatar-group">
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Martin"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-1.jpg"
                            title=""
                            alt=""
                          />
                          <div class="avatar-status text-primary border-0">
                            <i class="bi bi-check-circle-fill"></i>
                          </div>
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Larisa"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                        >
                          <img
                            class="avatar-img rounded-circle"
                            src="assets/img/avatar-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="avatar avatar-xs">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Nancy Drew"
                          class="avatar-text rounded-circle bg-primary text-white"
                        >
                          + 5
                        </a>
                      </div>
                    </div>
                    <div class="dropdown ms-auto">
                      <button
                        class="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            New bid
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Buy now
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            View on OpenSea
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Refresh Metadata
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-card-media">
                    <a href="#">
                      <img
                        class="product-card-img"
                        src="assets/img/product-7.jpg"
                        title=""
                        alt=""
                      />
                    </a>
                    <div class="product-card-timer">
                      <ul
                        class="countdown bg-dark bg-opacity-25 blur-md"
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
                  <div class="product-card-body">
                    <div class="product-title d-flex align-items-center">
                      <h6 class="m-0">
                        <a class="text-reset stretched-linka" href="#">
                          Space Shapes #3
                        </a>
                      </h6>
                      <button class="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                        <i class="avatar-text fi-heart"></i>
                      </button>
                    </div>
                    <div class="product-actions d-flex fs-sm">
                      <div class="price col lh-sm">
                        <span class="m-0">
                          Mirrored{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            18 ETH
                          </span>{" "}
                        </span>
                      </div>
                      <div class="price col lh-sm">
                        <span class="m-0">
                          3.99 ETH{" "}
                          <span class="text-body fw-400 w-100 d-block">
                            1/1
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                    <div class="product-card-cart">
                      <a class="btn btn-primary w-100" href="#">
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
        <section class="section bg-effect">
          <div class="bg-ef-center"></div>
          <div class="container position-relative">
            <div class="row justify-content-center section-heading">
              <div class="col-lg-7 text-center">
                <h6 class="text-primary text-uppercase">Auctions</h6>
                <h2 class="h1">Most Liked Auctions</h2>
              </div>
            </div>
            <div class="row gy-5">
              <div class="col-lg-6">
                <div class="rounded-3 overflow-hidden">
                  <a href="#">
                    <img
                      src="assets/img/single-product-1.jpg"
                      title=""
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 ps-lg-7">
                <h5 class="mb-3">
                  <a class="text-reset" href="#">
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
                <div class="row g-3 pt-3">
                  <div class="col-6 col-lg-4">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="col ps-3">
                        <span class="text-opacity-85 fw-600 fs-sm d-block pb-1">
                          Creator
                        </span>
                        <h6 class="m-0">0XANC1ΞX</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-lg-4">
                    <div class="d-flex">
                      <div class="avatar">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="col ps-3">
                        <span class="text-opacity-85 fw-600 fs-sm d-block pb-1">
                          Creator
                        </span>
                        <h6 class="m-0">EJAN.ETH</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="border-top border-gray-400 my-4" />
                <div class="row">
                  <div class="col-sm-6">
                    <h6 class="fw-400 mb-3 opacity-75">Auction End in</h6>
                    <ul
                      class="countdown d-flex list-unstyled m-0"
                      data-countdown-date="12/30/2023 12:00:00"
                    >
                      <li class="bg-gray-200 me-2 px-3 py-2 rounded-3 lh-sm text-center">
                        <div class="h6 mb-0" data-days></div>
                        <span class="fs-xs text-uppercase">Days</span>
                      </li>
                      <li class="bg-gray-200 me-2 px-3 py-2 rounded-3 lh-sm text-center">
                        <div class="h6 mb-0" data-hours></div>
                        <span class="fs-xs text-uppercase">Hours</span>
                      </li>
                      <li class="bg-gray-200 me-2 px-3 py-2 rounded-3 lh-sm text-center">
                        <div class="h6 mb-0" data-minutes></div>
                        <span class="fs-xs text-uppercase">minutes</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-6 d-flex flex-column">
                    <h6 class="fw-400 mb-3 opacity-75">Current Bid</h6>
                    <div class="d-flex align-items-center col">
                      <div class="icon-sm">
                        <i class="cf cf-etc h4 fw-400 m-0"></i>
                      </div>
                      <div class="col ps-3">
                        <h4 class="m-0">3,89 ETH</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex pt-5">
                  <a
                    class="icon-md btn btn-border-mode p-0 rounded-circle"
                    href="#"
                  >
                    <i class="fi-heart"></i>
                  </a>
                  <a
                    class="btn btn-gradient rounded-pill mx-2 mx-lg-4 flex-fill"
                    href="#"
                  >
                    Buy Now
                  </a>
                  <a
                    class="btn btn-border-mode rounded-pill flex-fill"
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
        <section class="section bg-effect">
          <div class="bg-ef-1"></div>
          <div class="bg-ef-3"></div>
          <div class="bg-ef-4"></div>
          <div class="bg-ef-2"></div>
          <div class="bg-ef-center"></div>
          <div class="container position-relative">
            <div class="row justify-content-center section-heading">
              <div class="col-lg-7 text-center">
                <h6 class="text-primary text-uppercase">Collection</h6>
                <h2 class="h1">Top Collections of</h2>
              </div>
            </div>
            <ul
              class="nav nav-pills justify-content-lg-center mb-3 overflow-x-auto mw-100 flex-nowrap pb-3"
              id="collections-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="btn btn-border-mode text-uppercase mx-lg-3 me-3 rounded-pill active"
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
              <li class="nav-item" role="presentation">
                <button
                  class="btn btn-border-mode text-uppercase mx-lg-3 me-3 rounded-pill"
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
              <li class="nav-item" role="presentation">
                <button
                  class="btn btn-border-mode text-uppercase mx-lg-3 me-3 rounded-pill"
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
            <div class="tab-content" id="collections-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-top_sellers"
                role="tabpanel"
                aria-labelledby="pills-top_sellers-tab"
                tabindex="0"
              >
                <div class="row g-3">
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">01</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">02</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">03</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">04</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-3.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">05</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-4.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">06</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-5.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">07</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-6.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">08</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-7.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">09</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-8.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-creators"
                role="tabpanel"
                aria-labelledby="pills-creators-tab"
                tabindex="0"
              >
                <div class="row g-3">
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">01</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">02</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">03</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">04</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-3.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">05</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-4.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">06</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-5.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">07</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-6.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">08</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-7.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">09</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-8.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-buyers"
                role="tabpanel"
                aria-labelledby="pills-buyers-tab"
                tabindex="0"
              >
                <div class="row g-3">
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">01</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">02</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">03</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-2.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">04</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-3.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">05</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-4.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">06</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-5.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">07</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-6.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">08</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-7.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <div class="user-card-01">
                      <div class="user-card-nuber h6 m-0 pe-3 fw-400">09</div>
                      <div class="avatar avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/img/avatar-8.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div class="user-card-info flex-fill px-3">
                        <h6 class="mb-1">
                          <a href="#" class="stretched-link text-reset">
                            Drunk Robots
                          </a>
                        </h6>
                        <span>@drunk_robots</span>
                      </div>
                      <div class="user-card-price">
                        <div class="h6 m-0">$2.2M</div>
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
        {/* <section class="section">
                <div class="container">
                    <div class="nav nav-pills user-steps-section" id="v-steps-tab" role="tablist" aria-orientation="vertical">
                        <div class="user-steps-card active" data-bs-toggle="pill" role="tab" aria-selected="true">
                            <div class="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>01</span>
                                <i class="cf cf-esp"></i>
                            </div>
                            <div class="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a class="btn btn-gradient" href="#">
                                    Start Now
                                    <span class="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div class="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div class="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>02</span>
                                <i class="cf cf-esp"></i>
                            </div>
                            <div class="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a class="btn btn-gradient" href="#">
                                    Start Now
                                    <span class="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div class="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div class="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>03</span>
                                <i class="cf cf-esp"></i>
                            </div>
                            <div class="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a class="btn btn-gradient" href="#">
                                    Start Now
                                    <span class="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div class="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div class="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>04</span>
                                <i class="cf cf-esp"></i>
                            </div>
                            <div class="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a class="btn btn-gradient" href="#">
                                    Start Now
                                    <span class="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                        <div class="user-steps-card" data-bs-toggle="pill" role="tab" aria-selected="false">
                            <div class="icon-xl user-steps-card-icon bg-primary text-white">
                                <span>05</span>
                                <i class="cf cf-esp"></i>
                            </div>
                            <div class="user-steps-card-body text-center pt-5">
                                <h5>Create Your Collection</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <a class="btn btn-gradient" href="#">
                                    Start Now
                                    <span class="btn-icon bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  */}
        {/* <!-- End Section -->
            <!-- Section --> */}
        <section class="section overflow-hidden">
          <div class="container">
            <div class="row justify-content-center section-heading">
              <div class="col-lg-7 text-center">
                <h6 class="text-primary text-uppercase">Resourcess</h6>
                <h2 class="h1">Getting Started</h2>
              </div>
            </div>
            <div class="swiper-hover-arrow position-relative">
              <div
                class="swiper swiper-container swiper-no-scroll"
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
                <div class="swiper-wrapper">
                  {/* <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          class="rounded-3"
                          src="assets/img/blog-1.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div class="pt-4">
                        <h6>
                          <a class="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          class="rounded-3"
                          src="assets/img/blog-2.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div class="pt-4">
                        <h6>
                          <a class="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          class="rounded-3"
                          src="assets/img/blog-3.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div class="pt-4">
                        <h6>
                          <a class="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          class="rounded-3"
                          src="assets/img/blog-4.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div class="pt-4">
                        <h6>
                          <a class="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          class="rounded-3"
                          src="assets/img/blog-5.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div class="pt-4">
                        <h6>
                          <a class="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box -->
                                <!-- Product Box --> */}
                  <div class="swiper-slide">
                    <div class="px-card p-3 rounded-3">
                      <a href="#">
                        <img
                          class="rounded-3"
                          src="assets/img/blog-1.jpg"
                          title=""
                          alt=""
                        />
                      </a>
                      <div class="pt-4">
                        <h6>
                          <a class="text-reset" href="#">
                            How to create an NFT?
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Product Box --> */}
                </div>
                <div class="swiper-pagination mt-4  position-relative bottom-0"></div>
              </div>
              <div class="swiper-arrow-style-02 swiper-next swiper-next-02">
                <i class="bi bi-chevron-right"></i>{" "}
              </div>
              <div class="swiper-arrow-style-02 swiper-prev swiper-prev-02">
                <i class="bi bi-chevron-left"></i>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Section --> */}
      </main>
      {/* <!-- End Main -->
        <!-- Footer --> */}
      <footer class="footer footer-bg bg-body border-top border-gray-300">
        <div class="py-7 py-md-8 py-lg-10">
          <div class="container">
            <div class="row gy-5">
              <div class="col-lg-3 me-auto">
                <div class="pb-4">
                  <img
                    class="footer-logo-light"
                    src="assets/img/logo-light.svg"
                    title=""
                    alt=""
                  />
                  <img
                    class="footer-logo-dark"
                    src="assets/img/logo.svg"
                    title=""
                    alt=""
                  />
                </div>
                <p>
                  Crypto collectibles and non-fungible tokens (NFTs). Buy, sell,
                  and discover exclusive digital items.
                </p>
              </div>
              <div class="col-lg-3 col-6">
                <h5 class="footer-title-01">Marketplace</h5>
                <ul class="list-unstyled footer-link-01 m-0">
                  <li>
                    <a class="" href="#">
                      All NFTs
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      New
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      Collectibles
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      Photography
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      Trading Cards
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-6">
                <h5 class="footer-title-01">Resources</h5>
                <ul class="list-unstyled footer-link-01 m-0">
                  <li>
                    <a class="" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      Platform Status
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      Copyright
                    </a>
                  </li>
                  <li>
                    <a class="" href="#">
                      Popular Campaign
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-sm-6">
                <h5 class="footer-title-01">Stay up to date</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod.
                </p>
                <form>
                  <div class="d-flex flex-row">
                    <input
                      type="email"
                      class="form-control me-2"
                      placeholder="Enter your username"
                    />
                    <button class="btn btn-primary flex-shrink-0" type="submit">
                      <i class="bi-envelope"></i>
                    </button>
                  </div>
                  <p class="m-0 mt-2 small">
                    New UI kits or big discounts. Never spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5 border-top border-gray-300 border-bottom">
          <div class="row gy-4 align-items-center">
            <div class="col-md-7">
              <h4 class="m-0 fw-500 text-center text-md-start">
                The NEFT Marketplace with everything for everyone.
              </h4>
            </div>
            <div class="col-md-5">
              <ul class="nav mx-n2 justify-content-center justify-content-md-end">
                <li class="mx-2">
                  <a class="icon-md btn btn-border-mode p-0 rounded-3" href="#">
                    <i class="bi-facebook"></i>
                  </a>
                </li>
                <li class="mx-2">
                  <a class="icon-md btn btn-border-mode p-0 rounded-3" href="#">
                    <i class="bi-linkedin"></i>
                  </a>
                </li>
                <li class="mx-2">
                  <a class="icon-md btn btn-border-mode p-0 rounded-3" href="#">
                    <i class="bi-twitter"></i>
                  </a>
                </li>
                <li class="mx-2">
                  <a class="icon-md btn btn-border-mode p-0 rounded-3" href="#">
                    <i class="bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row py-3 gy-3 align-items-center">
            <div class="col-md-6">
              <ul class="nav justify-content-center justify-content-md-start my-2 links-white small list-unstyled footer-link-01 m-0">
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#" class="">
                    Privace &amp; Policy
                  </a>
                </li>
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#" class="">
                    Faq's
                  </a>
                </li>
                <li class="p-0 mx-3 ms-md-0 me-md-3">
                  <a href="#" class="">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <p class="text-white-85 small m-0">
                © 2023 Maffei is Proudly Powered by{" "}
                <a
                  href="http://pxdraft.com/"
                  target="_blank"
                  class="text-reset"
                >
                  pxdraft
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </div>
  );
};

export default Home;
