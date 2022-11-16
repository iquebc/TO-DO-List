export class Tarefa {
  private _id: number;
  private _descricao: string;
  private _concluida: boolean;

  constructor(id: number, descricao: string, concluida = false) {
    this._id = id;
    this._descricao = descricao;
    this._concluida = concluida;
  }

  static novaTarefaPendente(id: number, descricao: string): Tarefa {
    return new Tarefa(id, descricao, false);
  }

  static novaTarefaConcluida(id: number, descricao: string): Tarefa {
    return new Tarefa(id, descricao, true);
  }

  get id(): number {
    return this._id;
  }

  get descricao(): string {
    return this._descricao;
  }

  get concluida(): boolean {
    return this._concluida;
  }

  concluirTarefa() {
    return new Tarefa(this.id, this.descricao, true);
  }
}
