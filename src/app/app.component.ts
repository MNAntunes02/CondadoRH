import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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


}
