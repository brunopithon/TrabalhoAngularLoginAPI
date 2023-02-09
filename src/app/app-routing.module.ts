import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {component:LoginComponent,path:'login'},
  {component:RegistroComponent,path:'registro'},
  {component:HomeComponent,path:'',canActivate:[AuthGuard]},
  {component:UsuarioComponent,path:'usuario',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
