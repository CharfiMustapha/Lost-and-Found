import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { LoginComponent } from './login/login.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierannonceComponent } from './modifierannonce/modifierannonce.component';
import { AuthGuard } from './service/Auth.service';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:'',component:DashbordComponent,canActivate:[AuthGuard]},
  {path:'ajouterAdmin',component:AjouterAdminComponent,canActivate:[AuthGuard]},
  {path:'listeadmin',component:ListAdminComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'listeclient',component:ListClientComponent,canActivate:[AuthGuard]},
  {path:'listeannonce',component:ListAnnonceComponent,canActivate:[AuthGuard]},
  {path:'listecontact',component:ListContactComponent,canActivate:[AuthGuard]},
  {path:'modifieradmin/:id',component:ModifierAdminComponent,canActivate:[AuthGuard]},
  {path:'modifierannonce/:id',component:ModifierannonceComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
