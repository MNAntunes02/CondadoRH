import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './pages/login/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { getAuth } from '@angular/fire/auth';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'condado-front';
  faLinkedinIn = faLinkedinIn;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faUserCircle = faUserCircle;
  faRightFromBracket = faRightFromBracket;
  sidenav = false;

  currentToken:string|null = null;
  currentPhoto:string|null = null;
  currentName:string|null = null;
  primeiroNome = "";
  resto: string[]|never = [];

  constructor(
    private authService: AuthService,
    private firestore: Firestore,
    private router: Router
  ){

    AOS.init();
    window.addEventListener('load', AOS.refresh)

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

    this.getInfoLocalStorage().then(()=> {
      console.log('')  
    },(e) => {
      authService.openSnackBar('Algo deu errado, tente logar mais tarde!', "red-snackbar");
    });
    this.authService.usuarioLogado()

    console.log(this.currentPhoto)
  }

  async getInfoLocalStorage(){
    this.currentToken = localStorage.getItem('token');
    this.currentPhoto = localStorage.getItem('photo');
    this.currentName = localStorage.getItem('name');
    if (this.currentToken !== null) {this.currentToken = this.currentToken.replace(/["]/g, '')}
    if (this.currentPhoto !== null) {this.currentPhoto = this.currentPhoto.replace(/["]/g, '')}
    if (this.currentName !== null) {
      this.currentName = this.currentName.replace(/["]/g, '');
      [this.primeiroNome, ...this.resto] = this.currentName.split(" ");
    }
  }

  async logout(){
    await this.authService.logout();
    location.reload();
  }
  
  closeSidenav(){
    this.sidenav = false
  }
  
  openSidenav(){
    this.sidenav = true
  }

}
