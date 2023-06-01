import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Vaga } from '../interface/vaga';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private readonly API = './assets/vagas.json';

  constructor(private httpclient: HttpClient) { }

  getVagas(){
    return this.httpclient.get<Vaga[]>(this.API)
    .pipe(
      first(),
      delay(2000)
    );
  }

}
