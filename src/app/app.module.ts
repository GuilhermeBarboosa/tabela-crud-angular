import { ExcluirPessoaComponent } from './component/pessoas/excluir-pessoa/excluir-pessoa/excluir-pessoa.component';
import { CriarPessoaComponent } from './component/pessoas/criar-pessoa/criar-pessoa/criar-pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaPessoaComponent } from './component/pessoas/tabela-pessoa/tabela-pessoa/tabela-pessoa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TabelaPessoaComponent,
    CriarPessoaComponent,
    ExcluirPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
