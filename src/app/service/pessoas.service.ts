import { catchError, map, Observable, subscribeOn, switchMap, tap } from 'rxjs';
import { Pessoa, Pessoas, PessoasAPI } from './../model/pessoas.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {


  private urlAPI = 'http://localhost:3000/pessoas';

  constructor(private httpClient: HttpClient) {}

  public getlAll(cpf?: string) {
    return this.httpClient.get<Pessoa[]>(this.urlAPI).pipe(
      map((pessoa) => {
        return pessoa.filter((pessoa) => {
          if (cpf) {
            return pessoa.cpf.includes(cpf);
          } else {
            return pessoa;
          }
        });
      })
    );
  }

  createPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(this.urlAPI, pessoa).pipe();
  }

  excluirPessoa(id: number): Observable<Pessoa> {
    return this.httpClient.delete<Pessoa>(`${this.urlAPI}/${id}`).pipe();
  }

  readById(id: number): Observable<Pessoa> {
    console.log(id);
    return this.httpClient.get<Pessoa>(`${this.urlAPI}/${id}`).pipe();
  }
}
