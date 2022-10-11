export interface Pessoas extends Array<Pessoa> {}

export interface Pessoa {
  id?: number;
  nome: string;
  cpf: string;
  idade: number;
}

export interface PessoasAPI {
  payload: Pessoa;
}
