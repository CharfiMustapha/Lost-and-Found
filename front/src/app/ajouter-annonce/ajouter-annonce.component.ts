import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Annonce } from '../Entites/Annonce.Entites';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent {
  imgURL:any
  messageCommande=''
  AnnonceForm:FormGroup
  message: any
  userFile: any
  imagePath: any
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      image: new FormControl('',[
        Validators.required,]),
      description: new FormControl('',[
          Validators.required,]),
      adresse: new FormControl('',[
        Validators.required,])}
     this.AnnonceForm = this.fb.group(formControls)
   }
  get nom() {return this.AnnonceForm.get('nom');}
  get image() { return this.AnnonceForm.get('image');}
  get description() {return this.AnnonceForm.get('description');}
  get adresse() {return this.AnnonceForm.get('adresse');}

   addNewAnnonce() {
    let data = this.AnnonceForm.value;
    console.log(data);
    let annonce = new Annonce(
     undefined, data.nom,this.imgURL,data.description,data.adresse);
    console.log(annonce);

    if (
      data.nom == 0 ||
      data.image == 0||
      data.description == 0 ||
      data.adresse == 0 
    ) {
      this.messageCommande = '<div class="alert alert-warning" role="alert"> Champs obligatoire!!!! </div>'
    } else {
    this.service.addAnnonce(annonce).subscribe(
      res=>{
        console.log(res);
        this.messageCommande = '<div class="alert alert-success" role="alert"> Annonce ajouté avec succès </div>'
        this.router.navigate(['/annonce']);
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
  onSelectFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Only images are supported.';
          return;
        }
        var reader = new FileReader();
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
        };
      }
    }
}

