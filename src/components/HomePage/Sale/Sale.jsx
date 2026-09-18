import style from './Sale.module.css';
import { Link } from 'react-router-dom';
import Card from '../../layout/Card/Card.jsx';
import { products } from '../../data/products.js';

function Sale() {
  return (
    <section className={style.container}>
      <div className={style.title}>
        <h2>Распродажа!</h2>
        <p>Забирай материалы по низким ценам!</p>
      </div>
      <div className={style.objects}>
        {products.map((product) => (
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
      <div className={style.look}>
        <Link to="/sale">Посмотреть ещё...</Link>
      </div>
    </section>
  );
}

export default Sale;