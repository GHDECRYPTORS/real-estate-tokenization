/** @format */

import { getNonce, postLogin } from "../services/userServices";

import { AuthenticateUser } from "../store/slices/user.slice";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";

function Login() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const LoginUser = async () => {
    await open();
  };
  useEffect(() => {
    (async () => {
      if (isConnected && typeof window.ethereum !== "undefined") {
        try {
          console.log("Before", address);
          const nonceResponse = await getNonce(address);

          const { message } = nonceResponse.data;

          console.log(window.ethereum.isConnected());

          const provider = new ethers.providers.Web3Provider(window.ethereum);

          const signer = provider.getSigner();
          const signature = await signer.signMessage(message);

          if (signature) {
            const formdata = {
              address,
              signature,
              message,
            };
            const response = await postLogin(formdata);

            console.log("response", response);

            if (response?.data?.statusCode === 200) {
              console.log("responseData", response?.data?.data);
              dispatch(
                AuthenticateUser({
                  username: response?.data?.data?.user?.username,
                  accessToken: response?.data?.data?.access_token,
                  id: response?.data?.data?.user?._id,
                  just_signed_up: response?.data?.data?.user?.just_signed_up,
                })
              );
              navigate("/");
            } else {
              console.error("Error");
            }
          }
        } catch (e: any) {
          console.error(e.message);
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
                    <button
                      className="w-100 btn btn-primary"
                      onClick={LoginUser}
                    >
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
