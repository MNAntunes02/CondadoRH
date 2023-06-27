import { Component, Input, Inject  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicosPipe } from '../../pipes/servicos.pipe';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sobre-servico',
  templateUrl: './sobre-servico.component.html',
  styleUrls: ['./sobre-servico.component.css']
})
export class SobreServicoComponent {

  @Input() servico: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any ,
    public dialogRef: MatDialogRef<SobreServicoComponent>
  ) {}
}
