// /** @format */

import { LogoutUser, selectUserInstance } from "../store/slices/user.slice";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { Link } from "react-router-dom";
import { ellipsify } from "./ellipsify";
// import { Formatter } from @ethersproject/providers";
// import { ethers } from "ethers";
import { useEffect } from "react";
// import numberFormat from "./formatter";
import { useNavigate } from "react-router-dom";

interface UserProps {
  showUser: boolean;
  setShowUser: (show: boolean) => void;
}

const User: React.FC<UserProps> = ({ showUser, setShowUser }) => {
  const { address } = useAccount();
  const dispatch = useAppDispatch();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();
  const { data, isLoading } = useBalance({
    address: address,
  });

  const { user }: any = useAppSelector(selectUserInstance);

  useEffect(() => {
    console.log("address", address);
  }, [address, showUser]);

  const DisConnectUser = async () => {
    disconnect();
    setShowUser(false);
    dispatch(LogoutUser());
    navigate("/");
  };

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
              <h6 className="mb-0">
                {user.username ?? ellipsify(address || "", 20)}
              </h6>
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
              <span className="text-truncate ps-3">{user?._id}</span>
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
                  {isLoading && <span>Loading...</span>}
                  <h4 className="m-0">{data?.formatted}</h4>
                </div>
              </div>
            </Link>
          </li>
          <li className="mb-2" onClick={() => setShowUser(false)}>
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to="/profile"
            >
              <i className="bi-gear"></i>
              <span className="ps-3">Setting</span>
            </Link>
          </li>
          <li className="mb-2" onClick={DisConnectUser}>
            <Link
              className="btn btn-sm text-start btn-border-mode rounded-3 p-3 w-100"
              to=""
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
