import { TesteComponent } from './teste/teste.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'home', component: TesteComponent},
  {path: 'cadastro', component: CadastroComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
