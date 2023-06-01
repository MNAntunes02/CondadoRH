import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SobreVagaComponent } from '../../dialog/sobre-vaga/sobre-vaga.component';
import { CandidaturaEfetuadaComponent } from '../../dialog/candidatura-efetuada/candidatura-efetuada.component';
import { Vaga } from 'src/app/interface/vaga';
import { SalvarVagaPipe } from '../../pipes/salvar-vaga.pipe';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent {

  @Input() vaga: Vaga =  
  {
    "cargo":"",
    "localidade":"",
    "disponibilidade":"",
    "modalidade":""
  }

  salvo: boolean = false;

  faShareSquare = faShareSquare;
  faHeart = faHeart;
  faHeartCircleCheck = faHeartCircleCheck;

  constructor(public dialog: MatDialog) {}

  openSobreVaga(): void {
    this.dialog.open(SobreVagaComponent, {
      width: '500px',
    });
  }

  openCandidaturaEfetuada(): void {
    this.dialog.open(CandidaturaEfetuadaComponent, {
      width: '250px',
      height: '250px',
    });
  }

  // share(){
  //   if (navigator.share !== undefined) {
  //     navigator.share({
  //       title: 'O título da sua página',
  //       text: 'Um texto de resumo',
  //       url: 'https://seusite.com/sua_url',
  //     })
  //     .then(() => console.log('Successful share'))
  //     .catch((error) => console.log('Error sharing', error));
  //   }
  // }

  salvarVaga(){
    if (this.salvo == false) {
      this.salvo = true;
    }else{
      this.salvo = false;
    }
  }

}
