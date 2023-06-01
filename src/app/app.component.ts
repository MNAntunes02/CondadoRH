import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faRightFromBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './pages/login/auth.service';
import { Router } from '@angular/router';

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

  currentToken:string|null = null;
  currentPhoto:string|null = null;
  currentName:string|null = null;
  primeiroNome = "";
  resto: string[]|never = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ){
    this.getInfoLocalStorage();
  }

  getInfoLocalStorage(){
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

  logout(){
    this.authService.logout();
    location.reload();
  }


  redirectToCadastro(){
    this.router.navigate(['/cadastro']);
  }



}
