/** @format */

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// export default SingleCollection;
import { ethers } from "ethers";
import { getSingleCollection } from "../../services/collectionsServices";
import { ellipsify } from "../../components/ellipsify";
import houseNFTABI from "../../../nft_abi.json";
// import Accordion from "react-bootstrap/Accordion";

function SingleCollection() {
  const params = useParams();
  const { address } = params;
  const [collection, setCollection] = useState<any>(null);
  const [tokenHolders, setTokenHolders] = useState("---");

  async function getUniqueOwners(contractAddress: string, tokenIdRange: any) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const contract = new ethers.Contract(
        contractAddress,
        houseNFTABI,
        provider
      );

      //   const owners = new Set();
      let ownerArr = [];
      for (let i = tokenIdRange.start; i <= tokenIdRange.end; i++) {
        const tokenId = i.toString();

        ownerArr.push(contract.ownerOf(tokenId));
        // console.log(tokenId)
      }
      let holders = await Promise.all(ownerArr);
      //   console.log(holders);
      const owners = new Set(holders);

      const uniqueOwners = Array.from(owners);
      return uniqueOwners;
    } catch (error) {
      console.error("Error occurred while fetching unique owners:", error);
    }
  }

  useEffect(() => {
    const getCollection = async () => {
      const response = await getSingleCollection(address);
      setCollection(response?.data?.data);
    };

    getCollection();
  }, [collection]);

  useEffect(() => {
    getUniqueOwners(address as string, { start: 0, end: 99 })
      .then((owners) => {
        console.log(owners);
        setTokenHolders(owners.length);
      })
      .catch((e) => console.log(`Error while fetching owners ${e.message}`));
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
        className="section bg-cover h-px-150px bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/assets/img/ai-img-7.png)" }}
      ></div>

      <section className="pb-3 mt-10">
        <div className="container mt-n10">
          <div className="avatar avatar-xxl mb-4">
            <img
              src={ipfsTohttp(collection?.tokenURI)}
              title=""
              alt=""
              className="border border-3 border-gray-400 rounded-3"
            />
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="d-flex h3 mb-2">
                {collection?.name}{" "}
                <i className="bi-patch-check-fill text-primary ms-2"></i>{" "}
              </div>
              <div className="fs-sm pb-2">By {collection?.name} Deployer </div>
              <p className="d-flex align-items-center fs-sm">
                Created Jan 2023 <span className="vr mx-2 my-1"></span>Chain
                Aurora Testnet
              </p>
              <p className="fs-sm">
                {collection?.name} is a RealEstate NFT project with 100 tokens.
              </p>
              <div className="row g-3 gx-md-5 gx-lg-6">
                <div className="col-4 col-sm-3 col-md-auto position-relative">
                  <span className="fs-xs">Items</span>
                  <h6 className="fw-400 m-0">100</h6>
                  <div className="vr position-absolute top-0 bottom-0 end-0"></div>
                </div>
                <div className="col-4 col-sm-3 col-md-auto position-relative">
                  <span className="fs-xs">Owners</span>
                  <h6 className="fw-400 m-0">{tokenHolders}</h6>
                  <div className="vr position-absolute top-0 bottom-0 end-0"></div>
                </div>
                <div className="col-4 col-sm-3 col-md-auto position-relative">
                  <span className="fs-xs">VOL</span>
                  <h6 className="fw-400 m-0">96.27 ETH</h6>
                  <div className="vr position-absolute top-0 bottom-0 end-0"></div>
                </div>
                <div className="col-4 col-sm-3 col-md-auto position-relative">
                  <span className="fs-xs">Floor</span>
                  <h6 className="fw-400 m-0">
                    {" "}
                    {collection?.unitPrice
                      ? ethValue(collection?.unitPrice)
                      : 0}
                    ETH
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nav justify-content-md-end">
                <a
                  data-bs-toggle="tooltip"
                  data-bs-original-title="wishlist"
                  className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
                  href="#"
                >
                  <i className="fi-heart"></i>
                </a>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-original-title="Share"
                  className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
                  href="#"
                >
                  <i className="fi-share"></i>
                </a>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-original-title="Refresh"
                  className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
                  href="#"
                >
                  <i className="bi-arrow-repeat"></i>
                </a>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-original-title="Report"
                  className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
                  href="#"
                >
                  <i className="bi-flag"></i>
                </a>
              </div>
            </div>
          </div>
          <ul className="list-menu-02 mt-5 fs-lg">
            <li>
              <a href="#">Items</a>
            </li>
            <li>
              <a className="active" href="#">
                Activity
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-6 pt-3">
        <div className="container">
          <ul className="list-menu-01 pb-4">
            <li>
              <a className="btn btn-border-mode rounded-pill active" href="#">
                All Categories
              </a>
            </li>
            <li>
              <a className="btn btn-border-mode rounded-pill" href="#">
                Art
              </a>
            </li>
            <li>
              <a className="btn btn-border-mode rounded-pill" href="#">
                Game
              </a>
            </li>
            <li>
              <a className="btn btn-border-mode rounded-pill" href="#">
                Virtual Worlds
              </a>
            </li>
            <li>
              <a className="btn btn-border-mode rounded-pill" href="#">
                Photography
              </a>
            </li>
          </ul>
          {new Array(100).fill(0).map((_, index) => (
            // <div>index</div>
            <div className="activity-table rounded-3 mb-8" key={index}>
              <Link
                to={`/collections/${address}/${index}`}
                style={{ textDecoration: "none" }}
              >
                <div className="row activity-row g-0">
                  <div className="col-7 col-sm-4 p-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src={ipfsTohttp(collection?.tokenURI)}
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="col ps-3">
                        <h6 className="m-0">{collection?.name}</h6>
                        <span>#{index}</span>
                        {/* <span>{ellipsify(collection?.address || "", 20)}</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-5 col-sm-8 p-3">
                    <div className="d-flex">
                      <div className="col">
                        <h6 className="m-0">
                          <i className="cf cf-etc fw-400 pe-1"></i>{" "}
                          {collection?.unitPrice
                            ? ethValue(collection?.unitPrice)
                            : 0}
                        </h6>
                        <span className="fs-xs w-100">0% &lt; floor</span>{" "}
                      </div>{" "}
                      <div className="col d-none d-md-flex flex-column">
                        <span>
                          Rented
                          <a className="h6 m-0" href="#"></a>
                        </span>
                        <span>{collection?.isRented ? "Yes" : "No"}</span>
                      </div>
                      <div className="col d-none d-md-flex flex-column">
                        <span>Updated Time Frame</span>
                        <span>
                          {new Date(collection?.updated_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* <div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-2.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-3.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-4.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-5.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-6.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-7.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-8.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-9.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-10.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-11.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-1.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-2.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row activity-row g-0">
							<div className="col-7 col-sm-4 p-3">
								<div className="d-flex align-items-center">
									<div className="avatar-sm">
										<img
											className="avatar-img rounded-circle"
											src="/assets/img/avatar-3.jpg"
											title=""
											alt=""
										/>
									</div>
									<div className="col ps-3">
										<h6 className="m-0">Wiggles-V</h6>
										<span>@0xe4e_bfed</span>
									</div>
								</div>
							</div>
							<div className="col-5 col-sm-8 p-3">
								<div className="d-flex">
									<div className="col">
										<h6 className="m-0">
											<i className="cf cf-etc fw-400 pe-1"></i> 0.1548
										</h6>
										<span className="fs-xs w-100">55% &lt; floor</span>{" "}
									</div>{" "}
									<div className="col d-none d-md-flex flex-column">
										<span>
											From{" "}
											<a className="h6 m-0" href="#">
												@jungle04
											</a>
										</span>
										<span>2,499 items</span>
									</div>
									<div className="col d-none d-md-flex flex-column">
										<span>6m ago</span>
										<span>Expiry: 27m</span>
									</div>
								</div>
							</div>
						</div> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SingleCollection;
