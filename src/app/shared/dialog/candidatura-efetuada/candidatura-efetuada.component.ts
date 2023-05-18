import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-candidatura-efetuada',
  templateUrl: './candidatura-efetuada.component.html',
  styleUrls: ['./candidatura-efetuada.component.css']
})
export class CandidaturaEfetuadaComponent {

  constructor(public dialogRef: MatDialogRef<CandidaturaEfetuadaComponent>) {}

  faHandshake = faHandshake
}
