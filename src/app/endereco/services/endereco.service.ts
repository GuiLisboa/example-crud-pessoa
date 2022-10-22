import { Injectable } from '@angular/core';

import { Endereco } from "../../shared/models/endereco.model";

const LS_CHAVE = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listAll(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  insert(endereco: Endereco): void {
    const enderecos = this.listAll();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  findById(id: number): Endereco | undefined {
    const enderecos: Endereco[] = this.listAll();
    return enderecos.find(endereco => endereco.id === id);
  }

  update(endereco: Endereco): void {
    const enderecos: Endereco[] = this.listAll();
    enderecos.forEach((obj, index, objs) => {
      if (endereco.id === obj.id) {
        objs[index] = endereco;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  remove(id: number): void {
    let enderecos: Endereco[] = this.listAll();
    enderecos = enderecos.filter(endereco => endereco.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  delete(id: number): void{
    //Obtem a lista completa
    //Feito com let para alterarmos a lista
    let enderecos : Endereco[] = this.listAll();

    //Usamos o filter(): retorna a lista, com os registros que satisfazem a condição,
    //                  como estamos ! dando um not na condição irá trazer todos menos o que pedimos.
    enderecos = enderecos.filter(endereco => endereco.id !== id);

    //Atualiza a lista de enderecos sem o nome selecionado
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
