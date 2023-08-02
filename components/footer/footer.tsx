import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_container_text}>
        @2023 || All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
