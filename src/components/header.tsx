// import React from "react";

function Header() {
  return (
    <header className="main-header fixed-top headroom border-bottom border-gray-200 @@classes">
      <nav className="navbar navbar-expand-lg">
        <div className="container align-items-center">
          <div className="logo">
            <a className="navbar-brand" href="index.html">
              <img
                className="logo-dark"
                src="assets/img/logo.svg"
                title=""
                alt=""
              />
              <img
                className="logo-light"
                src="assets/img/logo-light.svg"
                title=""
                alt=""
              />
            </a>
          </div>
          <div
            className="offcanvas nav-offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvas_Header_01"
            aria-labelledby="offcanvas_Header_01"
          >
            <div className="offcanvas-header flex-wrap border-bottom border-gray-200">
              <div className="offcanvas-title">
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
                data-bs-target="#offcanvas_Header_01"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu start">
                    <li>
                      <a className="dropdown-item" href="index.html">
                        Home Option 01
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Explore
                  </a>
                  <ul className="dropdown-menu start">
                    <li>
                      <a className="dropdown-item" href="explore.html">
                        Explore
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="explore-details.html">
                        Explore Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="activity.html">
                        Explore Activity
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Collectors
                  </a>
                  <ul className="dropdown-menu start">
                    <li>
                      <a className="dropdown-item" href="collection.html">
                        My Collection
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="collections-details.html"
                      >
                        Details
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="collections-details-activity.html"
                      >
                        Activity
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu start">
                    <li>
                      <a className="dropdown-item" href="edit-profile.html">
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="view-profile.html">
                        View Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="profile-activity.html">
                        View Activity
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="profile-favorites.html"
                      >
                        View Favorites
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="add-nft.html">
                        Add NFT's
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="connect-wallet.html">
                        Connect Wallet
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="sign-up.html">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu start">
                    <li>
                      <a className="dropdown-item" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-single.html">
                        Single Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="help.html">
                        Help
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="help-articles.html">
                        Help Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="offcanvas-footer"></div>
          </div>
          <div className="header-end d-flex justify-content-end">
            {/* <!-- Search --> */}
            <div className="d-none d-lg-block h-col h-search-toggle">
              <a
                className="h-search-icon h-icon"
                data-bs-toggle="offcanvas"
                href="#header_search_bar"
                role="button"
                aria-controls="header_search_bar"
              >
                <i className="bi bi-search"></i>
              </a>
            </div>
            {/* <!-- Notification --> */}
            <div className="d-none d-lg-block h-col h-notification">
              <a
                className="h-notification-icon h-icon"
                data-bs-toggle="offcanvas"
                href="#header_notification_bar"
                role="button"
                aria-controls="header_notification_bar"
              >
                <i className="bi bi-bell"></i>
                <sup>10</sup>
              </a>
            </div>
            {/* <!-- User --> */}
            <div className="d-none d-lg-block h-col h-user">
              <a
                className="h-user-icon h-icon"
                data-bs-toggle="offcanvas"
                href="#header_user_bar"
                role="button"
                aria-controls="header_user_barLabel"
              >
                <i className="bi-person-circle"></i>
              </a>
            </div>
            {/* <!-- Switch --> */}
            <div className="h-col h-switch dropdown">
              <button
                className="theme-switch h-icon dropdown-toggle"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <span className="bi my-1 theme-icon-active">
                  <i className="bi-circle-half"></i>
                </span>
                <span className="d-none">Toggle theme</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="bd-theme"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    data-bs-theme-value="light"
                  >
                    <span className="bi me-2 opacity-50 theme-icon">
                      <i className="bi-sun-fill"></i>
                    </span>
                    Light
                    <span className="bi ms-auto d-none">
                      <i className="bi-check2"></i>
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    data-bs-theme-value="dark"
                  >
                    <span className="bi me-2 opacity-50 theme-icon">
                      <i className="bi-moon-stars-fill"></i>
                    </span>
                    Dark
                    <span className="bi ms-auto d-none">
                      <i className="bi-check2"></i>
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item active"
                    data-bs-theme-value="auto"
                  >
                    <span className="bi me-2 opacity-50 theme-icon">
                      <i className="bi-circle-half"></i>
                    </span>
                    Auto
                    <span className="bi ms-auto d-none">
                      <i className="bi-check2"></i>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            {/* <!-- Mobile Toggle --> */}
            <div className="h-col h-toggler d-xl-none">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas_Header_01"
                aria-controls="offcanvas_Header_01"
              >
                <span className="px-navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
