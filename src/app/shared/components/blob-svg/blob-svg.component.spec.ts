import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobSvgComponent } from './blob-svg.component';

describe('BlobSvgComponent', () => {
  let component: BlobSvgComponent;
  let fixture: ComponentFixture<BlobSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlobSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlobSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
