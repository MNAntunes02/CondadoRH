import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blob-svg',
  templateUrl: './blob-svg.component.html',
  styleUrls: ['./blob-svg.component.css']
})
export class BlobSvgComponent {

  @Input() color:string = 'primary';

  colorRGB:string = ""

  constructor(){
    switch (this.color) {
      case "dark":
        this.colorRGB = "rgb(19,15,61)"
        break;
      case "primary":
        this.colorRGB = "rgb(77,62,252)"
        break;
      case "second":
        this.colorRGB = "rgb(140,131,237)"
        break;
      case "base":
        this.colorRGB = "rgb(246,252,255)"
        break;
      default:
        this.colorRGB = "rgb(140, 131, 237)"
        break;
    }
  }

}
