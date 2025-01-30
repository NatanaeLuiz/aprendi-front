export interface Instituicao {
  nome: string;
  cpfOuCnpj: string;
  quantidadeLicencasProfessor: number | null;
  quantidadeLicencasAluno: number | null;
}
