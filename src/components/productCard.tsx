// import React from "react";
import { Link } from "react-router-dom";
function ProductCard() {
  return (
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
              <Link className="dropdown-item" to="/colections/4">
                Buy now
              </Link>
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
              <span className="text-body fw-400 w-100 d-block">18 ETH</span>{" "}
            </span>
          </div>
          <div className="price col lh-sm">
            <span className="m-0">
              3.99 ETH{" "}
              <span className="text-body fw-400 w-100 d-block">1/1</span>{" "}
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
  );
}

export default ProductCard;
