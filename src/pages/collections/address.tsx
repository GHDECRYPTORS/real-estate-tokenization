

// export default SingleCollection;
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";
// function SingleCollection() {
// 	const [activeoffer, setActiveOffer] = useState(false);
// 	const [activeproperties, setActiveProperties] = useState(false);
// 	const [activecolldetails, setActiveCollDetails] = useState(false);
// 	const [activetokendetails, setActiveTokenDetails] = useState(false);
// 	const params = useParams();
// 	const { address } = params;
// 	return (
// 		<main className="mt-8">
// 			<div className="position-fixed top-0 bottom-0 start-0 end-0 pe-none bg-effect">
// 				<div className="bg-ef-1"></div>
// 				<div className="bg-ef-2"></div>
// 				<div className="bg-ef-3"></div>
// 				<div className="bg-ef-4"></div>
// 			</div>

// 			<section className="section pt-6">
// 				<div className="container position-relative">
// 					<div className="row gy-5 align-items-start">
// 						<div className="col-lg-7 col-xxl-8 pe-lg-5 pe-xl-8 sticky-lg-top">
// 							<img
// 								className="rounded-3 w-100"
// 								src="/assets/img/product-5.jpg"
// 								title=""
// 								alt=""
// 							/>
// 							<div className="d-flex align-items-center justify-content-center mt-4">
// 								<div className="border border-gray-300 rounded-3 d-flex p-3">
// 									<a
// 										data-bs-toggle="tooltip"
// 										data-bs-original-title="wishlist"
// 										className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
// 										href="#">
// 										<i className="fi-heart"></i>
// 									</a>
// 									<a
// 										data-bs-toggle="tooltip"
// 										data-bs-original-title="Share"
// 										className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
// 										href="#">
// 										<i className="fi-share"></i>
// 									</a>
// 									<a
// 										data-bs-toggle="tooltip"
// 										data-bs-original-title="Refresh"
// 										className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
// 										href="#">
// 										<i className="bi-arrow-repeat"></i>
// 									</a>
// 									<a
// 										data-bs-toggle="tooltip"
// 										data-bs-original-title="Report"
// 										className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
// 										href="#">
// 										<i className="bi-flag"></i>
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="col-lg-5 col-xxl-4">
// 							<div className="d-flex fs-sm pb-2">
// 								PLUR Official
// 								<i className="bi-patch-check-fill text-primary ms-2"></i>
// 							</div>
// 							<h1>Plur #6791</h1>
// 							<div className="d-flex pt-2">
// 								<div>
// 									<Link to="/collections/1">
// 										<span>Owned by</span> <a href="#">PLURDeployer</a>
// 									</Link>
// 								</div>
// 								<div className="ms-auto d-flex fs-sm">
// 									<div className="text-mode pe-3">
// 										<i className="fi-heart"></i> 25
// 									</div>
// 									<div className="text-mode">
// 										<i className="fi-eye"></i> 25k
// 									</div>
// 								</div>
// 							</div>
// 							<div className="border border-gray-300 p-3 rounded-3 mt-3">
// 								<p className="mb-23 pb-3 border-bottom border-gray-300">
// 									SALE ENDS AT
// 									<span className="text-mode fw-500">December 25, 2023</span>
// 								</p>
// 								<div className="pt-2">
// 									<label className="pb-2">FIXED PRICE</label>
// 									<div className="d-flex align-items-center">
// 										<span className="h4 m-0 pe-3">
// 											<i className="cf cf-eth"></i> 0.044
// 										</span>
// 										<span>$65.00</span>
// 									</div>
// 								</div>
// 								<div className="pt-3">
// 									<a className="btn btn-lg btn-gradient w-100" href="#">
// 										<i className="bi-tags"></i> Make offer
// 									</a>
// 								</div>
// 							</div>
// 							<div className="accordion-style-01 mt-3">
// 								<div className="accordion" id="explor_details">
// 									<div className="accordion-item">
// 										<h2 className="accordion-header" id="ex_de_heading_01">
// 											<button
// 												className={`accordion-button ${
// 													activeoffer ? "" : "collapsed"
// 												}`}
// 												onClick={() => setActiveOffer(!activeoffer)}
// 												type="button"
// 												data-bs-toggle="collapse"
// 												data-bs-target="#ex_de_01"
// 												aria-expanded="true"
// 												aria-controls="ex_de_01">
// 												<i className="bi-tags"></i> Offers
// 											</button>
// 										</h2>
// 										<div
// 											id="ex_de_01"
// 											className={`accordion-collapse collapse ${
// 												activeoffer ? "show" : ""
// 											}`}
// 											// className="accordion-collapse collapse show"
// 											aria-labelledby="ex_de_heading_01"
// 											data-bs-parent="#explor_details">
// 											<div className="accordion-body">
// 												<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
// 													<div className="avatar">
// 														<img
// 															className="avatar-img rounded-circle"
// 															src="/assets/img/avatar-1.jpg"
// 															title=""
// 															alt=""
// 														/>
// 													</div>
// 													<div className="ps-2 col">
// 														<div className="d-flex pb-1 align-items-center">
// 															<h6 className="m-0 fw-500">
// 																<i className="cf cf-eth text-primary"></i>{" "}
// 																0.0285
// 															</h6>
// 															<span className="ps-2">63% below floor</span>
// 														</div>
// 														<span className="fs-sm">
// 															By
// 															<a className="text-mode opacity-80" href="#">
// 																@tarzan75
// 															</a>
// 															Expiry: in 7 minutes
// 														</span>
// 													</div>
// 												</div>
// 												<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
// 													<div className="avatar">
// 														<img
// 															className="avatar-img rounded-circle"
// 															src="/assets/img/avatar-2.jpg"
// 															title=""
// 															alt=""
// 														/>
// 													</div>
// 													<div className="ps-2 col">
// 														<div className="d-flex pb-1 align-items-center">
// 															<h6 className="m-0 fw-500">
// 																<i className="cf cf-eth text-primary"></i>{" "}
// 																0.0277
// 															</h6>
// 															<span className="ps-2">63% below floor</span>
// 														</div>
// 														<span className="fs-sm">
// 															By
// 															<a className="text-mode opacity-80" href="#">
// 																@tarzan75
// 															</a>
// 															Expiry: in 19 minutes
// 														</span>
// 													</div>
// 												</div>
// 												<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
// 													<div className="avatar">
// 														<img
// 															className="avatar-img rounded-circle"
// 															src="/assets/img/avatar-3.jpg"
// 															title=""
// 															alt=""
// 														/>
// 													</div>
// 													<div className="ps-2 col">
// 														<div className="d-flex pb-1 align-items-center">
// 															<h6 className="m-0 fw-500">
// 																<i className="cf cf-eth text-primary"></i>{" "}
// 																0.0177
// 															</h6>
// 															<span className="ps-2">63% below floor</span>
// 														</div>
// 														<span className="fs-sm">
// 															By
// 															<a className="text-mode opacity-80" href="#">
// 																@tarzan75
// 															</a>
// 															Expiry: in 7 minutes
// 														</span>
// 													</div>
// 												</div>
// 												<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
// 													<div className="avatar">
// 														<img
// 															className="avatar-img rounded-circle"
// 															src="/assets/img/avatar-4.jpg"
// 															title=""
// 															alt=""
// 														/>
// 													</div>
// 													<div className="ps-2 col">
// 														<div className="d-flex pb-1 align-items-center">
// 															<h6 className="m-0 fw-500">
// 																<i className="cf cf-eth text-primary"></i>{" "}
// 																0.0977
// 															</h6>
// 															<span className="ps-2">63% below floor</span>
// 														</div>
// 														<span className="fs-sm">
// 															By
// 															<a className="text-mode opacity-80" href="#">
// 																@tarzan75
// 															</a>
// 															Expiry: in 25 days
// 														</span>
// 													</div>
// 												</div>
// 												<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
// 													<div className="avatar">
// 														<img
// 															className="avatar-img rounded-circle"
// 															src="/assets/img/avatar-5.jpg"
// 															title=""
// 															alt=""
// 														/>
// 													</div>
// 													<div className="ps-2 col">
// 														<div className="d-flex pb-1 align-items-center">
// 															<h6 className="m-0 fw-500">
// 																<i className="cf cf-eth text-primary"></i>{" "}
// 																0.0877
// 															</h6>
// 															<span className="ps-2">63% below floor</span>
// 														</div>
// 														<span className="fs-sm">
// 															By
// 															<a className="text-mode opacity-80" href="#">
// 																@tarzan75
// 															</a>
// 															Expiry: in 7 minutes
// 														</span>
// 													</div>
// 												</div>
// 												<div className="text-center">
// 													<a
// 														className="btn btn-sm rounded-pill btn-border-mode"
// 														href="#">
// 														Load More
// 													</a>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="accordion-item">
// 										<h2 className="accordion-header" id="ex_de_heading_02">
// 											<button
// 												className={`accordion-button ${
// 													activeproperties ? "" : "collapsed"
// 												}`}
// 												onClick={() => setActiveProperties(!activeproperties)}
// 												type="button"
// 												data-bs-toggle="collapse"
// 												data-bs-target="#ex_de_02"
// 												aria-expanded="false"
// 												aria-controls="ex_de_02">
// 												<i className="bi-list-ul"></i> Properties
// 											</button>
// 										</h2>
// 										<div
// 											id="ex_de_02"
// 											className={`accordion-collapse collapse ${
// 												activeproperties ? "show" : ""
// 											}`}
// 											aria-labelledby="ex_de_heading_02"
// 											data-bs-parent="#explor_details">
// 											<div className="accordion-body">
// 												<div className="row g-2">
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Block
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">Data</div>
// 															<span className="small d-flex pt-1">
// 																1.8% rarity
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Generation
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">Genesis</div>
// 															<span className="small d-flex pt-1">
// 																0.6% rarity
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Series
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">Maroon</div>
// 															<span className="small d-flex pt-1">
// 																0.6% rarity
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Block
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">Data</div>
// 															<span className="small d-flex pt-1">
// 																1% trait
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Tier
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">
// 																Pnk Undrwarld Wingz
// 															</div>
// 															<span className="small d-flex pt-1">
// 																0.6% rarity
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Generation
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">Genesis</div>
// 															<span className="small d-flex pt-1">
// 																0.6% rarity
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">Fur</h6>
// 															<div className="text-mode m-0 lh-sm">Maroon</div>
// 															<span className="small d-flex pt-1">
// 																15% trait
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Series
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">
// 																Series One
// 															</div>
// 															<span className="small d-flex pt-1">
// 																0.6% rarity
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Tier
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">
// 																Pnk Undrwarld Wingz
// 															</div>
// 															<span className="small d-flex pt-1">
// 																0.6% rarity
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 													<div className="col-6">
// 														<a
// 															className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
// 															href="#">
// 															<h6 className="text-secondary mb-1 small">
// 																Glasses
// 															</h6>
// 															<div className="text-mode m-0 lh-sm">
// 																Violet Goggles
// 															</div>
// 															<span className="small d-flex pt-1">
// 																2% have this trait
// 																<span className="ms-auto">
// 																	<i className="cf cf-eth"></i> 0.007
// 																</span>
// 															</span>
// 														</a>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="accordion-item">
// 										<h2 className="accordion-header" id="ex_de_heading_03">
// 											<button
// 												className={`accordion-button ${
// 													activecolldetails ? "" : "collapsed"
// 												}`}
// 												onClick={() => setActiveCollDetails(!activecolldetails)}
// 												type="button"
// 												data-bs-toggle="collapse"
// 												data-bs-target="#ex_de_03"
// 												aria-expanded="false"
// 												aria-controls=" ex_de_03">
// 												<i className="bi-text-paragraph"></i> Collection Details
// 											</button>
// 										</h2>
// 										<div
// 											id="ex_de_03"
// 											className={`accordion-collapse collapse ${
// 												activecolldetails ? "show" : ""
// 											}`}
// 											aria-labelledby="ex_de_heading_03"
// 											data-bs-parent="#explor_details">
// 											<div className="accordion-body">
// 												<div className="d-flex align-items-center mb-4">
// 													<div className="avatar">
// 														<img
// 															className="avatar-img rounded-circle"
// 															src="/assets/img/avatar-1.jpg"
// 															title=""
// 															alt=""
// 														/>
// 													</div>
// 													<div className="col ps-3">
// 														<h6 className="m-0 pb-1">
// 															PLUR Official
// 															<i className="bi-patch-check-fill text-primary ms-2"></i>
// 														</h6>
// 														<span className="text-opacity-85 fw-600 fs-sm d-block pb-1">
// 															0x8e37…4941
// 															<i className="bi bi-box-arrow-up-right"></i>
// 														</span>
// 													</div>
// 													<div>
// 														<a
// 															className="btn btn-border-mode icon-md rounded-circle p-3"
// 															href="">
// 															<i className="bi-globe"></i>
// 														</a>
// 													</div>
// 												</div>
// 												<div className="row gx-2">
// 													<div className="col-4 position-relative pe-4">
// 														<span>Items</span>
// 														<h6 className="fw-400 m-0">8.59K</h6>
// 														<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
// 													</div>
// 													<div className="col-4 position-relative pe-4">
// 														<span>Owners</span>
// 														<h6 className="fw-400 m-0">2.39K</h6>
// 														<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
// 													</div>
// 													<div className="col-4 position-relative pe-4">
// 														<span>VOL</span>
// 														<h6 className="fw-400 m-0">96.27 Ξ</h6>
// 													</div>
// 												</div>
// 												<div className="row gx-2 pt-4">
// 													<div className="col-4 position-relative pe-4">
// 														<span>Floor</span>
// 														<h6 className="fw-400 m-0">0.0421 Ξ</h6>
// 														<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
// 													</div>
// 													<div className="col-4 position-relative pe-4">
// 														<span>ROYALTY</span>
// 														<h6 className="fw-400 m-0">5%</h6>
// 														<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
// 													</div>
// 												</div>
// 												<div className="pt-4">
// 													<a className="btn btn-sm btn-border-mode" href="#">
// 														Make a Collection Offer
// 													</a>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="accordion-item">
// 										<h2 className="accordion-header" id="ex_de_heading_04">
// 											<button
// 												className={`accordion-button ${
// 													activetokendetails ? "" : "collapsed"
// 												}`}
// 												onClick={() =>
// 													setActiveTokenDetails(!activetokendetails)
// 												}
// 												type="button"
// 												data-bs-toggle="collapse"
// 												data-bs-target="#ex_de_04"
// 												aria-expanded="false"
// 												aria-controls="ex_de_04">
// 												<i className="bi-info-circle"></i> Token Details
// 											</button>
// 										</h2>
// 										<div
// 											id="ex_de_04"
// 											className={`accordion-collapse collapse ${
// 												activetokendetails ? "show" : ""
// 											}`}
// 											aria-labelledby="ex_de_heading_04"
// 											data-bs-parent="#explor_details">
// 											<div className="accordion-body">
// 												<div className="row mb-2">
// 													<div className="col-7">
// 														<h6 className="m-0 fw-400">Contract Address</h6>
// 													</div>
// 													<div className="col-5 text-end">
// 														<a href="#">0x8e37...4941</a>
// 													</div>
// 												</div>
// 												<div className="row mb-2">
// 													<div className="col-7">
// 														<h6 className="m-0 fw-400">Token ID</h6>
// 													</div>
// 													<div className="col-5 text-end">
// 														<a href="#">6791</a>
// 													</div>
// 												</div>
// 												<div className="row mb-2">
// 													<div className="col-7">
// 														<h6 className="m-0 fw-400">Token Standard</h6>
// 													</div>
// 													<div className="col-5 text-end">
// 														<span>ERC-721</span>
// 													</div>
// 												</div>
// 												<div className="row mb-2">
// 													<div className="col-7">
// 														<h6 className="m-0 fw-400">Chain</h6>
// 													</div>
// 													<div className="col-5 text-end">
// 														<span>Ethereum</span>
// 													</div>
// 												</div>
// 												<div className="row mb-2">
// 													<div className="col-7">
// 														<h6 className="m-0 fw-400">Creator Fee</h6>
// 													</div>
// 													<div className="col-5 text-end">
// 														<span>5%</span>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>

// 							{/* <Accordion defaultActiveKey="0">
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header>Accordion Item #1</Accordion.Header>
//                     <Accordion.Body>
                     
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="1">
//                     <Accordion.Header>Accordion Item #2</Accordion.Header>
//                     <Accordion.Body>
                     
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion> */}
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</main>
// 	);
// }

// export default SingleCollection;
  



// import React from 'react'
// import Accordion from "react-bootstrap/Accordion";
function SingleCollection() {
		const params = useParams();
		const { address } = params;
	return (
		<main>
			<div
				className="section bg-cover h-px-150px bg-no-repeat bg-center"
				style={{ backgroundImage: "url(/assets/img/ai-img-7.png)" }}></div>

			<section className="pb-3 mt-10">
				<div className="container mt-n10">
					<div className="avatar avatar-xxl mb-4">
						<img
							src="/assets/img/avatar-3.jpg"
							title=""
							alt=""
							className="border border-3 border-gray-400 rounded-3"
						/>
					</div>
					<div className="row">
						<div className="col-md-8">
							<div className="d-flex h3 mb-2">
								PLUR Official{" "}
								<i className="bi-patch-check-fill text-primary ms-2"></i>{" "}
							</div>
							<div className="fs-sm pb-2">By PLUR Deployer </div>
							<p className="d-flex align-items-center fs-sm">
								Created Jan 2023 <span className="vr mx-2 my-1"></span>Chain
								Ethereum
							</p>
							<p className="fs-sm">
								Project PLUR is a 3D NFT project with 8585 tokens. Inspired by
								hip-hop culture, Peace Love Unity Respect, commonly shortened to
								PLUR. We hope to pass this spirit on to our community and become
								a spiritual force for us. The world needs a little noise, and
								here we are!
							</p>
							<div className="row g-3 gx-md-5 gx-lg-6">
								<div className="col-4 col-sm-3 col-md-auto position-relative">
									<span className="fs-xs">Items</span>
									<h6 className="fw-400 m-0">8.59K</h6>
									<div className="vr position-absolute top-0 bottom-0 end-0"></div>
								</div>
								<div className="col-4 col-sm-3 col-md-auto position-relative">
									<span className="fs-xs">Owners</span>
									<h6 className="fw-400 m-0">2.39K</h6>
									<div className="vr position-absolute top-0 bottom-0 end-0"></div>
								</div>
								<div className="col-4 col-sm-3 col-md-auto position-relative">
									<span className="fs-xs">VOL</span>
									<h6 className="fw-400 m-0">96.27 Ξ</h6>
									<div className="vr position-absolute top-0 bottom-0 end-0"></div>
								</div>
								<div className="col-4 col-sm-3 col-md-auto position-relative">
									<span className="fs-xs">Floor</span>
									<h6 className="fw-400 m-0">0.0421 Ξ</h6>
									<div className="vr position-absolute top-0 bottom-0 end-0"></div>
								</div>
								<div className="col-4 col-sm-3 col-md-auto position-relative">
									<span className="fs-xs">ROYALTY</span>
									<h6 className="fw-400 m-0">5%</h6>
									<div className="vr position-absolute top-0 bottom-0 end-0"></div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="nav justify-content-md-end">
								<a
									data-bs-toggle="tooltip"
									data-bs-original-title="wishlist"
									className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
									href="#">
									<i className="fi-heart"></i>
								</a>
								<a
									data-bs-toggle="tooltip"
									data-bs-original-title="Share"
									className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
									href="#">
									<i className="fi-share"></i>
								</a>
								<a
									data-bs-toggle="tooltip"
									data-bs-original-title="Refresh"
									className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
									href="#">
									<i className="bi-arrow-repeat"></i>
								</a>
								<a
									data-bs-toggle="tooltip"
									data-bs-original-title="Report"
									className="me-2 btn btn-border-mode p-0 icon-md rounded-3"
									href="#">
									<i className="bi-flag"></i>
								</a>
							</div>
						</div>
					</div>
					<ul className="list-menu-02 mt-5 fs-lg">
						<li>
							<a href="collections-details.html">Items</a>
						</li>
						<li>
							<a className="active" href="collections-details-activity.html">
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
					<div className="activity-table rounded-3">
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
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default SingleCollection;