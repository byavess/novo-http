import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from './Curso';
import { CursoService } from './curso.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
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

  curso: Curso = {
    id: 0,
    nome: '',
  };

  displayedColumns = ['id', 'nome', 'acao'];

  constructor(
    private service: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSource = new CursoDataSource(this.service);
    this.service.read().subscribe((curso) => {
      this.curso = this.curso;
    });

    // const id = +this.route.snapshot.paramMap.get('id')!;
    // this.service.readById(id).subscribe((curso) => {
    //   this.curso = curso;
    // });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  deleteCurso(objeto: any) {
    console.log('delete', objeto);
    this.service.delete(objeto.id).subscribe(() => {
      this.service.showMessage('Produto excluido com sucesso');
      this.router.navigate(['/']);
    });
  }
}
