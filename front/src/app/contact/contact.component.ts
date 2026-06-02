import { Component } from '@angular/core';
import { Contact } from '../Entites/Contact.Entites';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messageCommande=''
  ContactForm:FormGroup
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      email: new FormControl('',[
        Validators.required,Validators.email]),
      tlf: new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)]),
      sujet: new FormControl('',[
        Validators.required,]),
      msg: new FormControl( '', [
        Validators.required,]),}
     this.ContactForm = this.fb.group(formControls)
   }
  get nom() {return this.ContactForm.get('nom');}
  get email() { return this.ContactForm.get('email');}
  get tlf() {return this.ContactForm.get('tlf');}
  get sujet() {return this.ContactForm.get('sujet');}
  get msg() { return this.ContactForm.get('msg');}

   addNewContact() {
    let data = this.ContactForm.value;
    console.log(data);
    let contact = new Contact(
     undefined, data.nom,data.email,data.tlf,data.sujet,data.msg);
    console.log(contact);

    if (
      data.nom == 0 ||
      data.email == 0||
      data.tlf == 0 ||
      data.sujet == 0 ||
      data.msg ==0
    ) {
      this.messageCommande = '<div class="alert alert-warning" role="alert">Champs obligatoire !!!!</div>'
    } else {
    this.service.addContact(contact).subscribe(
      res=>{
        console.log(res);
        this.messageCommande = '<div class="alert alert-success" role="alert"> Contact ajouté avec succès </div>'
      },
      err=>{
        console.log(err);
        this.messageCommande ='<div class="alert alert-danger" role="alert">Service temporairement indisponible. Veuillez réessayer plus tard.</div>';
      }
    )

    }
  }

 ngOnInit(): void {
    }

}
