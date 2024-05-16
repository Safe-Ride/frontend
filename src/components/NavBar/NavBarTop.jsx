import React from "react";
import styles from "./NavBarTop.module.css";

const NavBarTop = ({ titulo }) => {
  return (
    <nav className={styles["navbartop"]}>
      <p>{titulo}</p>
    </nav>
  );
};

export default NavBarTop;
