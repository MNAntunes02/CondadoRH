import { Component } from '@angular/core';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
// import { GoogleAuthProvider  } from '@angular/fire/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthService } from './auth.service';
import { Usuario } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faLinkedin = faLinkedin;

  hide:boolean = true;

  private usuarioAutenticado: boolean = false;
  usuarios$: any;
  arr: any;
  private objDB:any;
  
  formulario: FormGroup = new FormGroup ({
    email: new FormControl(),
    senha: new FormControl()
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: Firestore,
  ){

    
  }

  //Logar com Email e Senha
  async fazerlogin(){
    await this.authService.login(this.formulario.value);
  }

  //Logar com o Google
  async googleSingIn(){
    await this.authService.googleSingIn();
    location.reload();
  }

  async esqueceuSenha(email:string){
    await this.authService.forgotPassword(email);
  }
 

}
