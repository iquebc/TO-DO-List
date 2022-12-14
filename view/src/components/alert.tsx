import { useEffect } from "react";
import { useMessage } from "../data/hook/useAlert";
import styles from "../styles/alert.module.css";

export default function Alert() {
  const [message, setMessage] = useMessage();

  useEffect(() => {
    setMessage("Teste");
  },[]);

  return message ? (
    <div className={styles.alertContainer}>
      <div className={styles.alertBody}>{message}</div>
    </div>
  ) : null;
}
