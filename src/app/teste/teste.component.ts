import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from './Curso';
import { CursoService } from './curso.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CursoDataSource } from './curso-datasource';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Curso>;

  dataSource!: CursoDataSource;

  //  cursos: Curso[] = [];
  curso: Curso = {
    id: 0,
    nome: '',
  };

  displayedColumns = ['id', 'nome'];

  constructor(
    private service: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSource = new CursoDataSource(this.service);
    // this.service.lista().subscribe((dados: CursoDataSource[]) => {
    //   console.log('dados', dados);
    //   this.dataSource =  dados;
    // });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  deleteCurso(): void {}
}
