import { useState } from "react";
import styles from "../styles/formulario.module.css";
import { Tarefa } from "../model/tarefa";

interface FormularioProps {
  onSubmit: (tarefa: Tarefa) => void;
}

export default function Formulario(props: FormularioProps) {
  const [tarefa, setTarefa] = useState("");

  function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    const novaTarefa = Tarefa.novaTarefaPendente(1, tarefa);
    props.onSubmit(novaTarefa);
  }

  return (
    <div className={styles.formulario}>
      <h2 className={styles.subtitulo}>Adicionar Tarefa</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="txtTarefa">
            Tarefa:
          </label>
          <input
            type="text"
            id="txtTarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
          />
        </div>
        <button type="submit">Incluir Tarefa</button>
      </form>
    </div>
  );
}
