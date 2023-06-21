import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";
function SingleCollectionToken() {
  const [activeoffer, setActiveOffer] = useState(false);
  const [activeproperties, setActiveProperties] = useState(false);
  const [activecolldetails, setActiveCollDetails] = useState(false);
  const [activetokendetails, setActiveTokenDetails] = useState(false);
    return (
			<main className="mt-8">
				<div className="position-fixed top-0 bottom-0 start-0 end-0 pe-none bg-effect">
					<div className="bg-ef-1"></div>
					<div className="bg-ef-2"></div>
					<div className="bg-ef-3"></div>
					<div className="bg-ef-4"></div>
				</div>

				<section className="section pt-6">
					<div className="container position-relative">
						<div className="row gy-5 align-items-start">
							<div className="col-lg-7 col-xxl-8 pe-lg-5 pe-xl-8 sticky-lg-top">
								<img
									className="rounded-3 w-100"
									src="/assets/img/product-5.jpg"
									title=""
									alt=""
								/>
								<div className="d-flex align-items-center justify-content-center mt-4">
									<div className="border border-gray-300 rounded-3 d-flex p-3">
										<a
											data-bs-toggle="tooltip"
											data-bs-original-title="wishlist"
											className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
											href="#">
											<i className="fi-heart"></i>
										</a>
										<a
											data-bs-toggle="tooltip"
											data-bs-original-title="Share"
											className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
											href="#">
											<i className="fi-share"></i>
										</a>
										<a
											data-bs-toggle="tooltip"
											data-bs-original-title="Refresh"
											className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
											href="#">
											<i className="bi-arrow-repeat"></i>
										</a>
										<a
											data-bs-toggle="tooltip"
											data-bs-original-title="Report"
											className="mx-1 btn btn-border-mode p-0 icon-md rounded-3"
											href="#">
											<i className="bi-flag"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-xxl-4">
								<div className="d-flex fs-sm pb-2">
									PLUR Official
									<i className="bi-patch-check-fill text-primary ms-2"></i>
								</div>
								<h1>Plur #6791</h1>
								<div className="d-flex pt-2">
									<div>
										<Link to="/collections/1">
											<span>Owned by</span> <a href="#">PLURDeployer</a>
										</Link>
									</div>
									<div className="ms-auto d-flex fs-sm">
										<div className="text-mode pe-3">
											<i className="fi-heart"></i> 25
										</div>
										<div className="text-mode">
											<i className="fi-eye"></i> 25k
										</div>
									</div>
								</div>
								<div className="border border-gray-300 p-3 rounded-3 mt-3">
									<p className="mb-23 pb-3 border-bottom border-gray-300">
										SALE ENDS AT
										<span className="text-mode fw-500">December 25, 2023</span>
									</p>
									<div className="pt-2">
										<label className="pb-2">FIXED PRICE</label>
										<div className="d-flex align-items-center">
											<span className="h4 m-0 pe-3">
												<i className="cf cf-eth"></i> 0.044
											</span>
											<span>$65.00</span>
										</div>
									</div>
									<div className="pt-3">
										<a className="btn btn-lg btn-gradient w-100" href="#">
											<i className="bi-tags"></i> Make offer
										</a>
									</div>
								</div>
								<div className="accordion-style-01 mt-3">
									<div className="accordion" id="explor_details">
										<div className="accordion-item">
											<h2 className="accordion-header" id="ex_de_heading_01">
												<button
													className={`accordion-button ${
														activeoffer ? "" : "collapsed"
													}`}
													onClick={() => setActiveOffer(!activeoffer)}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#ex_de_01"
													aria-expanded="true"
													aria-controls="ex_de_01">
													<i className="bi-tags"></i> Offers
												</button>
											</h2>
											<div
												id="ex_de_01"
												className={`accordion-collapse collapse ${
													activeoffer ? "show" : ""
												}`}
												// className="accordion-collapse collapse show"
												aria-labelledby="ex_de_heading_01"
												data-bs-parent="#explor_details">
												<div className="accordion-body">
													<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
														<div className="avatar">
															<img
																className="avatar-img rounded-circle"
																src="/assets/img/avatar-1.jpg"
																title=""
																alt=""
															/>
														</div>
														<div className="ps-2 col">
															<div className="d-flex pb-1 align-items-center">
																<h6 className="m-0 fw-500">
																	<i className="cf cf-eth text-primary"></i>{" "}
																	0.0285
																</h6>
																<span className="ps-2">63% below floor</span>
															</div>
															<span className="fs-sm">
																By
																<a className="text-mode opacity-80" href="#">
																	@tarzan75
																</a>
																Expiry: in 7 minutes
															</span>
														</div>
													</div>
													<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
														<div className="avatar">
															<img
																className="avatar-img rounded-circle"
																src="/assets/img/avatar-2.jpg"
																title=""
																alt=""
															/>
														</div>
														<div className="ps-2 col">
															<div className="d-flex pb-1 align-items-center">
																<h6 className="m-0 fw-500">
																	<i className="cf cf-eth text-primary"></i>{" "}
																	0.0277
																</h6>
																<span className="ps-2">63% below floor</span>
															</div>
															<span className="fs-sm">
																By
																<a className="text-mode opacity-80" href="#">
																	@tarzan75
																</a>
																Expiry: in 19 minutes
															</span>
														</div>
													</div>
													<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
														<div className="avatar">
															<img
																className="avatar-img rounded-circle"
																src="/assets/img/avatar-3.jpg"
																title=""
																alt=""
															/>
														</div>
														<div className="ps-2 col">
															<div className="d-flex pb-1 align-items-center">
																<h6 className="m-0 fw-500">
																	<i className="cf cf-eth text-primary"></i>{" "}
																	0.0177
																</h6>
																<span className="ps-2">63% below floor</span>
															</div>
															<span className="fs-sm">
																By
																<a className="text-mode opacity-80" href="#">
																	@tarzan75
																</a>
																Expiry: in 7 minutes
															</span>
														</div>
													</div>
													<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
														<div className="avatar">
															<img
																className="avatar-img rounded-circle"
																src="/assets/img/avatar-4.jpg"
																title=""
																alt=""
															/>
														</div>
														<div className="ps-2 col">
															<div className="d-flex pb-1 align-items-center">
																<h6 className="m-0 fw-500">
																	<i className="cf cf-eth text-primary"></i>{" "}
																	0.0977
																</h6>
																<span className="ps-2">63% below floor</span>
															</div>
															<span className="fs-sm">
																By
																<a className="text-mode opacity-80" href="#">
																	@tarzan75
																</a>
																Expiry: in 25 days
															</span>
														</div>
													</div>
													<div className="border-bottom border-gray-200 pb-2 mb-2 d-flex">
														<div className="avatar">
															<img
																className="avatar-img rounded-circle"
																src="/assets/img/avatar-5.jpg"
																title=""
																alt=""
															/>
														</div>
														<div className="ps-2 col">
															<div className="d-flex pb-1 align-items-center">
																<h6 className="m-0 fw-500">
																	<i className="cf cf-eth text-primary"></i>{" "}
																	0.0877
																</h6>
																<span className="ps-2">63% below floor</span>
															</div>
															<span className="fs-sm">
																By
																<a className="text-mode opacity-80" href="#">
																	@tarzan75
																</a>
																Expiry: in 7 minutes
															</span>
														</div>
													</div>
													<div className="text-center">
														<a
															className="btn btn-sm rounded-pill btn-border-mode"
															href="#">
															Load More
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="accordion-item">
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
													aria-controls="ex_de_02">
													<i className="bi-list-ul"></i> Properties
												</button>
											</h2>
											<div
												id="ex_de_02"
												className={`accordion-collapse collapse ${
													activeproperties ? "show" : ""
												}`}
												aria-labelledby="ex_de_heading_02"
												data-bs-parent="#explor_details">
												<div className="accordion-body">
													<div className="row g-2">
														<div className="col-6">
															<a
																className="border border-gray-300 px-3 py-2 small rounded text-reset d-block"
																href="#">
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
																href="#">
																<h6 className="text-secondary mb-1 small">
																	Generation
																</h6>
																<div className="text-mode m-0 lh-sm">
																	Genesis
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
																href="#">
																<h6 className="text-secondary mb-1 small">
																	Series
																</h6>
																<div className="text-mode m-0 lh-sm">
																	Maroon
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
																href="#">
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
																href="#">
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
																href="#">
																<h6 className="text-secondary mb-1 small">
																	Generation
																</h6>
																<div className="text-mode m-0 lh-sm">
																	Genesis
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
																href="#">
																<h6 className="text-secondary mb-1 small">
																	Fur
																</h6>
																<div className="text-mode m-0 lh-sm">
																	Maroon
																</div>
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
																href="#">
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
																href="#">
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
																href="#">
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
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="ex_de_heading_03">
												<button
													className={`accordion-button ${
														activecolldetails ? "" : "collapsed"
													}`}
													onClick={() =>
														setActiveCollDetails(!activecolldetails)
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#ex_de_03"
													aria-expanded="false"
													aria-controls=" ex_de_03">
													<i className="bi-text-paragraph"></i> Collection
													Details
												</button>
											</h2>
											<div
												id="ex_de_03"
												className={`accordion-collapse collapse ${
													activecolldetails ? "show" : ""
												}`}
												aria-labelledby="ex_de_heading_03"
												data-bs-parent="#explor_details">
												<div className="accordion-body">
													<div className="d-flex align-items-center mb-4">
														<div className="avatar">
															<img
																className="avatar-img rounded-circle"
																src="/assets/img/avatar-1.jpg"
																title=""
																alt=""
															/>
														</div>
														<div className="col ps-3">
															<h6 className="m-0 pb-1">
																PLUR Official
																<i className="bi-patch-check-fill text-primary ms-2"></i>
															</h6>
															<span className="text-opacity-85 fw-600 fs-sm d-block pb-1">
																0x8e37…4941
																<i className="bi bi-box-arrow-up-right"></i>
															</span>
														</div>
														<div>
															<a
																className="btn btn-border-mode icon-md rounded-circle p-3"
																href="">
																<i className="bi-globe"></i>
															</a>
														</div>
													</div>
													<div className="row gx-2">
														<div className="col-4 position-relative pe-4">
															<span>Items</span>
															<h6 className="fw-400 m-0">8.59K</h6>
															<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
														</div>
														<div className="col-4 position-relative pe-4">
															<span>Owners</span>
															<h6 className="fw-400 m-0">2.39K</h6>
															<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
														</div>
														<div className="col-4 position-relative pe-4">
															<span>VOL</span>
															<h6 className="fw-400 m-0">96.27 Ξ</h6>
														</div>
													</div>
													<div className="row gx-2 pt-4">
														<div className="col-4 position-relative pe-4">
															<span>Floor</span>
															<h6 className="fw-400 m-0">0.0421 Ξ</h6>
															<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
														</div>
														<div className="col-4 position-relative pe-4">
															<span>ROYALTY</span>
															<h6 className="fw-400 m-0">5%</h6>
															<div className="vr position-absolute top-0 bottom-0 end-0 me-4"></div>
														</div>
													</div>
													<div className="pt-4">
														<a className="btn btn-sm btn-border-mode" href="#">
															Make a Collection Offer
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="accordion-item">
											<h2 className="accordion-header" id="ex_de_heading_04">
												<button
													className={`accordion-button ${
														activetokendetails ? "" : "collapsed"
													}`}
													onClick={() =>
														setActiveTokenDetails(!activetokendetails)
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#ex_de_04"
													aria-expanded="false"
													aria-controls="ex_de_04">
													<i className="bi-info-circle"></i> Token Details
												</button>
											</h2>
											<div
												id="ex_de_04"
												className={`accordion-collapse collapse ${
													activetokendetails ? "show" : ""
												}`}
												aria-labelledby="ex_de_heading_04"
												data-bs-parent="#explor_details">
												<div className="accordion-body">
													<div className="row mb-2">
														<div className="col-7">
															<h6 className="m-0 fw-400">Contract Address</h6>
														</div>
														<div className="col-5 text-end">
															<a href="#">0x8e37...4941</a>
														</div>
													</div>
													<div className="row mb-2">
														<div className="col-7">
															<h6 className="m-0 fw-400">Token ID</h6>
														</div>
														<div className="col-5 text-end">
															<a href="#">6791</a>
														</div>
													</div>
													<div className="row mb-2">
														<div className="col-7">
															<h6 className="m-0 fw-400">Token Standard</h6>
														</div>
														<div className="col-5 text-end">
															<span>ERC-721</span>
														</div>
													</div>
													<div className="row mb-2">
														<div className="col-7">
															<h6 className="m-0 fw-400">Chain</h6>
														</div>
														<div className="col-5 text-end">
															<span>Ethereum</span>
														</div>
													</div>
													<div className="row mb-2">
														<div className="col-7">
															<h6 className="m-0 fw-400">Creator Fee</h6>
														</div>
														<div className="col-5 text-end">
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
  