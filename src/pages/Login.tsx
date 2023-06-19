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
                    <div className="pb-3">
                      <button className="w-100 btn btn-primary">
                        Connect Wallet
                      </button>
                    </div>
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
