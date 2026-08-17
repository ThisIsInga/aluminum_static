import style from './Statistic.module.css';
import statisticsBag from '../../../../public/assets/Statistic/bag.png';
import statisticsBuilder from './../../../../public/assets/Statistic/builder.png';
import statisticsBuilding from './../../../../public/assets/Statistic/building.png'

function Statistic() {
  return (
    <section className={style.container}>
        <div className={style.statistics}>
            <div>
                <img src={statisticsBag} alt="bag" className={style.statIcon} />
                <div className={style.statText}>
                    <h2>25</h2>
                    <p>ЛЕТ ОПЫТА РАБОТЫ</p>
                </div>
            </div>
            <div>
                <img src={statisticsBuilder} alt="builder" className={style.statIcon} />
                <div className={style.statText}>
                    <h2>215</h2>
                    <p>СТРОИТЕЛЬНЫХ ПОДРЯДА</p>
                </div>
            </div>
            <div>
                <img src={statisticsBuilding} alt="building" className={style.statIcon} />
                <div className={style.statText}>
                    <h2>800</h2>
                    <p>ЗАВЕРШЕННЫХ ПРОЕКТОВ</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Statistic;
