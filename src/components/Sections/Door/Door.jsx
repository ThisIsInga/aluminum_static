import style from './Door.module.css';
import NavBar from '../../layout/NavBar/NavBar.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
// import Footer from './../Footer/Footer.jsx'
import door1 from './../../../../public/assets/Swiper/Doors/doors1.jpg';
import door2 from './../../../../public/assets/Swiper/Doors/doors2.jpg';
import door3 from './../../../../public/assets/Swiper/Doors/doors3.jpg';
import door4 from './../../../../public/assets/Swiper/Doors/doors4.jpg';
import door5 from './../../../../public/assets/Swiper/Doors/doors5.jpg';
import door6 from './../../../../public/assets/Swiper/Doors/doors6.jpg';
import door7 from './../../../../public/assets/Swiper/Doors/doors7.jpg';
import door8 from './../../../../public/assets/Swiper/Doors/doors8.jpg';
import door9 from './../../../../public/assets/Swiper/Doors/doors9.jpg';
import door10 from './../../../../public/assets/Swiper/Doors/doors10.jpg';
import door11 from './../../../../public/assets/Swiper/Doors/doors11.jpg';
import door12 from './../../../../public/assets/Swiper/Doors/doors12.jpg';

function Door() {
  const images = [
    { src: door1, alt: 'Doors 1' },
    { src: door2, alt: 'Doors 2' }, 
    { src: door3, alt: 'Doors 3' },
    { src: door4, alt: 'Doors 4' },
    { src: door5, alt: 'Doors 5' },
    { src: door6, alt: 'Doors 6' },
    { src: door7, alt: 'Doors 7' },
    { src: door8, alt: 'Doors 8' },
    { src: door9, alt: 'Doors 9' },
    { src: door10, alt: 'Doors 10' },
    { src: door11, alt: 'Doors 11' },
    { src: door12, alt: 'Doors 12' },
  ];

  return (
    <section>
      <NavBar />
      <Section object='ДВЕРИ'/>
      <Swiper images={images} />
      {/* <Footer /> */}
    </section>
  );
}

export default Door;
