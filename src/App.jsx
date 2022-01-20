import "../public/style/css/bootstrap.css";
import "../public/style/css/fonts/font-awesome/css/font-awesome.css";
import "../public/style/vendor/owl-carousel/owl.carousel.css";
import "../public/style/vendor/owl-carousel/owl.theme.css";
import "../public/style/vendor/magnific-popup/magnific-popup.css";
import "../public/style/css/theme.css";
import "../public/style/css/theme-elements.css";
import "../public/style/css/theme-animate.css";
import "../public/style/vendor/rs-plugin/css/settings.css";
import "../public/style/vendor/circle-flip-slideshow/css/component.css";
import "../public/style/css/skins/blue.css";
import "../public/style/css/custom.css";
import "../public/style/css/theme-responsive.css";
import "../public/style/css/googlefonts.css";
import React from "react";
import PromisePolyfill from "promise-polyfill";
import Home from "./components/Home";
import Median from "./components/Median";

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

function App() {
  return (
    <div className="boxed">
      {/* <div className="body" style={{ backgroundColor: "#FFFFFF" }}> */}
      <div
        className="body"
        style={{
          backgroundImage: "./style/img/gray_jean.png",
        }}
      >
        <Median />
        <Home />
      </div>
    </div>
  );
}

export default App;
