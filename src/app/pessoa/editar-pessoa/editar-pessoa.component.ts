import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  @ViewChild("formPessoa") formPessoa!: NgForm;
  pessoa!: Pessoa;

    constructor(
      private pesssoaService : PessoaService,
      private route : ActivatedRoute,
      private router : Router
    ) { }

  ngOnInit(): void {
    let id =+ this.route.snapshot.params['id'];

    const res = this.pesssoaService.findId(id);
    if (res !== undefined) {
      this.pessoa = res;
    }
    else{
      throw new Error("Pessoa não encontrada" + id);
      
    }
  }

  update() : void{
    if (this.formPessoa.form.valid) {
      this.pesssoaService.update(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }

}
