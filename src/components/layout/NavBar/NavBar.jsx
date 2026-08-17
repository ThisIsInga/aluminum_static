import style from './NavBar.module.css';
import companyLogo from './../../../../public/assets/primary/company.png'
import mapLogo from './../../../../public/assets/primary/icons/map.png'
import phoneCallLogo from './../../../../public/assets/primary/icons/phone-call.png'
import emailLogo from './../../../../public/assets/primary/icons/email.png'

function NavBar() {
  return (
    <section className={style.navBar}>
      <div className={style.menu}>
        <div className={style.title}>
          <img 
            src={companyLogo}
            alt="Логотип компании" 
            className={style.logo}
          />
          <h1>Алюкон ДВ</h1>
          <p>Производство алюминиевых конструкций</p>
        </div>
        <div className={style.info}>
          <p className={style.infoItem}>
            <img 
              src={mapLogo}
              alt="Адрес" 
              className={style.icon}
            />
            г.Хабаровск, ул.Оборская 11-Б
          </p>
          <p className={style.infoItem}>
            <img 
              src={phoneCallLogo}
              alt="Телефон" 
              className={style.icon}
            />
            +7-999-080-98-00
          </p>
          <p className={style.infoItem}>
            <img 
              src={emailLogo}
              alt="Электронная почта" 
              className={style.icon}
            />
            alukon@mail.ru
          </p>
        </div>
      </div>
    </section>
  );
}

export default NavBar;