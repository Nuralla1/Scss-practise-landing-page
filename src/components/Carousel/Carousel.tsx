import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  slides: Record<string, string>[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log(styles);

  return (
    <div className={styles.carousel_main}>
      <div className={styles.arrows}>
        <ArrowLeftOutlined
          className={styles.left}
          onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
        />
        <ArrowRightOutlined
          className={styles.right}
          onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
        />
      </div>
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current ? styles.carousel_active : styles.carousel
            }
          >
            {index === current && (
              <div className={styles.data_item}>
                <div className={styles.texts}>
                  <p className={styles.title}>{slide.title}</p>
                  <p className={styles.text}>{slide.text}</p>
                </div>
                <img src={slide.image} alt={slide.title} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
