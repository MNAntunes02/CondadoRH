import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faBookBookmark, faBookmark, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SobreVagaComponent } from '../../dialog/sobre-vaga/sobre-vaga.component';
import { CandidaturaEfetuadaComponent } from '../../dialog/candidatura-efetuada/candidatura-efetuada.component';
import { Vaga } from 'src/app/interface/vaga';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getStorage, ref } from '@angular/fire/storage';
import { Firestore, collection, doc, updateDoc , addDoc, getDoc } from '@angular/fire/firestore';

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
  faBookmark = faBookmark;

  private auth = getAuth();

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private firestore: Firestore
  ) {
    if (this.auth.currentUser?.uid !== null && this.auth.currentUser?.emailVerified == true) {
      
      let user = this.auth.currentUser;
      let usuarios = collection(this.firestore,'usuarios')


      // cria id de referencia no firestore do usuario especifico
      const docRef = doc(usuarios, user?.uid);
      let arrayAntes = getDoc(docRef).then(async (data) => {
        const dataRef =  data
        let arrayRefe = dataRef.data();
        if(await arrayRefe?.['vagas'].includes(this.vaga.cargo)){
          console.log("aqui tem")
          this.salvarVaga();
        }else{
          console.log("aqui NÃO tem")
        }
        // await arrayRefe?.['vagas'].includes(this.vaga.cargo).then(() => {
        //     this.salvarVaga()
        // },(e: any) => {
        //   console.log("erro: ", e)
        // })
      },(e) => {
        console.log("erro: ", e);
      })

    }
  }

  openSobreVaga(): void {
    this.dialog.open(SobreVagaComponent, {
      width: '500px',
    });
  }

  async openCandidaturaEfetuada(){

    if (this.auth.currentUser?.uid !== null && this.auth.currentUser?.emailVerified == true) {
      
      let user = this.auth.currentUser;
      let usuarios = collection(this.firestore,'usuarios')

      // cria id de referencia no firestore do usuario especifico
      const docRef = doc(usuarios, user?.uid);
      let arrayAntes = getDoc(docRef)
      let data = (await arrayAntes).data()
      let arrayRef = data?.['vagas'];

      // vwrifica se já tem aquela string no array
      if (!arrayRef.includes(this.vaga.cargo)) {
        arrayRef.push(this.vaga.cargo);
        await updateDoc(docRef, {
          vagas: arrayRef
        })
      }

      await this.dialog.open(CandidaturaEfetuadaComponent, {
        width: '250px',
        height: '250px',
      });

      location.reload();

    } else {
      await this.router.navigate(['/login']);
    }
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
