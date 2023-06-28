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
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SobreVagaComponent } from './dialog/sobre-vaga/sobre-vaga.component';
import { CandidaturaEfetuadaComponent } from './dialog/candidatura-efetuada/candidatura-efetuada.component';
import { DepoimentoComponent } from './components/depoimento/depoimento.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { BlobSvgComponent } from './components/blob-svg/blob-svg.component';
import { SobreServicoComponent } from './dialog/sobre-servico/sobre-servico.component';
import { ServicosPipe } from './pipes/servicos.pipe';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    VagaComponent,
    SobreVagaComponent,
    CandidaturaEfetuadaComponent,
    DepoimentoComponent,
    SnackBarComponent,
    BlobSvgComponent,
    SobreServicoComponent,
    ServicosPipe,
    FooterComponent
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
    BlobSvgComponent,
    MaterialModule,
    FooterComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class SharedModule { }
