import { Instituicao } from "../../instituicao/model/instituicao.model";
import { Modulo } from "../../modulos/modulo.model";

export interface Curso {
  nome: string;
  descricao: string;
  isAtivo: boolean;
  urlBanner: string;
  cargaHoraria: string;
  dataCriacao: string;  // ou Date dependendo de como o backend envia os dados
  dataAtualizacao: string;  // ou Date
  instituicao: Instituicao;
  modulos: Modulo[];
}
