// import React from "react";
import Notifications from "./notifications";
import Search from "./search";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="main-header fixed-top headroom border-bottom border-gray-200 @@classes">
        <nav className="navbar navbar-expand-lg">
          <div className="container align-items-center">
            <div className="logo">
              <Link className="navbar-brand" to="/">
                <img
                  className="logo-dark w-8"
                  src="assets/img/logo.png"
                  title=""
                  alt=""
                  style={{ width: "200px" }}
                />
                <img
                  className="logo-light"
                  src="assets/img/logo.png"
                  title=""
                  alt=""
                  style={{ width: "200px" }}
                />
              </Link>
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
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="#" data-bs-toggle="dropdown">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/explore"
                      data-bs-toggle="dropdown"
                    >
                      Explore
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/collections"
                      data-bs-toggle="dropdown"
                    >
                      Collections
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="offcanvas-footer"></div>
            </div>
            <div className="header-end d-flex justify-content-end">
              {/* <!-- Search --> */}
              <div className="d-none d-lg-block h-col h-search-toggle">
                <Link
                  className="h-search-icon h-icon"
                  data-bs-toggle="offcanvas"
                  to="#header_search_bar"
                  role="button"
                  aria-controls="header_search_bar"
                >
                  <i className="bi bi-search"></i>
                </Link>
              </div>
              {/* <!-- Notification --> */}
              <div className="d-none d-lg-block h-col h-notification">
                <Link
                  className="h-notification-icon h-icon"
                  data-bs-toggle="offcanvas"
                  to="#header_notification_bar"
                  role="button"
                  aria-controls="header_notification_bar"
                >
                  <i className="bi bi-bell"></i>
                  <sup>10</sup>
                </Link>
              </div>
              {/* <!-- User --> */}
              <div className="d-none d-lg-block h-col h-user">
                <Link
                  className="h-user-icon h-icon"
                  data-bs-toggle="offcanvas"
                  to="#header_user_bar"
                  role="button"
                  aria-controls="header_user_barLabel"
                >
                  <i className="bi-person-circle"></i>
                </Link>
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
      <div className="mobile-header d-lg-none">
        {/* <!-- Search --> */}
        <div className="h-col h-search-toggle">
          <Link
            className="h-search-icon h-icon"
            data-bs-toggle="offcanvas"
            to="#header_search_bar"
            role="button"
            aria-controls="header_search_bar"
          >
            <i className="bi bi-search"></i>
            <span>SEARCH</span>
          </Link>
        </div>
        {/* <!-- Notification --> */}
        <div className="h-col h-notification">
          <Link
            className="h-notification-icon h-icon"
            data-bs-toggle="offcanvas"
            to="#header_notification_bar"
            role="button"
            aria-controls="header_notification_bar"
          >
            <i className="bi bi-bell"></i>
            <span>Activity</span>
          </Link>
        </div>
        {/* <!-- User --> */}
        <div className="h-col h-user">
          <Link
            className="h-user-icon h-icon"
            data-bs-toggle="offcanvas"
            to="#header_user_bar"
            role="button"
            aria-controls="header_user_barLabel"
          >
            <i className="bi-person-circle"></i>
            <span>ACCOUNT</span>
          </Link>
        </div>
      </div>
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
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
              >
                <i className="bi-subtract"></i>
                <span className="text-truncate ps-3">653211545655652112</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
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
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
              >
                <i className="bi-person"></i>
                <span className="ps-3">My Account</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
              >
                <i className="bi-gear"></i>
                <span className="ps-3">Setting</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
              >
                <i className="bi-bookmark"></i>
                <span className="ps-3">Saved</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
              >
                <i className="bi-clock-history"></i>
                <span className="ps-3">Your Activity</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
              >
                <i className="bi-bag-check"></i>
                <span className="ps-3">Report a Problem</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
                to="#"
              >
                <i className="bi-lock"></i>
                <span className="ps-3">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Search />
      <Notifications />
    </>
  );
}

export default Header;
