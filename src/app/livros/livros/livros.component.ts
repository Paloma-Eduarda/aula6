import { Livro } from './../models/livro';
import { Component } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {
 livros: Livro[] = [] //inicializando a variavel;

  constructor(){
   // this.livros = [];
  }
}
