/** @format */

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ellipsify } from "../components/ellipsify";
// export default MyTokens;
import { ethers } from "ethers";
import { getMyTokens } from "../services/collectionsServices";
// import getUniqueOwners from "../helpers/uniqueHolders";
import { useAccount } from "wagmi";

// import houseNFTABI from "../../../nft_abi.json";

// import Accordion from "react-bootstrap/Accordion";

function MyTokens() {
  const [collection, setCollection] = useState<any>(null);
  const [collections, setCollections] = useState<any[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [tokens, setTokens] = useState<any[]>([]);
  const { address } = useAccount();
  useEffect(() => {
    const getCollection = async () => {
      const response = await getMyTokens(address);
      setCollection(response?.data?.data);
    };

    getCollection();
  }, []);

  useEffect(() => {
    setTokens(
      collection?.filter(
        (item: any) => item.collection.name === selectedCollection
      )
    );
  }, [selectedCollection]);

  useEffect(() => {
    getMyTokens(address).then((response) => {
      setCollection(response?.data?.data);
      setCollections([
        ...new Set(
          response?.data?.data?.map((item: any) => item.collection.name)
        ),
      ]);
      if (collections.length > 0) {
        setSelectedCollection(collections[0]);
      }
    });
  }, []);

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
    <main>
      <div
        className='section bg-cover h-px-150px bg-no-repeat bg-center'
        style={{ backgroundImage: "url(/assets/img/ai-img-7.png)" }}></div>

      <section className='pb-3 mt-10'>
        <div className='container mt-n10'>
          <div className='avatar avatar-xxl mb-4'>
            <img
              src={ipfsTohttp(collection?.tokenURI)}
              title=''
              alt=''
              className='border border-3 border-gray-400 rounded-3'
            />
          </div>
          <div className='row'>
            <div className='col-md-8'>
              <div className='d-flex h3 mb-2'>
                {collection?.name}{" "}
                <i className='bi-patch-check-fill text-primary ms-2'></i>{" "}
              </div>
              <div className='fs-sm pb-2'>By {collection?.name} Deployer </div>
              <p className='d-flex align-items-center fs-sm'>
                Created Jan 2023 <span className='vr mx-2 my-1'></span>Chain
                Aurora Testnet
              </p>
              <p className='fs-sm'>
                {collection?.name} is a RealEstate NFT project with 100 tokens.
              </p>
              <div className='row g-3 gx-md-5 gx-lg-6'>
                <div className='col-4 col-sm-3 col-md-auto position-relative'>
                  <span className='fs-xs'>Items</span>
                  <h6 className='fw-400 m-0'>100</h6>
                  <div className='vr position-absolute top-0 bottom-0 end-0'></div>
                </div>
                <div className='col-4 col-sm-3 col-md-auto position-relative'>
                  <span className='fs-xs'>Owners</span>
                  {/* <h6 className='fw-400 m-0'>{tokenHolders}</h6> */}
                  <div className='vr position-absolute top-0 bottom-0 end-0'></div>
                </div>
                <div className='col-4 col-sm-3 col-md-auto position-relative'>
                  <span className='fs-xs'>VOL</span>
                  <h6 className='fw-400 m-0'>96.27 ETH</h6>
                  <div className='vr position-absolute top-0 bottom-0 end-0'></div>
                </div>
                <div className='col-4 col-sm-3 col-md-auto position-relative'>
                  <span className='fs-xs'>Floor</span>
                  <h6 className='fw-400 m-0'>
                    {" "}
                    {collection?.unitPrice
                      ? ethValue(collection?.unitPrice)
                      : 0}
                    ETH
                  </h6>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='nav justify-content-md-end'>
                <a
                  data-bs-toggle='tooltip'
                  data-bs-original-title='wishlist'
                  className='me-2 btn btn-border-mode p-0 icon-md rounded-3'
                  href='#'>
                  <i className='fi-heart'></i>
                </a>
                <a
                  data-bs-toggle='tooltip'
                  data-bs-original-title='Share'
                  className='me-2 btn btn-border-mode p-0 icon-md rounded-3'
                  href='#'>
                  <i className='fi-share'></i>
                </a>
                <a
                  data-bs-toggle='tooltip'
                  data-bs-original-title='Refresh'
                  className='me-2 btn btn-border-mode p-0 icon-md rounded-3'
                  href='#'>
                  <i className='bi-arrow-repeat'></i>
                </a>
                <a
                  data-bs-toggle='tooltip'
                  data-bs-original-title='Report'
                  className='me-2 btn btn-border-mode p-0 icon-md rounded-3'
                  href='#'>
                  <i className='bi-flag'></i>
                </a>
              </div>
            </div>
          </div>
          <ul className='list-menu-02 mt-5 fs-lg'>
            <li>
              <a href='#'>Items</a>
            </li>
            <li>
              <a className='active' href='#'>
                Activity
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className='pb-6 pt-3'>
        <div className='container'>
          <ul className='list-menu-01 pb-4'>
            {collections?.map((collection, index) => (
              <li key={index}>
                <a
                  href='#'
                  onClick={() => {
                    setSelectedCollection(collection);
                  }}>
                  {collection}
                </a>
              </li>
            ))}
          </ul>
          {tokens &&
            tokens.map((token, index) => (
              // <div>index</div>
              <div className='activity-table rounded-3' key={index}>
                <Link
                  to={`/collections/${token.tokenContract}/${token.tokenId}`}
                  style={{ textDecoration: "none" }}>
                  <div className='row activity-row g-0'>
                    <div className='col-7 col-sm-4 p-3'>
                      <div className='d-flex align-items-center'>
                        {/* <div className='avatar-sm'>
                          <img
                            className='avatar-img rounded-circle'
                            src={ipfsTohttp(collection?.tokenURI)}
                            title=''
                            alt=''
                          />
                        </div> */}
                        <div className='col ps-3'>
                          <h6 className='m-0'>{selectedCollection}</h6>
                          <span>
                            {ellipsify(token.collection?.address || "", 20)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-5 col-sm-8 p-3'>
                      <div className='d-flex'>
                        <div className='col'>
                          {/* <h6 className='m-0'>
                            <i className='cf cf-etc fw-400 pe-1'></i>{" "}
                            {token.collection?.unitPrice
                              ? ethValue(collection?.unitPrice)
                              : 0}
                          </h6> */}
                          {/* <span className='fs-xs w-100'>55% &lt; floor</span>{" "} */}
                        </div>{" "}
                        <div className='col d-none d-md-flex flex-column'>
                          <span>
                            Rented
                            <a className='h6 m-0' href='#'></a>
                          </span>
                          <span>
                            {token.collection?.isRented ? "Yes" : "No"}
                          </span>
                        </div>
                        {/* <div className='col d-none d-md-flex flex-column'>
                        <span>Updated Time Frame</span>
                        <span>
                          {new Date(collection?.updated_at).toLocaleString()}
                        </span>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default MyTokens;
