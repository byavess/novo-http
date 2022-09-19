import { HttpClient } from '@angular/common/http';
import { Curso } from './../teste/Curso';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  base = 'http://localhost:3000/cursos';
  valorSalvo = '';

  @Input() nome: string = '';
  @Input() id!: number;

  cadastrar(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.base, curso);
  }

  salvarValor() {
    this.valorSalvo;
    console.log('salvar o valor');
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
