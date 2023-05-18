import { Component } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

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
}
