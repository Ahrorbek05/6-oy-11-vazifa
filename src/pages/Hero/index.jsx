import React, { useContext } from 'react';
import styles from './index.module.css';
import { ThemeContext } from '../../App';

function Hero() {
  const { theme, setTheme } = useContext(ThemeContext);

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
        <h1>Let your <span className={styles.highlight}>groceries</span> come to you</h1>
        <p>Get fresh groceries online without stepping out to make delicious food with the freshest ingredients.</p>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search here" />
          <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className={styles.features}>
          <span className={styles.span}>
            <span><i className="fa-regular fa-circle-check"></i> Fresh Vegetables</span>
            <span><i className="fa-regular fa-circle-check"></i> 100% Guarantee</span>
          </span>
          <span className={styles.span}>
            <span><i className="fa-regular fa-circle-check"></i> Cash on Delivery</span>
            <span><i className="fa-regular fa-circle-check"></i> Fast Delivery</span>
          </span>
        </div>
      </div>
      <div>
        <img className={styles.heroImage} src="./src/assets/hero.png" alt="Groceries delivery" />
      </div>
      <div className={styles.heroImg}>
        <div className={styles.wrapper}>
          <img src="./src/assets/heroImage.png" alt="" />
          <p>Fresh Spinach</p>
          <p>$12.00</p>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.image} src="./src/assets/image.png" alt="" />
          <p>Fresh Carrot</p>
          <p>$9.00</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
