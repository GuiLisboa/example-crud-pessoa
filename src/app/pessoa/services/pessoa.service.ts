import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';


import { Pessoa } from "../../shared/models/pessoa.model";

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listAll() {
    const pessoas = localStorage[LS_CHAVE];
    //Precisa de condicional, pois retorna undefined se a chave não existe.
    return pessoas ? JSON.parse(pessoas) : []
  }

  insert(pessoa : Pessoa): void {
    //Obetem a lista completa de pessoas. 
    const pessoas = this.listAll();

    //Seta um unico ID, referente ao time de segundos desde 1970 
    pessoa.id = new Date().getTime();

    //Adiciona a pessoa no final da lista.
    pessoas.push(pessoa);

    //Armazena no LocalStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  findId(id : number) : Pessoa | undefined {
    //Obtem a lista completa de pessoas
    const pessoas : Pessoa[] = this.listAll();

    //Efetua a busca, o médoto find() retorna o primeiro id que achar
    return pessoas.find(pessoa => pessoa.id === id)
  }

  update(pessoa : Pessoa): void {
    //Listar todas as pessoas
    const pessoas : Pessoa [] = this.listAll();

    //Varre a lista de pessoas, quando encontra a pessoa com o ID  altera a lista
    pessoas.forEach((obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index ] = pessoa;
      }
    });

    //Armazena no LocalStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  delete(id: number): void{
    //Obtem a lista completa
    //Feito com let para alterarmos a lista
    let pessoas : Pessoa[] = this.listAll();

    //Usamos o filter(): retorna a lista, com os registros que satisfazem a condição,
    //                  como estamos ! dando um not na condição irá trazer todos menos o que pedimos.
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);

    //Atualiza a lista de pessoas sem o nome selecionado
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
