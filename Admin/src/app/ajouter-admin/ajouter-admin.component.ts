import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Admin } from '../Entites/Admin.Entites';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent {
  messageCommande=''
  AdminForm:FormGroup
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
    role: new FormControl( '', [
      Validators.required,]),}
     this.AdminForm = this.fb.group(formControls)
   }
  get nom() {return this.AdminForm.get('nom');}
  get prenom() { return this.AdminForm.get('prenom');}
  get email() {return this.AdminForm.get('email');}
  get mp() {return this.AdminForm.get('mp');}
  get role() { return this.AdminForm.get('role');}

   addNewAdmin() {
    let data = this.AdminForm.value;
    console.log(data);
    let admin = new Admin(
     undefined, data.nom,data.prenom,data.email,data.mp,data.role);
    console.log(admin);

    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.mp == 0 ||
      data.role ==0
    ) {
      this.messageCommande = '<div class="alert alert-warning" role="alert"> Champs obligatoire!!!! </div>'
    } else {
    this.service.addAdmin(admin).subscribe(
      res=>{
        console.log(res);
        this.messageCommande = '<div class="alert alert-success" role="alert"> Administrateur ajouté avec succès </div>'
        this.router.navigate(['/listeadmin']);
      },
      err=>{
        console.log(err);
        if (err.error.message === 'email exist deja !') {
          this.messageCommande =
            '<div class="alert alert-danger" role="alert">email exist deja !</div>';
        } else{
        this.messageCommande = '<div class="alert alert-danger" role="alert">Service temporairement indisponible. Veuillez réessayer plus tard.</div>';          
        }
      }
    )

    }
  }

 ngOnInit(): void {
    }

}
