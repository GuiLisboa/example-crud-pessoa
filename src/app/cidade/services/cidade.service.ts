import { Injectable } from '@angular/core';

import { Cidade } from "../../shared/models/cidade.model";

const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listAll(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : [];
  }

  insert(cidade: Cidade): void {  
    const cidades = this.listAll();
    cidade.id = new Date().getTime();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  findById(id: number): Cidade | undefined {
    const cidades: Cidade[] = this.listAll();
    return cidades.find(cidade => cidade.id === id);
  }

  update(cidade: Cidade): void {
    const cidades: Cidade[] = this.listAll();
    cidades.forEach((obj, index, objs) => {
      if (cidade.id === obj.id) {
        objs[index] = cidade;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  delete(id: number): void {
    let cidades: Cidade[] = this.listAll();
    cidades = cidades.filter(cidade => cidade.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

}
