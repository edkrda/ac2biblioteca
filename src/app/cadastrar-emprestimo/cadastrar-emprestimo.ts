
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../service/emprestimo-service';


@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {

  nomePessoa = '';
  tituloLivro = '';
  dataPrevistaDevolucao = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar(): void {
    if (!this.nomePessoa.trim() ||
        !this.tituloLivro.trim() ||
        !this.dataPrevistaDevolucao) {
      alert('Preencha todos os campos!');
      return;
    }

    this.emprestimoService.adicionar({
      id: Date.now(),
      nomePessoa: this.nomePessoa,
      tituloLivro: this.tituloLivro,
      dataPrevistaDevolucao: this.dataPrevistaDevolucao,
      devolvido: false
    });

    this.nomePessoa = '';
    this.tituloLivro = '';
    this.dataPrevistaDevolucao = '';
  }
}
