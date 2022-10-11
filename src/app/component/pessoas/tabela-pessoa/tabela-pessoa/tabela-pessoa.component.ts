import { Pessoas } from './../../../../model/pessoas.model';
import { PessoasService } from './../../../../service/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, merge, switchMap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela-pessoa',
  templateUrl: './tabela-pessoa.component.html',
  styleUrls: ['./tabela-pessoa.component.scss'],
})
export class TabelaPessoaComponent {
  pessoaInput = new FormControl();

  getPessoa$ = this.pessoasService.getlAll().pipe();

  filtroInput$ = this.pessoaInput.valueChanges.pipe(
    switchMap((valorDigitado) => this.pessoasService.getlAll(valorDigitado))
  );

  pessoas$ = merge(this.getPessoa$, this.filtroInput$);

  constructor(private pessoasService: PessoasService) {}

  excluirPessoa() {
    console.log(this.pessoas$.subscribe( (pessoas) => console.log(pessoas)));
  }
}
