import { Component, OnInit } from '@angular/core';

import { EstadoService } from '../services/estado.service';
import { Estado } from 'src/app/shared/models/estado.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  estados: Estado[] = [];

  constructor(private estadoService : EstadoService) { }

  ngOnInit(): void {
    this.estados = this.estadoService.listAll();
  }

  listAll(): Estado[] {
    return this.estadoService.listAll();
  }

  delete($event: any, estado : Estado): void {
    $event.preventDefault();
    Swal.fire({
      title: `Deseja realmente remover o estado ${estado.nome}?`,
      showCancelButton: true,
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.estadoService.delete(estado.id!);
        this.estados = this.listAll();
        Swal.fire('Excluído com Sucesso!', '', 'success');
      } 
    })
  }
}
