import { Habilidade } from '../model/habilidade-model';
import { HabilidadeRepository } from './habilidade-repository';
import habilidadesData from '../db/seed/habilidades.json';

export class JsonHabilidadeRepositorio implements HabilidadeRepository {
  async findAll(): Promise<Habilidade[]> {
    return habilidadesData.habilidades;
  }
}
