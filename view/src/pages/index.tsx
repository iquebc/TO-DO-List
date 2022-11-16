import Formulario from "../components/formulario";
import styles from "../styles/tarefas.module.css";
import { Tarefa } from "../model/tarefa";

export default function Home() {
  function handleSubmit(tarefa: Tarefa) {
    console.log(tarefa);
  }

  return (
    <div className={styles.tarefas}>
      <h1 className={styles.titulo}>TO DO List</h1>
      <Formulario onSubmit={handleSubmit}></Formulario>
    </div>
  );
}
