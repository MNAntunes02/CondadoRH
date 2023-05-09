import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
}
