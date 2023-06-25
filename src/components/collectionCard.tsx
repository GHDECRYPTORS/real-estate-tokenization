/** @format */

// import React from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
function CollectionCard({ collection }: any) {
	const ipfsTohttp = (url: string) => {
		if (url == null) return "";
		url = url.trim();
		return url.startsWith("ipfs://")
			? `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`
			: url;
    };
    
    const ethvalue = ethers.utils.formatEther(collection?.unitPrice);
    const address = collection?.address;

	return (
		<div className="product-card">
			<div className="product-card-user">
				<div className="avatar-group">
					<div className="avatar avatar-xs">
						<a
							href="#"
							data-bs-toggle="tooltip"
							data-bs-original-title="Martin">
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
							data-bs-original-title="Larisa">
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
							data-bs-original-title="Nancy Drew">
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
							className="avatar-text rounded-circle bg-primary text-white">
							+ 5
						</a>
					</div>
				</div>
				<div className="dropdown ms-auto">
					<button
						className="bid-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<i className="bi bi-three-dots-vertical"></i>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li>
							<a className="dropdown-item" href="#">
								New bid
							</a>
						</li>
						<li>
							<Link className="dropdown-item" to="collections/1/1">
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
						src={ipfsTohttp(collection.tokenURI)}
						title=""
						alt=""
					/>
				</a>
				{/* <div className="product-card-timer">
					<ul
						className="countdown bg-dark bg-opacity-25 blur-md"
						data-countdown-date="12/30/2023 12:00:00">
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
				</div> */}
			</div>
			<div className="product-card-body">
				<div className="product-title d-flex align-items-center">
					<h6 className="m-0">
						<a className="text-reset stretched-linka" href="#">
							{collection.name}
							{""}({collection.symbol})
						</a>
					</h6>
					<button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
						<i className="avatar-text fi-heart"></i>
					</button>
				</div>
				<div className="product-actions text-center fs-sm">
					<div className="price align-middle lh-sm text-body fw-400">
						<span className="m-0">
							Price:{" "}
							{/* <span className="text-body fw-400 w-100 d-block">
								{ethvalue} ETH
							</span>{" "} */}
						</span>
					</div>
					<div className="price align-middle lh-sm fw-bold fs-6">
						{ethvalue} ETH
						{/* <span className="m-0">
							3.99 ETH{" "}
							<span className="text-body fw-400 w-100 d-block">1/1</span>{" "}
						</span> */}
					</div>
				</div>
				<div className="product-card-cart">
					<Link className="dropdown-item" to={`/collections/${address}`}>
						<a className="btn btn-primary w-100" href="#">
							View Now
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CollectionCard;
