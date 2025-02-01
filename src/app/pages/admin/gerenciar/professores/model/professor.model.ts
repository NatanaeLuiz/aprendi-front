import { TipoUsuarioEnum } from "../../alunos/model/tipoUsuarioEnum.model";

export interface Professor {
  nome: string,
  sobrenome: string,
  email: string;
  senha: string;
  tipoUsuario: TipoUsuarioEnum;  // Enum com os valores: "ADMINISTRADOR", "PROFESSOR", "ALUNO"
  instituicao: string;
  statusUsuario?: boolean;
  cpfOuCnpj: string  // O ? indica que este campo é opcional
  // telefones?: Telefone[] | null;  // Lista de telefones, também opcional
}
