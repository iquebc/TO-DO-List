import styles from "../styles/navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li className={styles.link}>
          <Link href="/home">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/">Usuários</Link>
        </li>
        <li className={styles.link}>
          <Link href="/todo">TO-DO List</Link>
        </li>
      </ul>
    </nav>
  );
}
