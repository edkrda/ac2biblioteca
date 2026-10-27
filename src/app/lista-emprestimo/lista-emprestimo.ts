
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../service/emprestimo-service';


@Component({
  selector: 'app-lista-emprestimo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-emprestimo.html',
  styleUrl: './lista-emprestimo.css'
})
export class ListaEmprestimo {

  constructor(public emprestimoService: EmprestimoService) {}

  get emprestimos() {
    return this.emprestimoService.listar();
  }

  get total() {
    return this.emprestimos.length;
  }

  get emAberto() {
    return this.emprestimos.filter(e => !e.devolvido).length;
  }

  get devolvidos() {
    return this.emprestimos.filter(e => e.devolvido).length;
  }

  remover(id: number): void {
    this.emprestimoService.remover(id);
  }

  registrarDevolucao(id: number): void {
    this.emprestimoService.registrarDevolucao(id);
  }
}
