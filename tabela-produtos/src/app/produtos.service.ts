import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }


  getProdutos(): Observable<Produtos[]>{
  let url = "http://localhost:3000/produtos";

  return this.http.get<Produtos[]>(url);
  }
}
