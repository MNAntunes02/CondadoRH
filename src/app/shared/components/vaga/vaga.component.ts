import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { SobreVagaComponent } from '../../dialog/sobre-vaga/sobre-vaga.component';
import { CandidaturaEfetuadaComponent } from '../../dialog/candidatura-efetuada/candidatura-efetuada.component';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent {

  @Input() cargo: string = "";
  @Input() localidade: string = "";
  @Input() disponibilidade: string = "";
  @Input() modalidade: string = "";



  faShareSquare = faShareSquare;

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

  share(){
    if (navigator.share !== undefined) {
      navigator.share({
        title: 'O título da sua página',
        text: 'Um texto de resumo',
        url: 'https://seusite.com/sua_url',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
  }

  


}
