import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTerceraComponent } from './pagina-tercera.component';

describe('PaginaTerceraComponent', () => {
  let component: PaginaTerceraComponent;
  let fixture: ComponentFixture<PaginaTerceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaTerceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTerceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
