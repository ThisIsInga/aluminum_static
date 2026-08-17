import style from './Highlights.module.css';
import highlightsBuild from './../../../../../public/assets/Highlights/build.jpg';

function Highlights() {
  return (
    <section className={style.container}>
      <div className={style.mainHighlights}>
        <ul>
            <li>Многолетний опыт работы</li>
            <li>Команда высококвалифицированных сотрудников</li>
            <li>Парк современной строительной техники</li>
            <li>Контроль на каждом этапе строительства</li>
        </ul>
      </div>
      <div className={style.additinalHighlights}>
        <img src={highlightsBuild}/>
        <div className={style.additinalHighlightsText}>
            <p>350+</p>
            <span>Объектов в ДФВО</span>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
