import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturaEfetuadaComponent } from './candidatura-efetuada.component';

describe('CandidaturaEfetuadaComponent', () => {
  let component: CandidaturaEfetuadaComponent;
  let fixture: ComponentFixture<CandidaturaEfetuadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidaturaEfetuadaComponent]
    });
    fixture = TestBed.createComponent(CandidaturaEfetuadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
