import styles from "../styles/tarefas.module.css";

import Layout from "../components/layout";
import { Tarefa } from "../model/tarefa";
import Formulario from "../components/formulario";

export default function TODO(props) {
  function handleSubmit(tarefa: Tarefa) {
    console.log(tarefa);
  }
  
  return (
    <Layout Titulo="TO-DO List">
      <div className={styles.tarefas}>
        <h1 className={styles.titulo}></h1>
        <Formulario onSubmit={handleSubmit}></Formulario>
      </div>
    </Layout>
  );
}
