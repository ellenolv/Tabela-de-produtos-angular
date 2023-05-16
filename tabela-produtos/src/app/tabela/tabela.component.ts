import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  produtos: Produtos[] = [];

  constructor( private produtoService: ProdutosService){}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.produtoService.getProdutos().subscribe(
      {
        next: data => this.produtos = data,
        error: () => console.log("Erro ao chamar o endpoint")
      }
    );
  }

}
