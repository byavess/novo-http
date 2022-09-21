import { Router } from '@angular/router';
import { CursoService } from '../teste/curso.service';

import { Curso } from './../teste/Curso';
import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  curso: Curso = {
    id: 0,
    nome: '',
  };

  constructor(private service: CursoService, private router: Router) {}

  ngOnInit(): void {}

  cadastro(): void {
    this.service.create(this.curso).subscribe((resp) => {
      console.log('resposta', resp);
      if (resp.id != null) {
        this.service.showMessage('Cadastrado Com Sucesso');

        //Todo fazer funcionar navigate
        this.router.navigate(['/cursos']);
      }
    });
    console.log(this.curso);
  }
}
