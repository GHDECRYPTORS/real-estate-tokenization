/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */

import { useContext, useEffect, useState } from "react";

import { ChainContext } from "../chain.resolver";
import ProductCard from "../components/productCard";

// import { getCollections } from "../services/collectionsServices";
//  const [collections, setCollections] = useState<any[]>([]);

// import ProductCard from "../components/productCard";
// import context from "react-bootstrap/esm/AccordionContext";

const ipfsTohttp = (url: string) => {
  if (url == null) return "";
  url = url.trim();
  return url.startsWith("ipfs://")
    ? `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`
    : url;
};
function Explore() {
  const [buyNowEnabled, setBuyNowEnabled] = useState(false);
  const [auctionEnabled, setAuctionEnabled] = useState(false);
  const [activeStatus, setActiveStatus] = useState(false); // ["all", "buyNow", "auction"
  const [searchValue, setSearchValue] = useState("");
  const context = useContext(ChainContext);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    setShowButton(true);
  }, [auctionEnabled, buyNowEnabled]);

  const search = () => {
    window.location.href = `/explore?search=${searchValue}`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    if (search) {
      context.searchCollections(search).then((res) => {
        setCollections(
          res.map((x: any) => ({
            ...x,
            tokenURI: ipfsTohttp(x.tokenURI as string),
          }))
        );
        setLoading(false);
      });
    } else {
      // context.getCollections().then((res) => {
      context.getCollections().then((res) => {
        setCollections(
          res.map((x) => ({
            ...x,
            tokenURI: ipfsTohttp(x.tokenURI as string),
          }))
        );
        setLoading(false);
      });
      // });
    }
  }, []);

  const filter = async () => {
    // get all the filters and then call the api
    if (buyNowEnabled) {
      // call the api with buy now filter
    }
    if (auctionEnabled) {
      // call the api with auction filter
    }
  };

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
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  className='btn icon-md btn-border-mode p-0 search-btn rounded-3'
                  onClick={() => search()}
                  type='button'>
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
                              <div
                                className='form-check'
                                onClick={() => setBuyNowEnabled(true)}>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='checkbox_01'
                                  defaultChecked={buyNowEnabled}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='checkbox_01'>
                                  Buy Now
                                </label>
                              </div>
                            </li>
                            <li>
                              <div
                                className='form-check'
                                onClick={() => setAuctionEnabled(true)}>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='checkbox_02'
                                  defaultChecked={auctionEnabled}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='checkbox_02'>
                                  On Auction
                                </label>
                              </div>
                            </li>
                          </ul>

                          {/* button */}

                          {showButton && (
                            <div className='pt-7 text-center'>
                              <button
                                className='btn btn-primary'
                                type='button'
                                onClick={() => filter()}>
                                Filter
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='row g-3'>
                {collections.map((x: any) => (
                  <div className='col-sm-6 col-lg-4' key={x.address}>
                    <ProductCard product={x} />
                  </div>
                ))}
              </div>
              {loading && (
                <div className='pt-7 text-center'>
                  <button className='btn btn-primary' type='button'>
                    <span className='spinner-border spinner-border-sm'></span>
                    Loading...
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section --> */}
    </main>
  );
}

export default Explore;
