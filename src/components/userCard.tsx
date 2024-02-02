// import React from "react";

export default function UserCard() {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="user-card-01">
        <div className="user-card-nuber h6 m-0 pe-3 fw-400">01</div>
        <div className="avatar avatar-lg">
          <img
            className="avatar-img rounded-circle"
            src="/assets/img/avatar-1.jpg"
            title=""
            alt=""
          />
        </div>
        <div className="user-card-info flex-fill px-3">
          <h6 className="mb-1">
            <a href="#" className="stretched-link text-reset">
              Drunk Robots
            </a>
          </h6>
          <span>@drunk_robots</span>
        </div>
        <div className="user-card-price">
          <div className="h6 m-0">$2.2M</div>
        </div>
      </div>
    </div>
  );
}
