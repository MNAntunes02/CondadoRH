import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faLinkedinIn = faLinkedinIn;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

}
