import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { VagaComponent } from './components/vaga/vaga.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SobreVagaComponent } from './dialog/sobre-vaga/sobre-vaga.component';
import { CandidaturaEfetuadaComponent } from './dialog/candidatura-efetuada/candidatura-efetuada.component';
import { DepoimentoComponent } from './components/depoimento/depoimento.component';



@NgModule({
  declarations: [
    VagaComponent,
    SobreVagaComponent,
    CandidaturaEfetuadaComponent,
    DepoimentoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  exports:[
    VagaComponent,
    SobreVagaComponent,
    CandidaturaEfetuadaComponent,
    DepoimentoComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
