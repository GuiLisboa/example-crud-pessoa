import { Injectable } from '@angular/core';

import { Estado } from "../../shared/models/estado.model";

const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listAll(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados) : [];
  }

  insert(estado: Estado): void {  
    const estados = this.listAll();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  findById(id: number): Estado | undefined {
    const estados: Estado[] = this.listAll();
    return estados.find(estado => estado.id === id);
  }

  update(estado: Estado): void {  
    const estados: Estado[] = this.listAll();
    estados.forEach((obj, index, objs) => {
      if (estado.id === obj.id) {
        objs[index] = estado;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  delete(id: number): void {
    let estados: Estado[] = this.listAll();
    estados = estados.filter(estado => estado.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
