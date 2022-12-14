import styles from "../styles/input.module.css";

interface IInputProps {
  label: string;
  inputType: "text" | "password" | "email";
  placeholder: string;
  id: string;
  value: any;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function Input(props: IInputProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
      <input
        type={props.inputType}
        id={props.id}
        placeholder={props.placeholder}
        className={styles.input}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        required
        name={props.id}
      ></input>
    </div>
  );
}
