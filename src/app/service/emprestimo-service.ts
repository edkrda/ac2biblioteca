
import { Injectable } from '@angular/core';
import { Emprestimo } from '../models/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private emprestimos: Emprestimo[] = [];

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  adicionar(emprestimo: Emprestimo): void {
    this.emprestimos.push(emprestimo);
  }

  remover(id: number): void {
    this.emprestimos = this.emprestimos.filter(
      emprestimo => emprestimo.id !== id
    );
  }

  registrarDevolucao(id: number): void {
    const emprestimo = this.emprestimos.find(
      emprestimo => emprestimo.id === id
    );

    if (emprestimo) {
      emprestimo.devolvido = true;
    }
  }
}

