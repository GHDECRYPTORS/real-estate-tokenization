/** @format */

import { useWeb3Modal } from "@web3modal/react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { AuthenticateUser } from "../store/slices/user.slice";
import { getNonce, postLogin } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
	const { open, close } = useWeb3Modal();
	const { address, isConnected, isConnecting } = useAccount();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const LoginUser = async () => {
		await open();
		// Also check for the chainName in the If Statement , because else, any chain that's connected will also  validate the statement within the if block
	};
	useEffect(() => {
		(async () => {
			if (isConnected && typeof window.ethereum !== "undefined") {
				try {
					console.log("Before", address);
					const nonceResponse = await getNonce(address);
					console.log("After", address);
					const { message } = nonceResponse.data;
					const provider = new ethers.providers.Web3Provider(window.ethereum);
					const signer = provider.getSigner();
					const signature = await signer.signMessage(message);

					if (signature) {
						const formdata = {
							address,
							signature,
						};
						const response = await postLogin(formdata);

						console.log("response", response);

						if (response?.data?.statusCode === 200) {
							console.log("responseData", response?.data?.data);
							toast.success("Login Successful");
							dispatch(
								AuthenticateUser({
									accessToken: response?.data?.data?.access_token,
									id: response?.data?.data?.user?._id,
									username: response?.data?.data?.user?.username,
									just_signed_up: response?.data?.data?.user?.just_signed_up,
								})
							);
							
							// dispatch(AuthenticateUser(response?.data?.data));
							navigate("/");
						} else {
							console.error("Error");
							toast.error("Login Failed");
						}
					}
				} catch (e: any) {
					toast.error(e.message);
				}
			}
		})();
	}, [isConnected]);
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
										{isConnecting ? (
											<button className="w-100 btn btn-primary">
												Connecting...
											</button>
										) : (
											<button
												className="w-100 btn btn-primary"
												onClick={LoginUser}>
												Connect Wallet
											</button>
										)}
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
