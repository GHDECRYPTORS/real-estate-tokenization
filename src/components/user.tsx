import { Formatter } from "@ethersproject/providers";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { ellipsify } from "./ellipsify";
import numberFormat from "./formatter";

interface UserProps {
  showUser: boolean;
  setShowUser: (show: boolean) => void;
}

const User: React.FC<UserProps> = ({ showUser, setShowUser }) => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState("---");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  useEffect(() => {
    (async () => {
      if (address != null) {
        const balanceWei = await provider.getBalance(address);
        const balanceEth = ethers.utils.formatEther(balanceWei);
        setBalance(numberFormat.format(+balanceEth));
      }
    })();
  }, [address, showUser]);

  return (
    <div
      className={`offcanvas offcanvas-end ${showUser ? "show" : ""}`}
      tabIndex={-1}
      id="header_user_bar"
      aria-labelledby="header_user_barLabel"
    >
      <div className="offcanvas-header border-bottom border-gray-300">
        <div className="offcanvas-title" id="header_user_barLabel">
          <div className="d-flex align-items-center">
            <div className="avatar">
              <img
                className="avatar-img rounded-circle"
                src="assets/img/avatar-2.jpg"
                title=""
                alt=""
              />
            </div>
            <div className="col ps-3">
              <h6 className="mb-0">Jupiter</h6>
              <span className="fs-xs fw-400">
                {ellipsify(address || "", 20)}
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => setShowUser(false)}
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled">
          <li className="mb-2">
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to="#"
            >
              <i className="bi-subtract"></i>
              <span className="text-truncate ps-3">653211545655652112</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to="#"
            >
              <span className="fw-400 mb-3 d-block">Balance</span>
              <div className="d-flex">
                <div className="icon-sm">
                  <i className="cf cf-etc h4 fw-400 m-0"></i>
                </div>
                <div className="col ps-3">
                  <h4 className="m-0">{balance}</h4>
                </div>
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to="/profile"
            >
              <i className="bi-gear"></i>
              <span className="ps-3">Setting</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to="/activity"
            >
              <i className="bi-clock-history"></i>
              <span className="ps-3">Your Activity</span>
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to="#"
            >
              <i className="bi-bag-check"></i>
              <span className="ps-3">Report a Problem</span>
            </Link>
          </li> */}
          <li className="mb-2">
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to="#"
            >
              <i className="bi-lock"></i>
              <span className="ps-3">Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
