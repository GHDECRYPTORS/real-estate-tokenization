// import React from "react";
import { Link } from "react-router-dom";
function ProductCard(props: { product: any; auctioned?: boolean }) {
  let obj = {
    days: 0,
    hours: 0,
    minutes: 0,
  };
  if (props.auctioned) {
    //   get ends_at date and minus the current date
    obj = {
      days: new Date(props.product.ends_at).getDate() - new Date().getDate(),
      hours: new Date(props.product.ends_at).getHours() - new Date().getHours(),
      minutes:
        new Date(props.product.ends_at).getMinutes() - new Date().getMinutes(),
    };
  }
  return (
    <div className='product-card'>
      <div className='product-card-media'>
        <a href={"/collections/" + props.product.address}>
          <img
            className='product-card-img'
            src={props.product.tokenURI}
            title=''
            alt=''
          />
        </a>
        {props.auctioned && (
          <div className='product-card-timer'>
            <ul
              className='countdown bg-dark bg-opacity-25 blur-md'
              data-countdown-date='12/30/2023 12:00:00'>
              <li>
                <div data-days>{obj.days}</div>
                <span>Days</span>
              </li>
              <li>
                <div data-hours>{obj.hours}</div>
                <span>Hours</span>
              </li>
              <li>
                <div data-minutes>{obj.minutes}</div>
                <span>minutes</span>
              </li>
              <li>
                <div data-seconds></div>
                <span>seconds</span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='product-card-body'>
        <div className='product-title d-flex align-items-center'>
          <h6 className='m-0'>
            <a className='text-reset stretched-linka' href='#'>
              {props.product.name} {props.product.tokenId}
            </a>
          </h6>
          <button className='like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto'>
            <i className='avatar-text fi-heart'></i>
          </button>
        </div>
        {/* <div className='product-actions d-flex fs-sm'> */}
        {/* <div className='price col lh-sm'>
            <span className='m-0'>
              Mirrored{" "}
              <span className='text-body fw-400 w-100 d-block'>18 ETH</span>{" "}
            </span>
          </div>
          <div className='price col lh-sm'>
            <span className='m-0'>
              3.99 ETH{" "}
              <span className='text-body fw-400 w-100 d-block'>1/1</span>{" "}
            </span>
          </div> */}
        {/* </div> */}
        <div className='product-card-cart'>
          <Link
            className='dropdown-item'
            to={"/collections/" + props.product.address}>
            <a
              className='btn btn-primary w-100'
              href={"/collections/" + props.product.address}>
              Buy Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
