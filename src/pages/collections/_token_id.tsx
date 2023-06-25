/** @format */

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ellipsify } from "../../components/ellipsify";
import { ethers } from "ethers";
import { getSingleCollection } from "../../services/collectionsServices";
import getTokenOwner from "../../helpers/getTokenOwner";
import getUniqueOwners from "../../helpers/uniqueHolders";
import { useAccount } from "wagmi";

// import Accordion from "react-bootstrap/Accordion";
function SingleCollectionToken() {
  const [activeoffer, setActiveOffer] = useState(false);
  const { address: userAddress } = useAccount();
  const [isRented, setIsRented] = useState(false);
  const [durationTime, setDurationTime] = useState("0");
  const [instantBuy, setInstantBuy] = useState(false);
  const [tokenOwner, setTokenOwner] = useState("");
  // const [activeproperties, setActiveProperties] = useState(false);
  const [activecolldetails, setActiveCollDetails] = useState(false);
  const [activetokendetails, setActiveTokenDetails] = useState(false);
  const [tokenHolders, setTokenHolders] = useState("---");
  const params = useParams();
  const { address, tokenId } = params;
  const [collection, setCollection] = useState<any>(null);
  // const navigate = useNavigate();
  console.log(collection);
  useEffect(() => {
    const getCollection = async () => {
      const response = await getSingleCollection(address);
      console.log("response", response?.data?.data);
      setCollection(response?.data?.data);
    };
    getCollection();
  }, [userAddress]);

  async function getInstantBuy() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        address as string,
        houseNFTABI,
        signer
      );

      const isInstantBuy = await contract.instantBuyEnabled(tokenId);
      return isInstantBuy;
    } catch (error) {
      console.error("Error occurred while buying the token:", error);
    }
  }
  async function isRentedF() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const contract = new ethers.Contract(
        address as string,
        houseNFTABI,
        provider
      );

      const isRented = await contract.isRented(+(tokenId as string));
      return isRented;
    } catch (error: any) {
      console.error(
        "Error occurred while checking if token is rented",
        error.message
      );
    }
  }

  async function makeOffer() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        address as string,
        houseNFTABI,
        signer
      );
      const placedBid = await contract.placeBid(tokenId, {
        value: ethers.utils.parseUnits(offerAmount, "ether"),
      });
      return placedBid;
    } catch (error) {
      console.error("Error occurred while making an offer", error);
    }
  }
  async function createAuction() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        address as string,
        houseNFTABI,
        signer
      );
      const createAuctionTx = await contract.createAuction(
        tokenId,
        durationTime
      );
      return createAuctionTx;
    } catch (error) {
      console.error("Error occurred while making an offer", error);
    }
  }
  async function buyNFT() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        address as string,
        houseNFTABI,
        signer
      );
      const buyNFTTX = await contract.instantBuy(tokenId, {
        value: collection?.unitPrice ? ethValue(collection?.unitPrice) : 0,
      });
      return buyNFTTX;
    } catch (error) {
      console.error("Error occurred while making an offer", error);
    }
  }

  useEffect(() => {
    getTokenOwner(address as string, tokenId)
      .then((owner) => setTokenOwner(owner))
      .catch((e) => console.log(`Error: ${e.message}`));

    isRentedF()
      .then((iRented) => console.log(iRented))
      .catch((e) => console.log(`Error: ${e.message}`));
  }, [userAddress]);

  useEffect(() => {});

  useEffect(() => {
    getInstantBuy()
      .then((e) => setInstantBuy(e))
      .catch((e) => console.log(e.message));
  }, [userAddress]);

  useEffect(() => {
    getUniqueOwners(address as string, { start: 0, end: 99 })
      .then((owners: any) => {
        setTokenHolders(owners.length);
      })
      .catch((e) => console.log(`Error while fetching owners ${e.message}`));
  }, [userAddress]);

  const ipfsTohttp = (url: string) => {
    if (url == null) return "";
    url = url.trim();
    return url.startsWith("ipfs://")
      ? `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`
      : url;
  };
  const ethValue = (value: any) => {
    return ethers.utils.formatEther(value);
  };

  return (
    <main className='mt-8'>
      <div className='position-fixed top-0 bottom-0 start-0 end-0 pe-none bg-effect'>
        <div className='bg-ef-1'></div>
        <div className='bg-ef-2'></div>
        <div className='bg-ef-3'></div>
        <div className='bg-ef-4'></div>
      </div>

      <section className='section pt-6'>
        <div className='container position-relative'>
          <div className='row gy-5 align-items-start'>
            <div className='col-lg-7 col-xxl-8 pe-lg-5 pe-xl-8 sticky-lg-top'>
              <img
                className='rounded-3 w-100'
                src={ipfsTohttp(collection?.tokenURI)}
                title=''
                alt=''
              />
              <div className='d-flex align-items-center justify-content-center mt-4'>
                <div className='border border-gray-300 rounded-3 d-flex p-3'>
                  <a
                    data-bs-toggle='tooltip'
                    data-bs-original-title='wishlist'
                    className='mx-1 btn btn-border-mode p-0 icon-md rounded-3'
                    href='#'>
                    <i className='fi-heart'></i>
                  </a>
                  <a
                    data-bs-toggle='tooltip'
                    data-bs-original-title='Share'
                    className='mx-1 btn btn-border-mode p-0 icon-md rounded-3'
                    href='#'>
                    <i className='fi-share'></i>
                  </a>
                  <a
                    data-bs-toggle='tooltip'
                    data-bs-original-title='Refresh'
                    className='mx-1 btn btn-border-mode p-0 icon-md rounded-3'
                    href='#'>
                    <i className='bi-arrow-repeat'></i>
                  </a>
                  <a
                    data-bs-toggle='tooltip'
                    data-bs-original-title='Report'
                    className='mx-1 btn btn-border-mode p-0 icon-md rounded-3'
                    href='#'>
                    <i className='bi-flag'></i>
                  </a>
                </div>
              </div>
              {tokenOwner == userAddress && (
                <div className='border border-gray-300 p-3 rounded-3 mt-3'>
                  <p className='mb-23 pb-3 border-bottom border-gray-300'>
                    MODIFY
                  </p>
                  <input
                    type='text'
                    value={durationTime}
                    placeholder='Enter duration in seconds'
                    className='border p-2 mb-4 rounded-0 shadow-none form-control form-control-sm flex-full'
                    onInput={(e) => setDurationTime(e.currentTarget.value)}
                  />
                  <a
                    className='btn btn-lg btn-gradient w-100'
                    href='#'
                    onClick={(e) => createAuction()}>
                    <i className='bi-tags'></i> Create Auction
                  </a>
                </div>
              )}
            </div>
            <div className='col-lg-5 col-xxl-4'>
              <div className='d-flex fs-sm pb-2'>
                {collection?.name}
                <i className='bi-patch-check-fill text-primary ms-2'></i>
              </div>
              <h1>
                {collection?.symbol} #{tokenId}
              </h1>
              <div className='d-flex pt-2'>
                <div>
                  <Link to={`/collections/${address}`}>
                    <span>Owned by</span>{" "}
                    <a href='#'>{ellipsify(tokenOwner || "", 20)}</a>
                  </Link>
                </div>
                {/* <div className='ms-auto d-flex fs-sm'>
                  <div className='text-mode pe-3'>
                    <i className='fi-heart'></i> 25
                  </div>
                  <div className='text-mode'>
                    <i className='fi-eye'></i> 25k
                  </div>
                </div> */}
              </div>
              <div className='border border-gray-300 p-3 rounded-3 mt-3'>
                <p className='mb-23 pb-3 border-bottom border-gray-300'>
                  SALE ENDS AT
                  <span className='text-mode fw-500'> December 25, 2023</span>
                </p>
                {isRented && (
                  <div className='pt-2'>
                    <label className='pb-2'>RENTED PROPERTY </label>
                    <div className='d-flex align-items-center'>
                      <span className='h4 m-0 pe-3'>
                        {/* <i className="cf cf-cash"></i> */}
                        Receives rent every end of the month
                      </span>
                      {/* <span>$65.00</span> */}
                    </div>
                  </div>
                )}
                <div className='pt-2'>
                  <label className='pb-2'>FIXED PRICE</label>
                  <div className='d-flex align-items-center'>
                    <span className='h4 m-0 pe-3'>
                      <i className='cf cf-eth'></i>{" "}
                      {collection?.unitPrice
                        ? ethValue(collection?.unitPrice)
                        : 0}
                    </span>
                    {/* <span>$65.00</span> */}
                  </div>
                </div>

                <div className='pt-3'>
                  {tokenOwner != "" && tokenOwner != userAddress ? (
                    instantBuy ? (
                      <a
                        className='btn btn-lg btn-gradient w-100'
                        href='#'
                        onClick={(e) => buyNFT()}>
                        <i className='bi-cart'></i> Buy
                      </a>
                    ) : (
                      <>
                        <input
                          type='text'
                          placeholder='Enter amount'
                          className='border p-2 mb-4 rounded-0 shadow-none form-control form-control-sm flex-full'
                          onInput={(e) => setOfferAmount(e.currentTarget.value)}
                        />
                        <a
                          className='btn btn-lg btn-gradient w-100'
                          href='#'
                          onClick={(e) => makeOffer()}>
                          <i className='bi-tags'></i> Make offer
                        </a>
                      </>
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className='accordion-style-01 mt-3'>
                <div className='accordion' id='explor_details'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='ex_de_heading_01'>
                      <button
                        className={`accordion-button ${
                          activeoffer ? "" : "collapsed"
                        }`}
                        onClick={() => setActiveOffer(!activeoffer)}
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#ex_de_01'
                        aria-expanded='true'
                        aria-controls='ex_de_01'>
                        <i className='bi-tags'></i> Offers
                      </button>
                    </h2>
                    <div
                      id='ex_de_01'
                      className={`accordion-collapse collapse ${
                        activeoffer ? "show" : ""
                      }`}
                      // className="accordion-collapse collapse show"
                      aria-labelledby='ex_de_heading_01'
                      data-bs-parent='#explor_details'>
                      <div className='accordion-body'>
                        <div className='border-bottom border-gray-200 pb-2 mb-2 d-flex'>
                          <div className='avatar'>
                            <img
                              className='avatar-img rounded-circle'
                              src='/assets/img/avatar-1.jpg'
                              title=''
                              alt=''
                            />
                          </div>
                          <div className='ps-2 col'>
                            <div className='d-flex pb-1 align-items-center'>
                              <h6 className='m-0 fw-500'>
                                <i className='cf cf-eth text-primary'></i>{" "}
                                0.0285
                              </h6>
                              <span className='ps-2'>63% below floor</span>
                            </div>
                            <span className='fs-sm'>
                              By
                              <a className='text-mode opacity-80' href='#'>
                                @tarzan75
                              </a>
                              Expiry: in 7 minutes
                            </span>
                          </div>
                        </div>
                        <div className='border-bottom border-gray-200 pb-2 mb-2 d-flex'>
                          <div className='avatar'>
                            <img
                              className='avatar-img rounded-circle'
                              src='/assets/img/avatar-2.jpg'
                              title=''
                              alt=''
                            />
                          </div>
                          <div className='ps-2 col'>
                            <div className='d-flex pb-1 align-items-center'>
                              <h6 className='m-0 fw-500'>
                                <i className='cf cf-eth text-primary'></i>{" "}
                                0.0277
                              </h6>
                              <span className='ps-2'>63% below floor</span>
                            </div>
                            <span className='fs-sm'>
                              By
                              <a className='text-mode opacity-80' href='#'>
                                @tarzan75
                              </a>
                              Expiry: in 19 minutes
                            </span>
                          </div>
                        </div>
                        <div className='border-bottom border-gray-200 pb-2 mb-2 d-flex'>
                          <div className='avatar'>
                            <img
                              className='avatar-img rounded-circle'
                              src='/assets/img/avatar-3.jpg'
                              title=''
                              alt=''
                            />
                          </div>
                          <div className='ps-2 col'>
                            <div className='d-flex pb-1 align-items-center'>
                              <h6 className='m-0 fw-500'>
                                <i className='cf cf-eth text-primary'></i>{" "}
                                0.0177
                              </h6>
                              <span className='ps-2'>63% below floor</span>
                            </div>
                            <span className='fs-sm'>
                              By
                              <a className='text-mode opacity-80' href='#'>
                                @tarzan75
                              </a>
                              Expiry: in 7 minutes
                            </span>
                          </div>
                        </div>
                        <div className='border-bottom border-gray-200 pb-2 mb-2 d-flex'>
                          <div className='avatar'>
                            <img
                              className='avatar-img rounded-circle'
                              src='/assets/img/avatar-4.jpg'
                              title=''
                              alt=''
                            />
                          </div>
                          <div className='ps-2 col'>
                            <div className='d-flex pb-1 align-items-center'>
                              <h6 className='m-0 fw-500'>
                                <i className='cf cf-eth text-primary'></i>{" "}
                                0.0977
                              </h6>
                              <span className='ps-2'>63% below floor</span>
                            </div>
                            <span className='fs-sm'>
                              By
                              <a className='text-mode opacity-80' href='#'>
                                @tarzan75
                              </a>
                              Expiry: in 25 days
                            </span>
                          </div>
                        </div>
                        <div className='border-bottom border-gray-200 pb-2 mb-2 d-flex'>
                          <div className='avatar'>
                            <img
                              className='avatar-img rounded-circle'
                              src='/assets/img/avatar-5.jpg'
                              title=''
                              alt=''
                            />
                          </div>
                          <div className='ps-2 col'>
                            <div className='d-flex pb-1 align-items-center'>
                              <h6 className='m-0 fw-500'>
                                <i className='cf cf-eth text-primary'></i>{" "}
                                0.0877
                              </h6>
                              <span className='ps-2'>63% below floor</span>
                            </div>
                            <span className='fs-sm'>
                              By
                              <a className='text-mode opacity-80' href='#'>
                                @tarzan75
                              </a>
                              Expiry: in 7 minutes
                            </span>
                          </div>
                        </div>
                        <div className='text-center'>
                          <a
                            className='btn btn-sm rounded-pill btn-border-mode'
                            href='#'>
                            Load More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="ex_de_heading_02">
                      <button
                        className={`accordion-button ${
                          activeproperties ? "" : "collapsed"
                        }`}
                        onClick={() => setActiveProperties(!activeproperties)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ex_de_02"
                        aria-expanded="false"
                        aria-controls="ex_de_02"
                      >
                        <i className="bi-list-ul"></i> Properties
                      </button>
                    </h2>
                    <div
                      id="ex_de_02"
                      className={`accordion-collapse collapse ${
                        activeproperties ? "show" : ""
                      }`}
                      aria-labelledby="ex_de_heading_02"
                      data-bs-parent="#explor_details"
                    >
                      <div className="accordion-body">
                        <div className="row g-2">
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Block
                              </h6>
                              <div className="text-mode m-0 lh-sm">Data</div>
                              <span className="small d-flex pt-1">
                                1.8% rarity
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Generation
                              </h6>
                              <div className="text-mode m-0 lh-sm">Genesis</div>
                              <span className="small d-flex pt-1">
                                0.6% rarity
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Series
                              </h6>
                              <div className="text-mode m-0 lh-sm">Maroon</div>
                              <span className="small d-flex pt-1">
                                0.6% rarity
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Block
                              </h6>
                              <div className="text-mode m-0 lh-sm">Data</div>
                              <span className="small d-flex pt-1">
                                1% trait
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Tier
                              </h6>
                              <div className="text-mode m-0 lh-sm">
                                Pnk Undrwarld Wingz
                              </div>
                              <span className="small d-flex pt-1">
                                0.6% rarity
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Generation
                              </h6>
                              <div className="text-mode m-0 lh-sm">Genesis</div>
                              <span className="small d-flex pt-1">
                                0.6% rarity
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">Fur</h6>
                              <div className="text-mode m-0 lh-sm">Maroon</div>
                              <span className="small d-flex pt-1">
                                15% trait
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Series
                              </h6>
                              <div className="text-mode m-0 lh-sm">
                                Series One
                              </div>
                              <span className="small d-flex pt-1">
                                0.6% rarity
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Tier
                              </h6>
                              <div className="text-mode m-0 lh-sm">
                                Pnk Undrwarld Wingz
                              </div>
                              <span className="small d-flex pt-1">
                                0.6% rarity
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
                              href="#"
                            >
                              <h6 className="text-secondary mb-1 small">
                                Glasses
                              </h6>
                              <div className="text-mode m-0 lh-sm">
                                Violet Goggles
                              </div>
                              <span className="small d-flex pt-1">
                                2% have this trait
                                <span className="ms-auto">
                                  <i className="cf cf-eth"></i> 0.007
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='ex_de_heading_03'>
                      <button
                        className={`accordion-button ${
                          activecolldetails ? "" : "collapsed"
                        }`}
                        onClick={() => setActiveCollDetails(!activecolldetails)}
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#ex_de_03'
                        aria-expanded='false'
                        aria-controls=' ex_de_03'>
                        <i className='bi-text-paragraph'></i> Collection Details
                      </button>
                    </h2>
                    <div
                      id='ex_de_03'
                      className={`accordion-collapse collapse ${
                        activecolldetails ? "show" : ""
                      }`}
                      aria-labelledby='ex_de_heading_03'
                      data-bs-parent='#explor_details'>
                      <div className='accordion-body'>
                        <div className='d-flex align-items-center mb-4'>
                          <div className='avatar'>
                            <img
                              className='avatar-img rounded-circle'
                              src={ipfsTohttp(collection?.tokenURI)}
                              title=''
                              alt=''
                            />
                          </div>
                          <div className='col ps-3'>
                            <h6 className='m-0 pb-1'>
                              {collection?.name}
                              <i className='bi-patch-check-fill text-primary ms-2'></i>
                            </h6>
                            <span className='text-opacity-85 fw-600 fs-sm d-block pb-1'>
                              {ellipsify(collection?.address || "", 20)}
                              <i className='bi bi-box-arrow-up-right'></i>
                            </span>
                          </div>
                          <div>
                            <a
                              className='btn btn-border-mode icon-md rounded-circle p-3'
                              href=''>
                              <i className='bi-globe'></i>
                            </a>
                          </div>
                        </div>
                        <div className='row gx-2'>
                          <div className='col-4 position-relative pe-4'>
                            <span>Items</span>
                            <h6 className='fw-400 m-0'>100</h6>
                            <div className='vr position-absolute top-0 bottom-0 end-0 me-4'></div>
                          </div>
                          <div className='col-4 position-relative pe-4'>
                            <span>Owners</span>
                            <h6 className='fw-400 m-0'>{tokenHolders}</h6>
                            <div className='vr position-absolute top-0 bottom-0 end-0 me-4'></div>
                          </div>
                          {/* <div className="col-4 position-relative pe-4">
                            <span>VOL</span>
                            <h6 className="fw-400 m-0">96.27 ETH</h6>
                          </div> */}
                        </div>
                        <div className='row gx-2 pt-4'>
                          <div className='col-4 position-relative pe-4'>
                            <span>Floor</span>
                            <h6 className='fw-400 m-0'>
                              {collection?.unitPrice
                                ? ethValue(collection?.unitPrice)
                                : 0}{" "}
                              ETH
                            </h6>
                            <div className='vr position-absolute top-0 bottom-0 end-0 me-4'></div>
                          </div>
                          {/* <div className="col-4 position-relative pe-4">
														<span>ROYALTY</span>
														<h6 className="fw-400 m-0">5%</h6>
														<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
													</div> */}
                        </div>
                        <div className='pt-4'>
                          <a className='btn btn-sm btn-border-mode' href='#'>
                            Make a Collection Offer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='ex_de_heading_04'>
                      <button
                        className={`accordion-button ${
                          activetokendetails ? "" : "collapsed"
                        }`}
                        onClick={() =>
                          setActiveTokenDetails(!activetokendetails)
                        }
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#ex_de_04'
                        aria-expanded='false'
                        aria-controls='ex_de_04'>
                        <i className='bi-info-circle'></i> Token Details
                      </button>
                    </h2>
                    <div
                      id='ex_de_04'
                      className={`accordion-collapse collapse ${
                        activetokendetails ? "show" : ""
                      }`}
                      aria-labelledby='ex_de_heading_04'
                      data-bs-parent='#explor_details'>
                      <div className='accordion-body'>
                        <div className='row mb-2'>
                          <div className='col-7'>
                            <h6 className='m-0 fw-400'>Contract Address</h6>
                          </div>
                          <div className='col-5 text-end'>
                            <a href='#'>
                              {ellipsify(collection?.address || "", 10)}
                            </a>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <div className='col-7'>
                            <h6 className='m-0 fw-400'>Token ID</h6>
                          </div>
                          <div className='col-5 text-end'>
                            <a href='#'>{tokenId}</a>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <div className='col-7'>
                            <h6 className='m-0 fw-400'>Token Standard</h6>
                          </div>
                          <div className='col-5 text-end'>
                            <span>ERC-721</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <div className='col-7'>
                            <h6 className='m-0 fw-400'>Chain</h6>
                          </div>
                          <div className='col-5 text-end'>
                            <span>Aurora Testnet</span>
                          </div>
                        </div>
                        <div className='row mb-2'>
                          <div className='col-7'>
                            <h6 className='m-0 fw-400'>Creator Fee</h6>
                          </div>
                          <div className='col-5 text-end'>
                            <span>5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                     
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                     
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SingleCollectionToken;
