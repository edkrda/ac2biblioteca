import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmprestimo } from './lista-emprestimo';

describe('ListaEmprestimo', () => {
  let component: ListaEmprestimo;
  let fixture: ComponentFixture<ListaEmprestimo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmprestimo],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEmprestimo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
