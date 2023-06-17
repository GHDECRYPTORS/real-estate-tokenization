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

window.replay = replay;
themeUtils();
function PublicLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    replay("DOMContentLoaded");
    replay("load");
    // themeUtils();
  }, []);
  return (
    <div>
      <Helmet>
        {/* <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script> */}
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/headroom/headroom.min.js"></script>
        <script src="assets/vendor/timezz/timezz.js"></script>
        <script src="assets/js/theme.js"></script>
        {/* <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script> */}
      </Helmet>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
function themeUtils() {
  const storedTheme = localStorage.getItem("theme");

  const getPreferredTheme = (second = false) => {
    if (storedTheme && !second) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = function (theme: string) {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };
  window.setTheme = setTheme;
  window.getTheme = getPreferredTheme;

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme: string) => {
    const activeThemeIcon = document.querySelector(".theme-icon-active i");
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    const svgOfActiveBtn = btnToActive
      ? btnToActive.querySelector("span i")?.getAttribute("class")
      : null;

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
    });

    if (btnToActive && svgOfActiveBtn) {
      btnToActive.classList.add("active");
      if (activeThemeIcon)
        activeThemeIcon.setAttribute("class", svgOfActiveBtn);
    }
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      setTheme(getPreferredTheme(true));
    });

  window.addEventListener("DOMContentLoaded", () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        localStorage.setItem("theme", theme);
        setTheme(theme);
        showActiveTheme(theme);
      });
    });
  });
}
export default PublicLayout;
