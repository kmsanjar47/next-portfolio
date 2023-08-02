import { link } from "fs";
import styles from "./navbar.module.css";
import Link from "next/link";
import React from "react";

const itemMap = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "Portfolio", link: "/portfolio" },
  { id: 2, title: "Blog", link: "/blog" },
  { id: 3, title: "About", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
  { id: 5, title: "Dashboard", link: "/dashboard" },
];

function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_container_logo}>Logo</div>
      <div className={styles.navbar_container_items}>
        {itemMap.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={styles.navbar_container_item}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
