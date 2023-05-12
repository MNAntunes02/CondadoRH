import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreVagaComponent } from './sobre-vaga.component';

describe('SobreVagaComponent', () => {
  let component: SobreVagaComponent;
  let fixture: ComponentFixture<SobreVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreVagaComponent]
    });
    fixture = TestBed.createComponent(SobreVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
