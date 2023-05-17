import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComprasComponent } from './boton-compras.component';

describe('BotonComprasComponent', () => {
  let component: BotonComprasComponent;
  let fixture: ComponentFixture<BotonComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
