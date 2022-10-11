import { PessoasService } from './../../../../service/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pessoa',
  templateUrl: './excluir-pessoa.component.html',
  styleUrls: ['./excluir-pessoa.component.css'],
})
export class ExcluirPessoaComponent implements OnInit {
  constructor(
    private pessoasService: PessoasService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  excluirPessoa() {
    const id = this.activedRoute.snapshot.params['id'];
    this.pessoasService.excluirPessoa(id).subscribe((res) => {
      this.router.navigate(['/tabela-pessoa']);
    });
  }

  fecharModal() {
    this.router.navigate(['/tabela-pessoa']);
  }
}
