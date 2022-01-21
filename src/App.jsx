import '../build/style/css/bootstrap.css';
import '../build/style/css/fonts/font-awesome/css/font-awesome.css';
import '../build/style/vendor/owl-carousel/owl.carousel.css';
import '../build/style/vendor/owl-carousel/owl.theme.css';
import '../build/style/vendor/magnific-popup/magnific-popup.css';
import '../build/style/css/theme.css';
import '../build/style/css/theme-elements.css';
import '../build/style/css/theme-animate.css';
import '../build/style/vendor/rs-plugin/css/settings.css';
import '../build/style/vendor/circle-flip-slideshow/css/component.css';
import '../build/style/css/skins/blue.css';
import '../build/style/css/custom.css';
import '../build/style/css/theme-responsive.css';
import '../build/style/css/googlefonts.css';
import React from 'react';
import PromisePolyfill from 'promise-polyfill';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Median from './components/Median';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Results from './components/Results';
import Bio from './components/Bio';

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

function App() {
  return (
    <div className="boxed">
      <div className="body">
        <Header />
        <Median />
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/results/:term" element={<Results />} />
          <Route path="/result/:id" element={<Bio />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
