import style from './Window.module.css';
import NavBar from '../../layout/NavBar/NavBar.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
// import Footer from './../Footer/Footer.jsx'
import window1 from './../../../../public/assets/Swiper/Windows/window1.jpg';
import window2 from './../../../../public/assets/Swiper/Windows/window2.jpg';

function Window() {
  const images = [
    { src: window1, alt: 'Window 1' },
    { src: window2, alt: 'Window 2' },
  ];

  return (
    <section>
      <NavBar />
      <Section object='ОКНА'/>
      <Swiper images={images} />
      {/* <Footer /> */}
    </section>
  );
}

export default Window;
