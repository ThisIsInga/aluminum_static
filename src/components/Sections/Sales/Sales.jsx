import style from './Sales.module.css';
import Card from '../../layout/Card/Card.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
import Window from './../Window/Window.jsx';
import StainedGlasses from '../StainedGlasses/StainedGlasses.jsx';
import img1 from './../../../../public/assets/Sale/sale1.jpg';
import img2 from './../../../../public/assets/Sale/sale2.png';
import img3 from './../../../../public/assets/Sale/sale3.png';
import img4 from './../../../../public/assets/Sale/sale4.png';
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
import window1 from './../../../../public/assets/Swiper/Windows/window1.jpg';
import window2 from './../../../../public/assets/Swiper/Windows/window2.jpg';
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
import NavBar from '../../layout/NavBar/NavBar.jsx';

function Sales() {
  const saleProducts = [
    {
      id: 1,
      newPrice: "250 000",
      oldPrice: "350 000",
      title: "Вакуумный подъёмник для стекла Итальянский",
      shortDescription: "Пневматический вакуумный подъемник для листов стекла Elephant",
      img: img1
    },
    {
      id: 2,
      newPrice: "6 000",
      oldPrice: "10 000",
      title: "Инфракрасный обогреватель Ballu BIH-T-4.5",
      shortDescription: "Отличное решение для обогрева больших помещений, цехов, гаражей или открытых площадок",
      img: img2
    },
    {
      id: 3,
      newPrice: "2 000",
      oldPrice: "4 000",
      title: "Алюминиевые композитные панели",
      shortDescription: "Идеально подходят для облицовки фасадов, изготовления наружной рекламы и интерьерной отделки",
      img: img3
    },
    {
      id: 4,
      newPrice: "2 000",
      oldPrice: "",
      title: "СКРЫТЫЕ МОСКИТНЫЕ СЕТКИ",
      shortDescription: "Скрытые москитные сетки нового поколения!",
      img: img4
    }
  ];

  const images1 = [
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

  const images2 = [
    { src: window1, alt: 'Window 1' },
    { src: window2, alt: 'Window 2' },
  ];

  const images3 = [
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
      <section className={style.container}>
      <div className={style.title}>
        <h2>Распродажа!</h2>
        <p>Забирай материалы по низким ценам!</p>
      </div>
      <div className={style.objects}>
        {saleProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            title={product.title}
            shortDescription={product.shortDescription}
            img={product.img}
          />
        ))}
      </div>
    </section>
    <Section object='ДВЕРИ'/>
    <Swiper images={images1} />
    <Section object='ОКНА'/>
    <Swiper images={images2} />
    <Section object='ВИТРАЖИ'/>
    <Swiper images={images3} /> 
    </section>
  );
}

export default Sales;