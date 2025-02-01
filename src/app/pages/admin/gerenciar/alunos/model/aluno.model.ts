import { Instituicao } from '../../instituicao/model/instituicao.model';
import { Telefone } from './telefone.model';
import { TipoUsuarioEnum } from './tipoUsuarioEnum.model';

export interface Aluno {
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
