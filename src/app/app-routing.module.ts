import { TesteComponent } from './teste/teste.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'TesteComponent', pathMatch: 'full' },
  { path: 'cursos', component: TesteComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cursos/delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
