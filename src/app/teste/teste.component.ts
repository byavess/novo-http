import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from './Curso';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private testeService: TesteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.testeService.lista().subscribe((dados: Curso[]) => {
      console.log(dados);
      this.cursos = dados;
    });
  }

  cadastro() {
    this.testeService.lista();

    console.log('lista de cadastro');
  }
}
