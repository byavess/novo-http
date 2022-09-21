import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, EMPTY, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Curso } from './Curso';
import { CursoDataSource } from './curso-datasource';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  readById(id: number) {
    throw new Error('Method not implemented.');
  }
  private readonly API = `${environment.API}cursos `;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  lista() {
    return this.http.get<Curso[]>(this.API);
  }

  create(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.API, curso).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getID(id: any) {
    return this.http.get<Curso[]>(`${this.API}/${id}`);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess'],
    });
  }

  delete(id: number): Observable<Curso> {
    const API = `${this.API}/${id}`;
    return this.http.delete<Curso>(API).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
