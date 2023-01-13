import UserModel from "../model/user";
import styles from "../styles/header.module.css";
import NavBar from "./navbar";
import User from "./User";

interface LayoutProps {
  Titulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <NavBar></NavBar>
        <User></User>
      </header>
      {props.children}
    </>
  );
}
