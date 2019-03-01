import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AutenticadoComponent } from './autenticado/autenticado.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'autenticado', component: AutenticadoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
