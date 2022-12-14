export interface IUser {
  nome: string;
  email: string;
  senha: string;
}

export default class UserModel {
  #nome: string;
  #email: string;
  #senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.#nome = nome;
    this.#email = email;
    this.#senha = senha;
  }

  static usuario(nome: string, email: string, senha: string = "") {
    return new UserModel(nome, email, senha);
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get senha() {
    return this.#senha;
  }
}
