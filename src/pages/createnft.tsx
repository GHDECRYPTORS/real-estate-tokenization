/** @format */

import React from "react";

const Createnft = () => {
	return (
		<div className="wrapper">
			<main>
				<div
					className="section bg-cover py-6 h-px-150px bg-no-repeat bg-center"
					style={{ backgroundImage: "url(/assets/img/ai-img-7.png)" }}>
					<div className="container text-center">
						<h1 className="text-white m-0">Create House NFT</h1>
					</div>
				</div>
				<section className="section">
					<div className="container">
						<div className="row gy-5">
							<div className="col-md-8">
								<div className="card border-gray-200 rounded-3">
									<div className="card-body p-lg-4">
										<form>
											<div className="row gy-4">
												<div className="col-12">
													<label className="form-label">Upload file</label>
													<div className="h-px-150px rounded d-flex align-items-center p-4 justify-content-center d-flex position-relative border border-2 border-gray-300 rounded-3">
														<div className="pe-none d-flex align-items-center justify-content-center flex-column">
															<div className="icon-md bg-gray-300 rounded-circle">
																<i className="bi-upload"></i>
															</div>
															<p className="m-0 pt-3 fs-sm">
																{" "}
																JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
																GLB, GLTF. Max size: 150 MB{" "}
															</p>
														</div>
														<input
															className="position-absolute top-0 end-0 start-0 bottom-0 opacity-0"
															type="file"
															name="upload"
															accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
														/>
													</div>
												</div>
												<div className="col-12">
													<label className="form-label">Price</label>
													<input
														type="text"
														name="First"
														className="form-control"
														placeholder="Enter price for one piece"
													/>
												</div>
												<div className="col-12">
													<label className="form-label">Name</label>
													<input
														type="text"
														name="First"
														className="form-control"
														placeholder="e. g. 'Maffie with logo'"
													/>
												</div>
												<div className="col-12">
													<label className="form-label">Price</label>
													<input
														type="text"
														name="First"
														className="form-control"
														placeholder="Enter price for one piece"
													/>
												</div>
												<div className="col-12">
													<label className="form-label">Description </label>
													<textarea
														className="form-control"
														rows={5}
														placeholder="After purchasing you’ll be able to get the real Logo"></textarea>
												</div>
												<div className="col-12">
													<label className="form-label">Royalties</label>
													<input
														type="text"
														name="Royalties"
														className="form-control"
														placeholder="10%"
													/>
													<span className="help-text fs-sm">
														Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
													</span>
												</div>
												<div className="col-12">
													<label className="form-label">Properties</label>
													<div className="d-flex">
														<input
															type="text"
															name="Size"
															className="form-control me-2"
															placeholder="e.g. Size"
														/>
														<input
															type="text"
															name="m"
															className="form-control me-2"
															placeholder="e.g. M"
														/>
														<button className="btn btn-border-mode">
															<i className="fi-plus"></i>
														</button>
													</div>
												</div>
												<div className="col-12">
													<label className="form-label">
														Alternative text for NFT
													</label>
													<input
														type="text"
														name="Alternative"
														className="form-control"
														placeholder="Description in details"
													/>
												</div>
												<div className="col-12">
													<button className="w-100 btn btn-primary">
														Create your item
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
                            </div>
                             <div className="col-md-4">
                            <div className="product-card">
                                <div className="product-card-media">
                                    <a href="#">
                                        <img className="product-card-img" src="assets/img/product-8.jpg" title="" alt="" />
                                    </a>
                                </div>
                                <div className="product-card-body">
                                    <div className="product-title d-flex align-items-center">
                                        <h6 className="m-0">
                                            <a className="text-reset stretched-linka" href="#">Space Shapes #3</a>
                                        </h6>
                                        <button className="like-btn btn btn-primary-soft p-0 rounded-circle avatar avatar-xs ms-auto">
                                            <i className="avatar-text fi-heart"></i>
                                        </button>
                                    </div>
                                    <div className="product-actions d-flex fs-sm">
                                        <div className="price col lh-sm">
                                            <span className="m-0">Mirrored <span className="text-body fw-400 w-100 d-block">18 ETH</span> </span>
                                        </div>
                                        <div className="price col lh-sm">
                                            <span className="m-0">3.99 ETH <span className="text-body fw-400 w-100 d-block">1/1</span> </span>
                                        </div>
                                    </div>
                                    <div className="product-card-cart">
                                        <a className="btn btn-primary w-100" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Createnft;
