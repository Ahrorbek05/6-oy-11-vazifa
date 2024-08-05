import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.css';
import { ThemeContext } from '../../App';
import logo from '../../../public/logo.svg';

function Header() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value); 
  }

  return (
    <header className={`${styles.header} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}>
      <div className={styles.logo}>
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">{t('home')}</a></li>
          <li><a href="/categories">{t('categories')}</a></li>
          <li><a href="/sales">{t('sales')}</a></li>
          <li><a href="/faq">{t('faq')}</a></li>
          <li><a href="/about">{t('about')}</a></li>
          <li><a href="/contact">{t('contact')}</a></li>
        </ul>
      </nav>
      <div className={styles.languageSelect}>
        <select onChange={changeLanguage} value={i18n.language || 'uz'}>
          <option value="uz">UZ</option>
          <option value="en">ENG</option>
          <option value="ru">RU</option>
        </select>
      </div>
      <div className={styles.auth}>
        <a href="#" className={styles.signIn}>{t('signIn')}</a>
        <a href="#" className={styles.signUp}>{t('signUp')}</a>
      </div>
    </header>
  );
}

export default Header;
