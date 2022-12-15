import { useAlert } from "../data/hook/useAlert";
import { AlertType } from "../model/alert";
import styles from "../styles/alert.module.css";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "./icons";

export default function Alert() {
  const { alert, closeAlert } = useAlert();

  function renderIcon(type: AlertType) {
    switch (type) {
      case "success":
        return <SuccessIcon></SuccessIcon>;
      case "error":
        return <ErrorIcon></ErrorIcon>;
      case "warning":
        return <WarningIcon></WarningIcon>;
      case "info":
        return <InfoIcon></InfoIcon>;
    }
  }

  return alert ? (
    <div className={styles.alertContainer}>
      <div className={`${styles.alertBody} ${styles[alert.type]}`}>
        <div className={styles.alertIcon}>{renderIcon(alert.type)}</div>
        <div className={styles.messageContainer}>
          <h2 className={styles.title}>{alert.title}</h2>
          <p className={styles.message}>{alert.message}</p>
        </div>
        <button className={styles.closeButton} onClick={() => closeAlert()}>
          X
        </button>
      </div>
    </div>
  ) : null;
}
