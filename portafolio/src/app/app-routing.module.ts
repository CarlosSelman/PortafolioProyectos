import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MysqlDbComponent } from './componentes/mysql-db/mysql-db.component';

const routes: Routes = [
  { path: 'mysql', component: MysqlDbComponent},
  { path: 'inicio', component: InicioComponent},
  { path: '**', component: InicioComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
