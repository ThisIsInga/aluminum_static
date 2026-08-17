import style from './StainedGlasses.module.css';
import NavBar from '../../layout/NavBar/NavBar.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
// import Footer from './../Footer/Footer.jsx'
import stainedGlasses1 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses1.jpg';
import stainedGlasses2 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses2.jpg';
import stainedGlasses3 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses3.jpg';
import stainedGlasses4 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses4.jpg';
import stainedGlasses5 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses5.jpg';
import stainedGlasses6 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses6.jpg';
import stainedGlasses7 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses7.jpg';
import stainedGlasses8 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses8.jpg';
import stainedGlasses9 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses9.jpg';
import stainedGlasses10 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses10.jpg';
import stainedGlasses11 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses11.jpg';
import stainedGlasses12 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses12.jpg';
import stainedGlasses13 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses13.jpg';
import stainedGlasses14 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses14.jpg';
import stainedGlasses15 from './../../../../public/assets/Swiper/StainedGlasses/StainedGlasses15.jpg';

function StainedGlasses() {
  const images = [
    { src: stainedGlasses1, alt: 'StainedGlasses 1' },
    { src: stainedGlasses2, alt: 'StainedGlasses 2' },
    { src: stainedGlasses3, alt: 'StainedGlasses 3' },
    { src: stainedGlasses4, alt: 'StainedGlasses 4' },
    { src: stainedGlasses5, alt: 'StainedGlasses 5' },
    { src: stainedGlasses6, alt: 'StainedGlasses 6' },
    { src: stainedGlasses7, alt: 'StainedGlasses 7' },
    { src: stainedGlasses8, alt: 'StainedGlasses 8' },
    { src: stainedGlasses9, alt: 'StainedGlasses 9' },
    { src: stainedGlasses10, alt: 'StainedGlasses 10' },
    { src: stainedGlasses11, alt: 'StainedGlasses 11' },
    { src: stainedGlasses12, alt: 'StainedGlasses 12' },
    { src: stainedGlasses13, alt: 'StainedGlasses 13' },
    { src: stainedGlasses14, alt: 'StainedGlasses 14' },
    { src: stainedGlasses15, alt: 'StainedGlasses 15' },
  ];

  return (
    <section>
      <NavBar />
      <Section object='ВИТРАЖИ'/>
      <Swiper images={images} /> 
      {/* <Footer /> */}
    </section>
  );
}

export default StainedGlasses;
