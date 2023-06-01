import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-upload-curriculo',
  templateUrl: './upload-curriculo.component.html',
  styleUrls: ['./upload-curriculo.component.css']
})
export class UploadCurriculoComponent {

  faUpload = faUpload;

  event: any;

  text:string = "Upload Currículo";

  formulario: FormGroup = new FormGroup ({
    curriculo: new FormControl()
  });

  constructor(
    private authService: AuthService
  ){}

  showFile(file:any){
    let arr
    arr = file.value;
    arr = arr.split('\\')
    this.text = arr[arr.length-1]
  }

  uploadCurriculo(){
    this.authService.uploadCurriculo(this.event.target.files[0] , this.text);
    console.log(this.event.target.files[0] , this.text)
  }



}
