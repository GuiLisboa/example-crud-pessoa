import { Component, OnInit } from '@angular/core';

import { CidadeService } from '../services/cidade.service';
import { Cidade } from '../../shared/models/cidade.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor(private cidadeService : CidadeService) { }

  ngOnInit(): void {
    this.cidades = this.cidadeService.listAll();
  }

  listAll(): Cidade[] {
    return this.cidadeService.listAll();
  }

  delete($event: any, cidade : Cidade): void {
    $event.preventDefault();
    Swal.fire({
      title: `Deseja realmente remover a cidade ${cidade.nome}?`,
      showCancelButton: true,
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.cidadeService.delete(cidade.id!);
        this.cidades = this.listAll();
        Swal.fire('Excluído com Sucesso!', '', 'success');
      } 
    })
  }
}

