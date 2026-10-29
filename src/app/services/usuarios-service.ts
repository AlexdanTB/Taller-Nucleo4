import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { auth, database } from '../configs/firebaseConfig';
import { child, get, onValue, ref } from 'firebase/database';

export interface Usuario {
  nombre: string,
  email: string,
  role: string
}

@Injectable({
  providedIn: 'root',
})

export class UsuariosService {

  role = ""

  getUsuario(): Observable<any> {
    const userId = auth.currentUser?.uid;
    const dbRef = ref(database);
    return from(get(child(dbRef, `users/${userId}`))).pipe(map(
      snapshot => snapshot.exists()? snapshot.val(): null
    ))   

  }
}