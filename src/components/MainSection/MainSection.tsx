import React from "react";
import styles from "./MainSection.module.scss";

const MainSection: React.FC = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.content}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <button>Discover</button>
      </div>
      <div className={styles.bottom_text}>
        <p>10% off for all products</p>
      </div>
    </section>
  );
};

export default MainSection;
