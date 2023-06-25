/** @format */
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
	selectUserInstance,
	AuthenticateUser,
} from "../store/slices/user.slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Profile() {
	const { accessToken, user }: any = useAppSelector(selectUserInstance);
	const dispatch = useAppDispatch();
	const [userName, setUserName] = useState<any>("");
	const navigate = useNavigate();

	const AuthUrl = axios.create({
		baseURL: "https://real-estate-backend.azurewebsites.net/v1",
		headers: {
			Authorization: `Bearer ${
				typeof window !== "undefined" ? accessToken : ""
			}`,
			"Content-Type": "application/json",
		},
	});

	const postUserName = async (username: string) => {
		return AuthUrl.post(`/user/set-username/${username}`);
	};

	const UpdateUserName = async () => {
		try {
			const response = await postUserName(userName);
			console.log("response", response);

			if (response?.data?.statusCode === 200) {
				toast.success("Username Updated");
				dispatch(
					AuthenticateUser({
						username: userName,
						accessToken: accessToken,
						id: user?._id,
						just_signed_up: user?.just_signed_up,
					})
				);
				setUserName("");
				navigate("/");
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<main>
			<section className="py-6">
				<div className="container">
					<div
						className="bg-cover bg-no-repeat h-px-250px rounded d-flex align-items-start p-4 justify-content-end d-flex position-relative"
						style={{ backgroundImage: "url(/assets/img/ai-img-7.png)" }}>
						{/* <button className="btn btn-light">
							<i className="bi-upload btn-icon"></i> Upload Cover
						</button> */}
					</div>
					<div className="px-3 px-md-4">
						<div className="row justify-content-center">
							<div className="col-lg-8 col-xxl-9 mt-n6">
								<div className="card shadow">
									<div className="card-body p-lg-4">
										<div className="row gy-3">
											<div className="col-md-7">
												<div className="d-flex align-items-center">
													<div className="avatar-lg">
														<img
															className="avatar-img rounded"
															src="assets/img/avatar-2.jpg"
															title=""
															alt=""
														/>
													</div>
													<div className="ps-3">
														<h6 className="m-0">Avatar</h6>
													</div>
												</div>
											</div>
										</div>
										<hr className="my-4" />
										<h6 className="mb-4">Edit your UserName.</h6>
										<div className="row g-3">
											<div className="col-sm-6">
												<label className="form-label">Username</label>
												<input
													type="text"
													name="username"
													className="form-control"
													placeholder="Update your username"
													value={userName}
													onChange={(e) => setUserName(e.target.value)}
												/>
											</div>
										</div>
										<div className="d-flex pt-5">
											<button
												className={`btn btn-primary me-3 ${
													userName.length < 8 && "disabled"
												}`}
												disabled={userName.length < 8}
												onClick={UpdateUserName}>
												Save Changes
											</button>
											{userName.length > 1 && userName !== "" && (
												<button
													className="btn btn-secondary btn-mode"
													onClick={() => setUserName("")}>
													Cancel
												</button>
											)}
										</div>
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

export default Profile;
