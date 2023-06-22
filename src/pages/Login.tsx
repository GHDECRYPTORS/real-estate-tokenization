// import React from 'react'

// import { Link } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";
import { Web3Modal } from "@web3modal/react";
// import { EthereumClient } from "@web3modal/ethereum";
// import {  createConfig } from 'wagmi'
const projectId = '02c135931686e1628630c41236d10acf'
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, version: 2, chains }),
//   publicClient,
// });
// const chains = [arbitrum, mainnet, polygon]
// const ethereumClient = new EthereumClient(wagmiConfig, chains);
function Login() {
  const { open, close } = useWeb3Modal();
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
                      onClick={() => open()}
                    >
                      Connect Wallet
                    </button>
                    {/* <Web3Modal
                      projectId={projectId}
                      ethereumClient={ethereumClient}
                    /> */}
                  </div>
                  {/* <div className="text-center">
                      <small>Not registered?</small>
                      <Link to="/signup" className="small font-weight-bold">
                        Create account
                      </Link>
                    </div> */}
                  {/* </form> */}
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
