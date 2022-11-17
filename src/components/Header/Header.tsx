import { SearchOutlined, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul className={styles.ul_items}>
          <li className={styles.li_items}>
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/denim">Denim</Link>
            <Link to="/shop" className={styles.orange}>
              The Gift Shop
            </Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <h1>Eshopland</h1>
        </div>

        <div className={styles.right}>
          <div className={styles.search}>
            <SearchOutlined className={styles.search_icon} />
            <button className={styles.sch_btn}>Search</button>
          </div>
          <div className={styles.right_buttons}>
            <button>
              <Link to="/login">Log In</Link>
            </button>
            <button>
              <Link to="/sign-up">Sign up</Link>
            </button>
            <ShoppingBasket className={styles.basket} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
