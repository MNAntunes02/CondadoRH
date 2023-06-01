import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCurriculoComponent } from './upload-curriculo.component';

describe('UploadCurriculoComponent', () => {
  let component: UploadCurriculoComponent;
  let fixture: ComponentFixture<UploadCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCurriculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
