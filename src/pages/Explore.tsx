/** @format */

import ProductCard from "../components/productCard";
import { useState } from "react";

function Explore() {
  const [activeStatus, setActiveStatus] = useState(false);
  const [activePrice, setActivePrice] = useState(false);
  const [activeQuantity, setActiveQuantity] = useState(false);
  // const [activeCollections, setActiveCollections] = useState(false);
  const [activeChains, setActiveChains] = useState(false);
  // const [activeCategory, setActiveCategory] = useState(false);
  // const [activeCurrency, setActiveCurrency] = useState(false);

  return (
    <main>
      {/* <!-- Section --> */}
      <section
        className='section bg-effect bg-no-repeat bg-top-center'
        // style={{
        //   backgroundImage: "url(assets/img/ai-img-7.png)",
        //   contain: "content",
        // }}
      >
        <div className='bg-ef-1'></div>
        <div className='bg-ef-2'></div>
        <div className='bg-ef-center'></div>
        <div className='container position-relative'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 text-center'>
              <h1>NFT Core Collection</h1>
              <p>
                Create an insane top-quality NFT collection with Peace, Love,
                Unity and Respect.
              </p>
              <form className='h-search-form d-flex w-100 border border-gray-300 p-1 rounded-3 bg-body'>
                <input
                  type='text'
                  placeholder='Search Here'
                  className='border-0 rounded-0 shadow-none form-control form-control-sm flex-full bg-transparent'
                />
                <button className='btn icon-md btn-border-mode p-0 search-btn rounded-3'>
                  <i className='bi bi-search'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section -->
    <!-- Section --> */}
      <section className='py-6'>
        <div className='container'>
          <div className='row align-items-start'>
            <div
              className='sidebar-col offcanvas-lg offcanvas-start'
              tabIndex={-1}
              id='explor_sidbar_filter'
              aria-labelledby='explor_sidbar_filterLabel'>
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='explor_sidbar_filterLabel'>
                  Filters
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='offcanvas'
                  data-bs-target='#explor_sidbar_filter'
                  aria-label='Close'></button>
              </div>
              <div className='offcanvas-body p-0'>
                <div className='explo-sidebar w-100'>
                  <div className='accordion' id='explor_sidebar'>
                    <div className='accordion-item'>
                      <h2
                        className='accordion-header'
                        id='ex_sidebar-heading_01'>
                        <button
                          className={`accordion-button ${
                            activeStatus ? "" : "collapsed"
                          } `}
                          onClick={() => setActiveStatus(!activeStatus)}
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#ex_sidebar_01'
                          aria-expanded='true'
                          aria-controls='ex_sidebar_01'>
                          Status
                        </button>
                      </h2>
                      <div
                        id='ex_sidebar_01'
                        className={`accordion-collapse collapse ${
                          activeStatus ? "show" : ""
                        } `}
                        aria-labelledby='ex_sidebar-heading_01'>
                        <div className='accordion-body'>
                          <ul className='sidebar-check-list'>
                            <li>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='checkbox_01'
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='checkbox_01'>
                                  Buy Now
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='checkbox_02'
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='checkbox_02'>
                                  On Auction
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='checkbox_03'
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='checkbox_03'>
                                  All
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
            <div className='col'>
              <div className='row g-3'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x: number) => (
                  <div className='col-sm-6 col-lg-4' key={x}>
                    <ProductCard />
                  </div>
                ))}
              </div>
              <div className='pt-7 text-center'>
                <button className='btn btn-primary' type='button'>
                  <span className='spinner-border spinner-border-sm'></span>
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
