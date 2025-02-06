import { Modulo } from "../../modulos/modulo.model";

export interface Curso {
  nome: string;
  descricao: string;
  ativo: boolean;
  urlBanner: string;
  cargaHoraria: string;
  dataCriacao: string;
  dataAtualizacao: string;
  instituicao: string;
  uuid: string,
  modulos: Modulo[];
}
