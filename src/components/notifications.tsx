function Notifications() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="header_notification_bar"
      aria-labelledby="header_notification_barLabel"
    >
      <div className="offcanvas-header border-bottom border-gray-300">
        <h5 className="offcanvas-title" id="header_notification_barLabel">
          Notification
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="assets/img/avatar-1.jpg"
              title=""
              alt=""
            />
          </div>
          <div className="col ps-3 d-flex align-items-center">
            <div className="col pe-3">
              <h6 className="mb-1">
                <a href="#" className="stretched-link text-reset">
                  Drunk Robots
                </a>
              </h6>
              <span>sold for 2.515 ETH</span>
              <span className="fs-xs w-100 d-block">
                25 minutes 10 seconds ago
              </span>
            </div>
            <div className="icon btn btn-border-mode p-0 rounded-3">
              <i className="bi-bag-check"></i>
            </div>
          </div>
        </div>
        <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="assets/img/avatar-2.jpg"
              title=""
              alt=""
            />
          </div>
          <div className="col ps-3 d-flex align-items-center">
            <div className="col pe-3">
              <h6 className="mb-1">
                <a href="#" className="stretched-link text-reset">
                  Drunk Robots
                </a>
              </h6>
              <span>listed by @donsee_04</span>
              <span className="fs-xs w-100 d-block">
                48 minutes 35 seconds ago
              </span>
            </div>
            <div className="icon btn btn-border-mode p-0 rounded-3">
              <i className="bi-check-lg"></i>
            </div>
          </div>
        </div>
        <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="assets/img/avatar-3.jpg"
              title=""
              alt=""
            />
          </div>
          <div className="col ps-3 d-flex align-items-center">
            <div className="col pe-3">
              <h6 className="mb-1">
                <a href="#" className="stretched-link text-reset">
                  Drunk Robots
                </a>
              </h6>
              <span>Bid by @obbabe_01</span>
              <span className="fs-xs w-100 d-block">
                48 minutes 35 seconds ago
              </span>
            </div>
            <div className="icon btn btn-border-mode p-0 rounded-3">
              <i className="bi-pin"></i>
            </div>
          </div>
        </div>
        <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="assets/img/avatar-1.jpg"
              title=""
              alt=""
            />
          </div>
          <div className="col ps-3 d-flex align-items-center">
            <div className="col pe-3">
              <h6 className="mb-1">
                <a href="#" className="stretched-link text-reset">
                  Drunk Robots
                </a>
              </h6>
              <span>sold for 2.515 ETH</span>
              <span className="fs-xs w-100 d-block">
                25 minutes 10 seconds ago
              </span>
            </div>
            <div className="icon btn btn-border-mode p-0 rounded-3">
              <i className="bi-bag-check"></i>
            </div>
          </div>
        </div>
        <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="assets/img/avatar-2.jpg"
              title=""
              alt=""
            />
          </div>
          <div className="col ps-3 d-flex align-items-center">
            <div className="col pe-3">
              <h6 className="mb-1">
                <a href="#" className="stretched-link text-reset">
                  Drunk Robots
                </a>
              </h6>
              <span>listed by @donsee_04</span>
              <span className="fs-xs w-100 d-block">
                48 minutes 35 seconds ago
              </span>
            </div>
            <div className="icon btn btn-border-mode p-0 rounded-3">
              <i className="bi-check-lg"></i>
            </div>
          </div>
        </div>
        <div className="p-3 border border-gray-300 rounded-3 d-flex position-relative mb-3">
          <div className="avatar">
            <img
              className="avatar-img rounded-circle"
              src="assets/img/avatar-3.jpg"
              title=""
              alt=""
            />
          </div>
          <div className="col ps-3 d-flex align-items-center">
            <div className="col pe-3">
              <h6 className="mb-1">
                <a href="#" className="stretched-link text-reset">
                  Drunk Robots
                </a>
              </h6>
              <span>Bid by @obbabe_01</span>
              <span className="fs-xs w-100 d-block">
                48 minutes 35 seconds ago
              </span>
            </div>
            <div className="icon btn btn-border-mode p-0 rounded-3">
              <i className="bi-pin"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer d-flex p-3 border-top border-gray-300">
        <a className="btn btn-mode mx-3 col" href="#">
          Manage
        </a>
        <a className="btn btn-danger mx-3 col" href="#">
          Clear All
        </a>
      </div>
    </div>
  );
}

export default Notifications;
