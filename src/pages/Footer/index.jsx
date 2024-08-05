import React, { useContext } from 'react';
import styles from './index.module.css';
import { ThemeContext } from '../../App';
import { useTranslation } from 'react-i18next';
import baby from '../../../public/babyfood.png';
import diary from '../../../public/condiments.png';
import fruit from '../../../public/fruits.png';
import grain from '../../../public/grain.png';
import condiments from '../../../public/condiments.png';

function Footer() {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}>
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
            <img src={diary} alt="" />
          <h3>{t('Dairy Products')}</h3>
          <p>{t('Lorem')}</p>
        </div>
        <div className={styles.footerItem}>
            <img src={fruit} alt="" />
          <h3>{t('Vegetables & Fruits')}</h3>
          <p>{t('Lorem')}</p>
        </div>
        <div className={styles.footerItem}>
            <img src={condiments} alt="" />
          <h3>{t('Spices & Seasonings')}</h3>
          <p>{t('Lorem')}</p>
        </div>
        <div className={styles.footerItem}>
            <img src={baby} alt="" />
          <h3>{t('Honey')}</h3>
          <p>{t('Lorem')}</p>
        </div>
        <div className={styles.footerItem}>
            <img src={grain} alt="" />
          <h3>{t('Flour')}</h3>
          <p>{t('Lorem')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
