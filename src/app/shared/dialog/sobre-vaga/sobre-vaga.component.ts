import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sobre-vaga',
  templateUrl: './sobre-vaga.component.html',
  styleUrls: ['./sobre-vaga.component.css']
})
export class SobreVagaComponent {
  constructor(public dialogRef: MatDialogRef<SobreVagaComponent>) {}
}
