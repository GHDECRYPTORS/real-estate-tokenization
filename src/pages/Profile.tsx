// import React from "react";

function Profile() {
  return (
    <main>
      <section className="py-6">
        <div className="container">
          <div
            className="bg-cover bg-no-repeat h-px-250px rounded d-flex align-items-start p-4 justify-content-end d-flex position-relative"
            style={{ backgroundImage: "url(/assets/img/heading-bg.jpg)" }}
          >
            <button className="btn btn-light">
              <i className="bi-upload btn-icon"></i> Upload Cover
            </button>
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
                              src="assets/img/avatar-1.jpg"
                              title=""
                              alt=""
                            />
                          </div>
                          <div className="ps-3">
                            <h6 className="m-0">Update Avatar</h6>
                            <span className="fs-sm">
                              PNG, JPG max size 5mb.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 d-flex align-self-center justify-content-md-end">
                        <a
                          className="btn btn-border-mode btn-sm me-3 col"
                          href="#"
                        >
                          <i className="bi-upload me-1"></i> Update
                        </a>
                        <a className="btn btn-border-mode btn-sm col" href="#">
                          <i className="bi-trash me-1"></i> Delete
                        </a>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <h6 className="mb-4">
                      Edit your personal information and address.
                    </h6>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="username"
                        />
                      </div>
                    </div>
                    <div className="d-flex pt-5">
                      <button className="btn btn-primary me-3">
                        Save Changes
                      </button>
                      <button className="btn btn-mode">Cancel</button>
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
