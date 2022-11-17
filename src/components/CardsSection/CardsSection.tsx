import React from "react";
import styles from "./CardsSection.module.scss";
import cover1 from "../../assets/cover_1.jpg";
import cover2 from "../../assets/cover_2.jpg";
import cover3 from "../../assets/cover_3.jpg";
import cover4 from "../../assets/main.jpg";

const CardsSection: React.FC = () => {
  return (
    <section className={styles.cards_section}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={cover1} alt="lorem" />
          <p>Lorem</p>
          <h1>Lorem ipsum dolor</h1>
        </div>
        <div className={styles.card}>
          <img src={cover2} alt="ipsum" />
          <p>Ipsum</p>
          <h1>Consectetur adipisicing elit</h1>
        </div>
        <div className={styles.card}>
          <img src={cover3} alt="accusantium" />
          <p>Accusantium</p>
          <h1> Accusantium facilis</h1>
        </div>
        <div className={styles.card}>
          <img src={cover4} alt="culpa" />
          <p>Culpa</p>
          <h1>Consectetur molestiae</h1>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
