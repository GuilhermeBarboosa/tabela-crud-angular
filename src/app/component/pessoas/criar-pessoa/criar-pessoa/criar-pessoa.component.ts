import { Pessoa } from './../../../../model/pessoas.model';
import { PessoasService } from './../../../../service/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css'],
})
export class CriarPessoaComponent implements OnInit {
  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    idade: 0,
  };

  constructor(
    private pessoasService: PessoasService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.activedRoute.snapshot.params['id'] != null) {
      this.pessoasService
        .readById(this.activedRoute.snapshot.params['id'])
        .subscribe((pessoa) => {
          this.pessoa = pessoa;
          console.log(this.pessoa);
        });
    }
  }

  onSubmit() {
    this.pessoasService.createPessoa(this.pessoa).subscribe(() => {
      this.router.navigateByUrl('/tabela-pessoa');
    });
  }
}
