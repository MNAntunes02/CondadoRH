import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';
import { UploadCurriculoComponent } from './pages/upload-curriculo/upload-curriculo.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AuthBlockGuard } from './guard/auth-block.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sobre-nos", component: SobreComponent},
  {path: "vagas", component: VagasComponent},
  {path: "cadastro", component: CadastroComponent, canActivate: [AuthBlockGuard]},
  {path: "upload-curriculo", component: UploadCurriculoComponent, canActivate: [AuthGuard]},
  // {path: "clientes", component: ClientesComponent},
  {path: "servicos", component: ServicosComponent},
  {path: "login", component: LoginComponent, canActivate: [AuthBlockGuard]},
  {path: "verificar-email", component: VerificarEmailComponent},
  {path: "**" , redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
