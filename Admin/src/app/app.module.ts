import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListClientComponent } from './list-client/list-client.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierannonceComponent } from './modifierannonce/modifierannonce.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    ListAdminComponent,
    LoginComponent,
    ListClientComponent,
    ListContactComponent,
    ListAnnonceComponent,
    ModifierAdminComponent,
    ModifierannonceComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
