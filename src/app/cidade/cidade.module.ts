import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadeService } from './services/cidade.service';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarCidadeComponent,
    EditarCidadeComponent,
    InserirCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [ 
    CidadeService
  ]
})
export class CidadeModule { }
