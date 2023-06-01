import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../login/user';

interface Vaga {
  value: string;
  viewValue: string;
}
interface Sexo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  faUpload = faUpload;

  hide:boolean = true;
  confirmarSenha:boolean = true;

  vagas: Vaga[] = [
    {value: 'dev-0', viewValue: 'Desenvolvedor'},
    {value: 'advogado-1', viewValue: 'Advogado'},
    {value: 'engenheiro-2', viewValue: 'Engenheiro'},
  ];

  sexos: Sexo[] = [
    {value: 'masculino', viewValue: 'Masculino'},
    {value: 'feminino', viewValue: 'Feminino'},
    {value: 'outros', viewValue: 'Outros'}
  ]

  text:string = "Upload Currículo";

  formulario: FormGroup = new FormGroup ({
    nome: new FormControl(),
    email: new FormControl(),
    senha: new FormControl()
  });


  constructor(
      private authService: AuthService,
      private router: Router,
  ){

  }

  registrarUsuario(){
    this.authService.register(this.formulario.value);
  }

  showFile(file:any){
    let arr
    arr = file.value;
    arr = arr.split('\\')
    this.text = arr[arr.length-1]
  }

}
