import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {

    private http = inject(HttpClient);
    private API_URL = 'http://localhost:3000/libros'
  
    getLibros(): Observable<any>{
      return this.http.get<any>(this.API_URL);
    }
}
