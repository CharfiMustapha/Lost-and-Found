import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../Entites/Annonce.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {
  listAnnonce: Annonce[];
 
  ngOnInit(): void {
    this.service.getAnnonce().subscribe(annonce => {
      this.listAnnonce = annonce
    })
  }
  IsloggedIn:boolean
  messageCommande=""
  constructor(private service:CrudService,private router:Router){}
}
