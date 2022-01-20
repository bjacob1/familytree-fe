import "./style/css/bootstrap.css";
import "./style/css/fonts/font-awesome/css/font-awesome.css";
import "./style/vendor/owl-carousel/owl.carousel.css";
import "./style/vendor/owl-carousel/owl.theme.css";
import "./style/vendor/magnific-popup/magnific-popup.css";
import "./style/css/theme.css";
import "./style/css/theme-elements.css";
import "./style/css/theme-animate.css";
import "./style/vendor/rs-plugin/css/settings.css";
import "./style/vendor/circle-flip-slideshow/css/component.css";
import "./style/css/skins/blue.css";
import "./style/css/custom.css";
import "./style/css/theme-responsive.css";
import "./style/css/googlefonts.css";
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
