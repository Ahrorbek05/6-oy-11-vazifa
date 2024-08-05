import React, { useContext } from 'react';
import styles from './index.module.css';
import { ThemeContext } from '../../App';
import { useTranslation } from 'react-i18next';
import hero from '../../../public/hero.png';
import image from '../../../public/image.png';
import heroImage from '../../../public/heroImage.png';

function Hero() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  function handleClick(newTheme) {
    setTheme(newTheme);
  }

  return (
    <div className={`${styles.hero} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}>
      <div className={styles.heroText}>
        <button
          className={`${styles.mode} ${theme === 'light' ? styles.active : ''}`}
          onClick={() => handleClick('light')}
        >
          <i className="fa-regular fa-sun"></i>
        </button>
        <button
          className={`${styles.mode} ${theme === 'dark' ? styles.active : ''}`}
          onClick={() => handleClick('dark')}
        >
          <i className="fa-solid fa-moon"></i>
        </button>
        <h1>{t('Let')}<span className={styles.highlight}></span></h1>
        <p> {t('Get')}</p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search here" />
          <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className={styles.features}>
          <span className={styles.span}>
            <span><i className="fa-regular fa-circle-check"></i> {t('Fresh')} </span>
            <span><i className="fa-regular fa-circle-check"></i> {t('Guarantee')}</span>
          </span>
          <span className={styles.span}>
            <span><i className="fa-regular fa-circle-check"></i> {t('Cash')}</span>
            <span><i className="fa-regular fa-circle-check"></i> {t('Fast')}</span>
          </span>
        </div>
      </div>
      <div>
        <img className={styles.heroImage} src={hero} alt="Groceries delivery" />
      </div>
      <div className={styles.heroImg}>
        <div className={styles.wrapper}>
          <img src={heroImage} alt="" />
          <p>{t('Spinach')}</p>
          <p>$12.00</p>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.image} src={image} alt="" />
          <p>{t('Carrot')}</p>
          <p>$9.00</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
