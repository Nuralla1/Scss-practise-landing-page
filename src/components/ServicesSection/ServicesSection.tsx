import React from "react";
import styles from "./ServicesSection.module.scss";
import avatar1 from "../../assets/avatar_19.jpg";
import avatar2 from "../../assets/avatar_20.jpg";
import avatar3 from "../../assets/avatar_21.jpg";
import avatar4 from "../../assets/avatar_22.jpg";

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.main_text}>
        <h1>Ipsam impedit aspernatur odit ex ratione!</h1>
      </div>

      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.gift}>
            <img src={avatar1} alt="avatar" />
            <p>Quaerat avatar recusandae iure odit? Enim quia illo vero!</p>
            <p>Enim quia illo vero!</p>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.gift}>
            <img src={avatar2} alt="avatar" />
            <p>Quaerat avatar recusandae iure odit?</p>
            <p>Enim quia illo vero!</p>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.gift}>
            <img src={avatar3} alt="avatar" />
            <p>Quaerat avatar recusandae iure odit?</p>
            <p>Enim quia illo vero!</p>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.gift}>
            <img src={avatar4} alt="avatar" />
            <p>Quaerat avatar recusandae iure odit?</p>
            <p>Enim quia illo vero!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
