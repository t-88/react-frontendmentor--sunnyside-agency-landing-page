import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import milkbottles__desktop from "./assets/desktop/image-gallery-milkbottles.jpg"
import orange__desktop from "./assets/desktop/image-gallery-orange.jpg"
import cone__desktop from "./assets/desktop/image-gallery-cone.jpg"
import sugarcubes__desktop from "./assets/desktop/image-gallery-sugarcubes.jpg"

import milkbottles__mobile from "./assets/mobile/image-gallery-milkbottles.jpg"
import orange__mobile from "./assets/mobile/image-gallery-orange.jpg"
import cone__mobile from "./assets/mobile/image-gallery-cone.jpg"
import sugarcubes__mobile from "./assets/mobile/image-gallery-sugarcubes.jpg"

import './style/App.css';
function App() {
  const gallery = {
    desktop: [
      milkbottles__desktop,
      orange__desktop,
      cone__desktop,
      sugarcubes__desktop,
    ],
    mobile: [
      milkbottles__mobile,
      orange__mobile,
      cone__mobile,
      sugarcubes__mobile,
    ]
  }
  return (
    <>
      <Header />
      <Features />
      <Testimonials />
      <div className="Gallery">
        {gallery.desktop.map( (img,index)  => 
          <img key={index} className="Gallery__img Gallery__img--desktop" src={img} alt="img" />
        )}
        {gallery.mobile.map( (img,index)  => 
          <img key={index} className="Gallery__img Gallery__img--mobile" src={img} alt="img" />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
