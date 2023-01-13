import styles from "../styles/tarefas.module.css";

import Layout from "../components/layout";
import { Tarefa } from "../model/tarefa";
import Formulario from "../components/formulario";
import Input from "../components/input";
import Button from "../components/button";

export default function TODO(props) {
  function handleSubmit(tarefa: Tarefa) {
    console.log(tarefa);
  }
  
  return (
    <Layout Titulo="TO-DO List">
      <div className={styles.tarefas}>
        <h1 className={styles.titulo}></h1>
        <Formulario onSubmit={(e)=>{}} titulo="Teste">
          <Input id="txtTeste" inputType="text" label="Teste"></Input>
          <Button label="teste button" type="cancel"></Button>
        </Formulario>
      </div>
    </Layout>
  );
}
