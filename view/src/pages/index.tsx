import { useRouter } from "next/router";
import { useState } from "react";
import Alert from "../components/alert";
import Button from "../components/button";
import Formulario from "../components/formulario";
import Input from "../components/input";
import { useMessage } from "../data/hook/useAlert";
import useUser from "../data/hook/useUser";
import userList from "../data/mock/userList";
import UserModel from "../model/user";
import styles from "../styles/login.module.css";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, showAlert] = useMessage();
  const userContext = useUser();
  const route = useRouter();

  function handleSubmit(e) {
    setLoading(true);
    const user = authUser(email, senha);
    if (!user) {
      showAlert("Usuário ou Senha Inválido");
      console.log("Usuário ou Senha Inválido");
      setLoading(false);
      return;
    }

    userContext.setUser(user);
    setTimeout(() => {
      route.push("/home");
    }, 2000);
  }

  function authUser(email: string, senha: string): UserModel | undefined {
    const user = userList.find((x) => x.email === email && x.senha === senha);
    console.log(user);
    return user;
  }

  return (
    <div className={styles.login}>
      <Alert></Alert>
      <Formulario onSubmit={(e) => handleSubmit(e)} titulo="Login">
        <Input
          id="txtEmail"
          label="E-mail"
          placeholder="E-mail"
          inputType="email"
          value={email}
          onChange={(value) => setEmail(value)}
          required
        ></Input>
        <Input
          id="txtSenha"
          label="Senha"
          placeholder="Senha"
          inputType="password"
          value={senha}
          onChange={(value) => setSenha(value)}
          required
        ></Input>
        <Button
          id="btnSalvar"
          type="primary"
          label="Salvar"
          onClick={() => console.log("cliquei")}
          isLoading={loading}
        ></Button>
      </Formulario>
    </div>
  );
}
