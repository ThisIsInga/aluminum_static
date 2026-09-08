import testWindow from './../../../../public/assets/New/test_window.mp4';
import style from './NewTemplates.module.css';
import { Link } from 'react-router-dom';

function New () {
    return(
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
                <p>Скрытые москитыне сетки</p>
            </div>
       </section> 
    )
}

export default New;