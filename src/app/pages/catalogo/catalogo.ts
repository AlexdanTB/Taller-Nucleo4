import { Component, inject, OnInit, signal } from '@angular/core';
import { LibrosService } from '../../services/libros-service';

interface Libro{
  titulo: string,
  autor: string,
  genero: string,
  sinopsis: string
}

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})

export class Catalogo implements OnInit{

  private libroService = inject(LibrosService);

  libros= signal<Libro[]>([]) 

  ngOnInit(){
    this.libroService.getLibros().subscribe(datos=> this.libros.set(datos))   
  }

}
