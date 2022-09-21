import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../teste/Curso';
import { CursoService } from '../teste/curso.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  curso: Curso = {
    id: 0,
    nome: '',
  };
  constructor(
    private service: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service.readById(id);
    this.curso = this.curso;
  }
  deleteCurso(): void {
    this.service.delete(this.curso.id!).subscribe(() => {
      this.service.showMessage('Produto excluido com sucesso');
      this.router.navigate(['/cursos']);
    });

    // cancel(): void {
    //   this.router.navigate(['/cursos']);
    // }
  }
}
