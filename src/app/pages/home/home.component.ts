import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;

  currentToken:string|null = null;
  currentPhoto:string|null = null;
  currentName:string|null = null;
  primeiroNome = "";
  resto: string[]|never = [];

  constructor(){
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

}
