import { Component, OnInit } from '@angular/core';

import { EnderecoService } from "../services/endereco.service";
import { Endereco } from "../../shared/models/endereco.model";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecos = this.listAll();
  }
  
  listAll(): Endereco[] {
    return this.enderecoService.listAll();
  }

  delete($event: any, endereco : Endereco): void {
    $event.preventDefault();
    Swal.fire({
      title: `Deseja realmente remover a endereco ${endereco.rua}?`,
      showCancelButton: true,
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.enderecoService.delete(endereco.id!);
        this.enderecos = this.listAll();
        Swal.fire('Excluído com Sucesso!', '', 'success');
      } 
    })
  }

}
