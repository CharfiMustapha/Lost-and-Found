import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Annonce } from '../Entites/Annonce.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifierannonce',
  templateUrl: './modifierannonce.component.html',
  styleUrls: ['./modifierannonce.component.css']
})
export class ModifierannonceComponent {
  updateForm: FormGroup;
  id: number;
  currentAnnonce = new Annonce()
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      image: new FormControl('',[
        Validators.required,]),
      description: new FormControl('',[
          Validators.required]),
      adresse: new FormControl('',[
        Validators.required,])}
     this.updateForm = this.fb.group(formControls)
   }
  get nom() {return this.updateForm.get('nom');}
  get image() { return this.updateForm.get('image');}
  get description() {return this.updateForm.get('description');}
  get adresse() {return this.updateForm.get('adresse');}
  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    this.service.findAnnonceById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        description: event.description,
        adresse: event.adresse
      });
      this.imgURL = result.image;});}
  updateAnnonce() {
    let data = this.updateForm.value;
    let annonce = new Annonce(
      this.id,
      data.nom,
      this.imgURL,
      data.description,
      data.adresse);
    console.log(annonce);
    console.log(data);
    this.service.updateAnnonce(this.id,annonce).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listeannonce'])}); 
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
