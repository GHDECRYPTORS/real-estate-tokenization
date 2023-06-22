/** @format */

// import React from 'react'

// import { Link } from "react-router-dom";

function Login() {
	return (
		<main>
			<section className="section">
				<div className="container">
					<div className="row gy-5 justify-content-center">
						<div className="col-md-6 col-lg-5 col-xxl-4">
							<div className="card">
								<div className="card-body p-4 p-xl-5">
									<h3 className="mb-1">Login</h3>
									<p className="small mb-4">Connect your Wallet to continue.</p>
									<form>
										<li className="list-group-item p-3 border-gray-300 d-flex align-items-center">
											<div className="avatar-sm">
												<img
													className="avatar-img rounded-circle"
													src="assets/img/wallet/metamask-fox.svg"
													title=""
													alt=""
												/>
											</div>
											<span className="px-3 text-mode fw-500">MetaMask</span>
											<a
												className="ms-auto stretched-link btn btn-primary btn-border-mode btn-sm rounded-pill"
												href="#">
												Connect
											</a>
										</li>
										{/* <div className="text-center">
                      <small>Not registered?</small>
                      <Link to="/signup" className="small font-weight-bold">
                        Create account
                      </Link>
                    </div> */}
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Login;
