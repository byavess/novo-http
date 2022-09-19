import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Curso } from './Curso';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  cadastro() {
    console.log('chamando cadastro');
  }
  private readonly API = `${environment.API}cursos `;

  constructor(private http: HttpClient) {}

  lista() {
    return this.http.get<Curso[]>(this.API);
  }
}
