import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JuegoComponent } from './juego/juego.component'; 
import { HomeComponent} from './home/home.component';
import { PerfiljugadorComponent } from './perfiljugador/perfiljugador.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'perfil', component: PerfiljugadorComponent},
  {path:'home', component: HomeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }