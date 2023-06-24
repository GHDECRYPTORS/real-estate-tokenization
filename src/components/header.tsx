/** @format */

import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";

import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import React from "react";
import Notifications from "./notifications";
import Search from "./search";
import User from "./user";

function Header() {
  const { address, isConnected } = useAccount();
  const [theme, setTheme] = useState(window.getTheme());
  useEffect(() => {
    window.setTheme(theme as "dark" | "light" | "auto");
  }, [theme]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // const [showMobile, setShowMobile] = useState(false);
  const [showUser, setShowUser] = useState(false);
  return (
    <>
      <header
        className='main-header fixed-top headroom border-bottom border-gray-200 @@classes'
        style={{ zIndex: 20 }}>
        <nav className='navbar navbar-expand-lg'>
          <div className='container align-items-center'>
            <div className='logo'>
              <Link className='navbar-brand' to='/'>
                <img
                  className='logo-dark w-8'
                  src='assets/img/logo.png'
                  title=''
                  alt=''
                  style={{ width: "200px" }}
                />
                <img
                  className='logo-light'
                  src='assets/img/logo.png'
                  title=''
                  alt=''
                  style={{ width: "200px" }}
                />
              </Link>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav mx-auto'>
                <li className='nav-item dropdown'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <Link className='nav-link' to='/explore'>
                    Explore
                  </Link>
                </li>
                {!isConnected && (
                  <li className='nav-item dropdown'>
                    <Link className='nav-link' to='/login'>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className='offcanvas-footer'></div>
            <div className='header-end d-flex justify-content-end'>
              {/* <!-- Search --> */}
              <div className='d-none d-lg-block h-col h-search-toggle'>
                <Link
                  className='h-search-icon h-icon'
                  data-bs-toggle='offcanvas'
                  to='#header_search_bar'
                  role='button'
                  aria-controls='header_search_bar'
                  onClick={() => setShowSearch(true)}>
                  <i className='bi bi-search'></i>
                </Link>
              </div>
              {/* <!-- Notification --> */}
              {!isConnected && (
                <div className='d-none d-lg-block h-col h-notification'>
                  <Link
                    className='h-notification-icon h-icon'
                    data-bs-toggle='offcanvas'
                    to='#header_notification_bar'
                    role='button'
                    aria-controls='header_notification_bar'
                    onClick={() => setShowNotifications(true)}>
                    <i className='bi bi-bell'></i>
                    <sup>10</sup>
                  </Link>
                </div>
              )}
              {/* <!-- User --> */}
              {isConnected && (
                <div className='d-none d-lg-block h-col h-user'>
                  <Link
                    className='h-user-icon h-icon'
                    data-bs-toggle='offcanvas'
                    to='#header_user_bar'
                    role='button'
                    aria-controls='header_user_barLabel'
                    onClick={() => setShowUser(true)}>
                    <i className='bi-person-circle'></i>
                  </Link>
                </div>
              )}
              {/* <!-- Switch --> */}
              <Dropdown className='h-col h-switch'>
                <Dropdown.Toggle
                  className='theme-switch h-icon'
                  id='bd-theme'
                  variant='dropdown'
                  aria-expanded='false'
                  data-bs-toggle='dropdown'
                  data-bs-display='static'>
                  <span className='bi my-1 theme-icon-active'>
                    <i className='bi-circle-half'></i>
                  </span>
                  <span className='d-none'>Toggle theme</span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className='dropdown-menu-end'
                  aria-labelledby='bd-theme'>
                  <Dropdown.Item
                    type='button'
                    data-bs-theme-value='light'
                    className={theme == "light" ? "active" : ""}
                    onClick={() => {
                      setTheme("light");
                    }}>
                    <span className='bi me-2 opacity-50 theme-icon'>
                      <i className='bi-sun-fill'></i>
                    </span>
                    Light
                    <span className='bi ms-auto d-none'>
                      <i className='bi-check2'></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    type='button'
                    className={theme == "dark" ? "active" : ""}
                    data-bs-theme-value='dark'
                    onClick={() => {
                      setTheme("dark");
                    }}>
                    <span className='bi me-2 opacity-50 theme-icon'>
                      <i className='bi-moon-stars-fill'></i>
                    </span>
                    Dark
                    <span className='bi ms-auto d-none'>
                      <i className='bi-check2'></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    type='button'
                    className={theme == "auto" ? "active" : ""}
                    data-bs-theme-value='auto'
                    onClick={() => {
                      setTheme("auto");
                    }}>
                    <span className='bi me-2 opacity-50 theme-icon'>
                      <i className='bi-circle-half'></i>
                    </span>
                    Auto
                    <span className='bi ms-auto d-none'>
                      <i className='bi-check2'></i>
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* <!-- Mobile Toggle --> */}
              <div className='h-col h-toggler d-xl-none'>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='offcanvas'
                  data-bs-target='#offcanvas_Header_01'
                  aria-controls='offcanvas_Header_01'
                  onClick={() => setShowUser(true)}>
                  <span className='px-navbar-toggler-icon'></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className='mobile-header d-lg-none'>
        {/* <!-- Search --> */}
        <div className='h-col h-search-toggle'>
          <Link
            className='h-search-icon h-icon'
            data-bs-toggle='offcanvas'
            to='#header_search_bar'
            role='button'
            aria-controls='header_search_bar'
            onClick={() => setShowSearch(true)}>
            <i className='bi bi-search'></i>
            <span>SEARCH</span>
          </Link>
        </div>
        {/* <!-- Notification --> */}
        <div className='h-col h-notification'>
          <Link
            className='h-notification-icon h-icon'
            data-bs-toggle='offcanvas'
            to='#header_notification_bar'
            role='button'
            aria-controls='header_notification_bar'
            onClick={() => setShowNotifications(true)}>
            <i className='bi bi-bell'></i>
            <span>Activity</span>
          </Link>
        </div>
        {/* <!-- User --> */}
        {isConnected && (
          <div className='h-col h-user'>
            <Link
              className='h-user-icon h-icon'
              data-bs-toggle='offcanvas'
              to='#header_user_bar'
              role='button'
              aria-controls='header_user_barLabel'
              onClick={() => setShowUser(true)}>
              <i className='bi-person-circle'></i>
              <span>ACCOUNT</span>
            </Link>
          </div>
        )}
      </div>

      <User showUser={showUser} setShowUser={setShowUser} />
      <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      <Notifications
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
    </>
  );
}

export default Header;
