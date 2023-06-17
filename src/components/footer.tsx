function Footer() {
  return (
    <footer className="footer footer-bg bg-body border-top border-gray-300">
      <div className="py-7 py-md-8 py-lg-10">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-3 me-auto">
              <div className="pb-4">
                <img
                  className="logo-dark w-8"
                  src="assets/img/logo.png"
                  title=""
                  alt=""
                  style={{ width: "200px" }}
                />
                <img
                  className="logo-light"
                  src="assets/img/logo.png"
                  title=""
                  alt=""
                  style={{ width: "200px" }}
                />
              </div>
              <p>
                Crypto collectibles and non-fungible tokens (NFTs). Buy, sell,
                and discover exclusive digital items.
              </p>
            </div>
            <div className="col-lg-3 col-6">
              <h5 className="footer-title-01">Marketplace</h5>
              <ul className="list-unstyled footer-link-01 m-0">
                <li>
                  <a className="" href="#">
                    All NFTs
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    New
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Collectibles
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Photography
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Trading Cards
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6">
              <h5 className="footer-title-01">Resources</h5>
              <ul className="list-unstyled footer-link-01 m-0">
                <li>
                  <a className="" href="#">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Platform Status
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Copyright
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    Popular Campaign
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5 className="footer-title-01">Stay up to date</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <form>
                <div className="d-flex flex-row">
                  <input
                    type="email"
                    className="form-control me-2"
                    placeholder="Enter your username"
                  />
                  <button
                    className="btn btn-primary flex-shrink-0"
                    type="submit"
                  >
                    <i className="bi-envelope"></i>
                  </button>
                </div>
                <p className="m-0 mt-2 small">
                  New UI kits or big discounts. Never spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 border-top border-gray-300 border-bottom">
        <div className="row gy-4 align-items-center">
          <div className="col-md-7">
            <h4 className="m-0 fw-500 text-center text-md-start">
              The NEFT Marketplace with everything for everyone.
            </h4>
          </div>
          <div className="col-md-5">
            <ul className="nav mx-n2 justify-content-center justify-content-md-end">
              <li className="mx-2">
                <a
                  className="icon-md btn btn-border-mode p-0 rounded-3"
                  href="#"
                >
                  <i className="bi-facebook"></i>
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="icon-md btn btn-border-mode p-0 rounded-3"
                  href="#"
                >
                  <i className="bi-linkedin"></i>
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="icon-md btn btn-border-mode p-0 rounded-3"
                  href="#"
                >
                  <i className="bi-twitter"></i>
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="icon-md btn btn-border-mode p-0 rounded-3"
                  href="#"
                >
                  <i className="bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-3 gy-3 align-items-center">
          <div className="col-md-6">
            <ul className="nav justify-content-center justify-content-md-start my-2 links-white small list-unstyled footer-link-01 m-0">
              <li className="p-0 mx-3 ms-md-0 me-md-3">
                <a href="#" className="">
                  Privace &amp; Policy
                </a>
              </li>
              <li className="p-0 mx-3 ms-md-0 me-md-3">
                <a href="#" className="">
                  Faq's
                </a>
              </li>
              <li className="p-0 mx-3 ms-md-0 me-md-3">
                <a href="#" className="">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-white-85 small m-0">
              © 2023 Maffei is Proudly Powered by{" "}
              <a
                href="http://pxdraft.com/"
                target="_blank"
                className="text-reset"
              >
                pxdraft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
