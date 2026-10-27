
import { Routes } from '@angular/router';
import { CadastrarEmprestimo } from './cadastrar-emprestimo/cadastrar-emprestimo';
import { ListaEmprestimo } from './lista-emprestimo/lista-emprestimo';

export const routes: Routes = [
  {
    path: '',
    component: CadastrarEmprestimo
  },
  {
    path: 'cadastrar',
    component: CadastrarEmprestimo
  },
  {
    path: 'lista',
    component: ListaEmprestimo
  },
  {
    path: '**',
    redirectTo: ''
  }
];
