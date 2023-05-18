import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sobre-nos", component: SobreComponent},
  {path: "vagas", component: VagasComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "login", component: LoginComponent},
  {path: "**" , redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
