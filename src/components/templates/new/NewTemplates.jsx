import testWindow from './../../../../public/assets/New/test_window.mp4';
import windowVideo from './../../../../public/assets/New/window.mp4';
import { oneProduct } from '../../data/oneProduct';
import Card from './../../layout/Card/Card.jsx';
import style from './NewTemplates.module.css';
import { Link } from 'react-router-dom';

function New () {
    const product = oneProduct[0];

    return(
        <Link to={`/product/${product.id}`} state={{ product }}>
            <section className={style.newBackground}>
                <div className={style.video}>
                    <video 
                        src={testWindow}
                        autoPlay
                        loop
                        muted
                    />
                </div>
                <div className={style.text}>
                    <h2>НОВИНКА</h2>
                    <p>Скрытые москитные сетки</p>
                </div>
                <div className={style.video}>
                    <video 
                        src={windowVideo}
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </section> 
        </Link>
    )
}

export default New;