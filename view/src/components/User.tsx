import styles from "../styles/user.module.css";
import useUser from "../data/hook/useUser";
import { UserIcon, LogoutIcon } from "./icons";

export default function User() {
  const { usuario } = useUser();

  return (
    <div className={styles.user}>
      <UserIcon></UserIcon>
      {usuario?.nome}
      <LogoutIcon></LogoutIcon>
    </div>
  );
}
