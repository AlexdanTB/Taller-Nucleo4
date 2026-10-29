import { inject, Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../configs/firebaseConfig';
import { ref, set } from 'firebase/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private router = inject(Router);

  registrar(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
          nombre: name,
          email: email,
          role: 'CLIENTE'
        });
        alert('Registrado')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.router.navigate(['catalogo'])
        alert('Sesión iniciada correctamente')
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });

  }

}
