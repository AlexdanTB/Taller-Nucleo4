import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configs/firebaseConfig';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  registrar(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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
        alert('Sesión iniciada correctamente')
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });

  }

}
