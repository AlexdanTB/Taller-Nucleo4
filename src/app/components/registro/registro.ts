import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})

export class Registro {

  private authService = inject(AuthService);

  name=""
  email=""
  password=""

  registro(){
    this.authService.registrar(this.email, this.password, this.name);
  }

}
