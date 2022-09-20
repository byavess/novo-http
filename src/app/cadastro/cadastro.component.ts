import { Router } from '@angular/router';
import { TesteService } from './../teste/teste.service';

import { Curso } from './../teste/Curso';
import { Component, OnInit } from '@angular/core';

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

  constructor(private testeService: TesteService, private router: Router) {}

  ngOnInit(): void {}

  cadastro(): void {
    this.testeService.create(this.curso).subscribe((resp) => {
      console.log('resposta', resp);
      if (resp.id != null) {
        alert('Cadastrado Com Sucesso');
        //Todo fazer funcionar navigate
        this.router.navigate(['/curso']);
      }
    });
    console.log(this.curso);
  }
}
