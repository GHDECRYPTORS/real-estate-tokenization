import { ReactNode, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
function replay(eventType: string) {
  const event = new Event(eventType);
  console.log(eventType);
  window.dispatchEvent(event);
  document.dispatchEvent(event);
}

function PublicLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    replay("DOMContentLoaded");
    replay("load");
  }, []);
  return (
    <div>
      <Helmet>
        <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/headroom/headroom.min.js"></script>
        <script src="assets/vendor/timezz/timezz.js"></script>
        <script src="assets/js/theme.js"></script>
        <script src="assets/js/color-modes.js"></script>
        <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      </Helmet>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
export default PublicLayout;
