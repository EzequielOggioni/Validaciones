import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadoComponent } from './validado/validado.component';

const routes: Routes = [
  {path:'**', component: ValidadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
