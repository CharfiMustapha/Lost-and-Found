import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../Entites/Client.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  messageCommande=''
  ClientForm:FormGroup
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      prenom: new FormControl('',[
        Validators.required,]),
      email: new FormControl('',[
          Validators.required,
        Validators.email]),
      mp: new FormControl('',[
        Validators.required,]),
    tlf: new FormControl( '', [
      Validators.required,Validators.minLength(8),
      Validators.maxLength(8)]),}
     this.ClientForm = this.fb.group(formControls)
   }
  get nom() {return this.ClientForm.get('nom');}
  get prenom() { return this.ClientForm.get('prenom');}
  get email() {return this.ClientForm.get('email');}
  get mp() {return this.ClientForm.get('mp');}
  get tlf() { return this.ClientForm.get('tlf');}

   addNewClient() {
    let data = this.ClientForm.value;
    console.log(data);
    let client = new Client(
     undefined, data.nom,data.prenom,data.email,data.mp,data.tlf);
    console.log(client);

    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.mp == 0 ||
      data.tlf ==0
    ) {
      this.messageCommande = '<div class="alert alert-warning" role="alert">Veuillez remplir tous les champs obligatoires !</div>';
    } else {
    this.service.addClient(client).subscribe(
      res=>{
        console.log(res);
        this.messageCommande = '<div class="alert alert-success" role="alert">Inscription réussie! Veuillez confirmer votre email.</div>';
      },
      err => {
        console.log(err);
        this.messageCommande = '<div class="alert alert-success" role="alert">Inscription réussie! Veuillez confirmer votre email.</div>';
      }
    )

    }
  }
 ngOnInit(): void {
    }

}

