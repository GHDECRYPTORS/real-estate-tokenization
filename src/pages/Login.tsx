/** @format */

import { useWeb3Modal } from "@web3modal/react";
import { Web3Modal } from "@web3modal/react";
import { ethers } from "ethers";

import { useAccount } from "wagmi";

const SERVER_URL = "https://real-estate-backend.azurewebsites.net/1";

function Login() {
	const { open, close } = useWeb3Modal();
	const { address, isConnected } = useAccount();

	const LoginUser = async () => {
		open();


		//Also check for the chainName in the If Statement , because else, any chain that's connected will also  validate the statement within the if block 
		if (isConnected && typeof window.ethereum !== "undefined") {
			try {
				const nonceResponse = await fetch(
					`${SERVER_URL}/auth/nonce/${address}`,
					{
						method: "GET",
						headers: { "Content-Type": "application/json" },
					}
				);
				const { message } = await nonceResponse.json();
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const signer = provider.getSigner();

				const signature = await signer.signMessage(message);
				
				const response = await fetch(`${SERVER_URL}/auth/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ address, signature }),
				});

				if (response.ok) {
						// const { address } = await response.json();
						// setAddress(address);
					} else {
						console.error(response.statusText);
					}

			} catch (e: any) {
				console.error(e.message);
			}
		}
		

		
	};
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
									{/* <form> */}
									<div className="pb-3">
										<button
											className="w-100 btn btn-primary"
											onClick={LoginUser}>
											Connect Wallet
										</button>
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

export default Login;
