import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, EMPTY, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Curso } from './Curso';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  private readonly API = `${environment.API}cursos `;

  constructor(private http: HttpClient) {}

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
    alert('Ocorreu um erro!');
    return EMPTY;
  }
}
