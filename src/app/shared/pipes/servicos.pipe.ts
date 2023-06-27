import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'servicos'
})
export class ServicosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'recrutamentoESeleção':
        return "Identificação e atração de talentos qualificados para atender às necessidades específicas de uma organização. Isso pode envolver a criação de descrições de cargos, triagem de currículos, realização de entrevistas e avaliação de candidatos.";
    
      case 'avaliacaoDeCompetências':
        return "Realização de avaliações e testes para determinar as habilidades, conhecimentos e competências dos funcionários, a fim de alinhar adequadamente os talentos às funções e responsabilidades corretas.";
    
      case 'desenvolvimentoDeCarreira':
        return "Planejamento e implementação de programas de desenvolvimento profissional para ajudar os funcionários a aprimorar suas habilidades, adquirir novos conhecimentos e avançar em suas carreiras dentro da organização.";
    
      case 'treinamentoECapacitação':
        return "Identificação das necessidades de treinamento da organização e criação de programas personalizados para melhorar as habilidades e o desempenho dos funcionários em áreas específicas.";
    
      default:
        return "Erro";
    }
  }

}

// <!--

//     1. Recrutamento e seleção: Identificação e atração de talentos qualificados para atender às necessidades específicas de uma organização. Isso pode envolver a criação de descrições de cargos, triagem de currículos, realização de entrevistas e avaliação de candidatos.

//     2. Avaliação de competências: Realização de avaliações e testes para determinar as habilidades, conhecimentos e competências dos funcionários, a fim de alinhar adequadamente os talentos às funções e responsabilidades corretas.

//     3. Desenvolvimento de carreira: Planejamento e implementação de programas de desenvolvimento profissional para ajudar os funcionários a aprimorar suas habilidades, adquirir novos conhecimentos e avançar em suas carreiras dentro da organização.

//     4. Treinamento e capacitação: Identificação das necessidades de treinamento da organização e criação de programas personalizados para melhorar as habilidades e o desempenho dos funcionários em áreas específicas.

// -->