import React from 'react';
import styles from './index.module.css';

function Footer() {
    
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
            <img src="./src/assets/dairy.png" alt="" />
          <h3>Dairy Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
            <img src="./src/assets/fruits.png" alt="" />
          <h3>Vegetables & Fruits</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
            <img src="./src/assets/condiments.png" alt="" />
          <h3>Spices & Seasonings</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
            <img src="./src/assets/babyfood.png" alt="" />
          <h3>Honey</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
            <img src="./src/assets/grain.png" alt="" />
          <h3>Flour</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;