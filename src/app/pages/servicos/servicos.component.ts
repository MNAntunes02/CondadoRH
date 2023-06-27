import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SobreVagaComponent } from 'src/app/shared/dialog/sobre-vaga/sobre-vaga.component';
import { SobreServicoComponent } from 'src/app/shared/dialog/sobre-servico/sobre-servico.component';
import { ServicosPipe } from 'src/app/shared/pipes/servicos.pipe';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {

  recrutamentoESeleção = "Identificação e atração de talentos qualificados para atender às necessidades específicas de uma organização. Isso pode envolver a criação de descrições de cargos, triagem de currículos, realização de entrevistas e avaliação de candidatos.";

  avaliacaoDeCompetências = "Realização de avaliações e testes para determinar as habilidades, conhecimentos e competências dos funcionários, a fim de alinhar adequadamente os talentos às funções e responsabilidades corretas.";

  desenvolvimentoDeCarreira = "Planejamento e implementação de programas de desenvolvimento profissional para ajudar os funcionários a aprimorar suas habilidades, adquirir novos conhecimentos e avançar em suas carreiras dentro da organização.";

  treinamentoECapacitação = "Identificação das necessidades de treinamento da organização e criação de programas personalizados para melhorar as habilidades e o desempenho dos funcionários em áreas específicas.";

  isFlipped:boolean = false;

  constructor(
    private dialog: MatDialog
  ){}

  openSobreVaga(servico:string): void {

    let text:string;
    let titulo:string;

    switch (servico) {
      case 'recrutamentoESeleção':
        titulo = 'Recrutamento e Seleção';
        text = this.recrutamentoESeleção;
        break;        
        
      case 'avaliacaoDeCompetências':
        titulo = 'Avaliação de Competências';
        text = this.avaliacaoDeCompetências;
        break; 
        
      case 'desenvolvimentoDeCarreira':
        titulo = 'Desenvolvimento de Carreira';
        text = this.desenvolvimentoDeCarreira;
        break; 
        
      case 'treinamentoECapacitação':
        titulo = 'Treinamento e Capacitação';
        text = this.treinamentoECapacitação;
        break; 
        
      default:
        titulo = 'Erro';
        text = "Erro";
        break; 
    }

    this.dialog.open(SobreServicoComponent, {
      width: '500px',
      data: {text: text , titulo: titulo}
    });
  }
}
