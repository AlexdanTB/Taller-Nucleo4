import { Component, inject, OnInit, signal } from '@angular/core';
import { LibrosService } from '../../services/libros-service';
import { Usuario, UsuariosService } from '../../services/usuarios-service';
import { auth } from '../../configs/firebaseConfig';
import { map } from 'rxjs';

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
  private usuarioService = inject(UsuariosService)

  libros= signal<Libro[]>([]) 

  ngOnInit(){
    this.libroService.getLibros().subscribe(datos=> this.libros.set(datos))   
  }



}
