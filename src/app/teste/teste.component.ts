import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Curso } from './Curso';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  cursos: Curso[] = [];

  
  constructor( private testeService: TesteService,
    private http: HttpClient) {
  
   }
  
  ngOnInit() {
   
    this.testeService.lista().subscribe(dados => {
      console.log(dados);
      this.cursos = dados
    });
    
  }

  cadastro() {
    this.testeService.lista()
    
    console.log("lista de cadastro")
 
   
  }


}
