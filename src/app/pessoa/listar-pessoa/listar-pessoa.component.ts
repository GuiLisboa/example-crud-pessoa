import { Component, OnInit } from '@angular/core';

import { PessoaService } from "../services/pessoa.service";
import { Pessoa } from 'src/app/shared';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas : Pessoa [] = [];

  constructor(private pessoaService : PessoaService) { }

  ngOnInit(): void {
    this.pessoas = this.listAll();
  }

  listAll(): Pessoa[] {
    
    return this.pessoaService.listAll();
  }

  delete($event: any, pessoa : Pessoa): void {
    $event.preventDefault();
    Swal.fire({
      title: `Deseja realmente remover a pessoa ${pessoa.nome}?`,
      showCancelButton: true,
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.pessoaService.delete(pessoa.id!);
        this.pessoas = this.listAll();
        Swal.fire('Excluído com Sucesso!', '', 'success');
      } 
    })
  }
}
