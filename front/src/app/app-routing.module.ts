import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AuthGuard } from './service/Auth.service';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'ajouterannonce',component:AjouterAnnonceComponent,canActivate:[AuthGuard]},
  {path:'annonce',component:AnnonceComponent,canActivate:[AuthGuard]},
  {path:'detail/:id',component:DetailComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
