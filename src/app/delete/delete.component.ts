import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Curso } from '../teste/Curso';
// import { CursoService } from '../teste/curso.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  // curso: Curso = {
  //   id: 0,
  //   nome: '',
  // };
  constructor() // private router: Router, // private service: CursoService,
  // private route: ActivatedRoute
  {}

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id')!;
    // this.service.readById(id).subscribe((curso) => {
    //   this.curso = this.curso;
    // });
  }

  // deleteCurso() {
  //   console.log('Produto excluido com sucesso', this.deleteCurso);
  //   this.service.delete(this.curso.id).subscribe(() => {
  //     this.service.showMessage('Produto excluido com sucesso');

  //     this.router.navigate(['/cursos']);
  //   });
  // }
}
