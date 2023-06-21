interface SearchProps {
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}
const Search: React.FC<SearchProps> = ({ showSearch, setShowSearch }) => {
  return (
    <div
      className={`offcanvas offcanvas-end ${showSearch ? "show" : ""}`}
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
          onClick={() => setShowSearch(false)}
        ></button>
      </div>
      <div className="offcanvas-body">
        <form className="h-search-form d-flex w-100 border border-gray-300 p-1 rounded-3">
          <input
            type="text"
            placeholder="Search Here"
            className="border-0 rounded-0 shadow-none form-control form-control-sm flex-full"
          />
          <button className="btn icon-md btn-border-mode p-0 search-btn rounded-3">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="pt-4">
          <h6 className="mb-3 text-uppercase fs-sm fw-500">Latest Search</h6>
          
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
  );
};

export default Search;
