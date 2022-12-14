import { BaseSyntheticEvent } from "react";
import styles from "../styles/formulario.module.css";

interface FormularioProps {
  onSubmit: (e:BaseSyntheticEvent) => void;
  children?: any;
  titulo: string;
}

export default function Formulario(props: FormularioProps) {
  
  function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    props.onSubmit(e);
  }

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <h1 style={{ fontSize: "2rem", color: "cornflowerblue" }}>
        {props.titulo}
      </h1>
      {props.children}
    </form>
  );
}
