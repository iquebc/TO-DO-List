import styles from "../styles/button.module.css";

interface IButton {
  label: string;
  id: string;
  onClick?: () => void;
  type: "primary" | "cancel";
  isLoading: boolean;
}

export default function Button(props: IButton) {
  return (
    <button
      id={props.id}
      className={`${styles.button} ${styles[props.type]}`}
      onClick={() => props.onClick()}
      disabled={props.isLoading}
    >
      {props.isLoading ? "Carregando" : props.label}
    </button>
  );
}
