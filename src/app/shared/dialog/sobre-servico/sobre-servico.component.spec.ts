import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreServicoComponent } from './sobre-servico.component';

describe('SobreServicoComponent', () => {
  let component: SobreServicoComponent;
  let fixture: ComponentFixture<SobreServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
