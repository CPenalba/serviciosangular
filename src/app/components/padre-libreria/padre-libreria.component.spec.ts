import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreLibreriaComponent } from './padre-libreria.component';

describe('PadreLibreriaComponent', () => {
  let component: PadreLibreriaComponent;
  let fixture: ComponentFixture<PadreLibreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreLibreriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreLibreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
