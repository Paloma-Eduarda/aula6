import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';

import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    LivrosComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    MatTableModule
  ]
})
export class LivrosModule { }
