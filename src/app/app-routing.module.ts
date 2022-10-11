import { ExcluirPessoaComponent } from './component/pessoas/excluir-pessoa/excluir-pessoa/excluir-pessoa.component';
import { CriarPessoaComponent } from './component/pessoas/criar-pessoa/criar-pessoa/criar-pessoa.component';
import { TabelaPessoaComponent } from './component/pessoas/tabela-pessoa/tabela-pessoa/tabela-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabela-pessoa', component: TabelaPessoaComponent },
  { path: 'criar-pessoa', component: CriarPessoaComponent },
  { path: 'criar-pessoa/:id', component: CriarPessoaComponent },
  { path: 'excluir-pessoa/:id', component: ExcluirPessoaComponent },
  { path: '', redirectTo: 'tabela-pessoa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
