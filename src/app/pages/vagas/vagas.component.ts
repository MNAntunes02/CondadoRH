import { Component } from '@angular/core';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { Vaga } from 'src/app/interface/vaga';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent {
  faShareSquare = faShareSquare;

  vagas$:Observable<DocumentData[]|Vaga[]|any>;

  constructor(private firestore: Firestore) {
    const vagas = collection(this.firestore, 'vagas');
    this.vagas$ = collectionData(vagas);
  }  


}
