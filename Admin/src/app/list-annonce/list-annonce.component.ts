import { Component } from '@angular/core';
import { Annonce } from '../Entites/Annonce.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent {
  listAnnonce: Annonce[];
  constructor(private service:CrudService,private router:Router ) { }


  //supprimer
  Deleteannonce(annonce: Annonce){
    if(confirm("Voulez vous supprimer cet annonce avec l'ID " + annonce.id + " ?")) {
     
      this.service.onDeleteAnnonce(annonce.id).subscribe(() => {
        this.router.navigate(['/listeannonce']).then(() => {
          window.location.reload()
        })
      })
   
  }
}
ngOnInit(): void {
  this.service.getAnnonce().subscribe(annonce => {this.listAnnonce = annonce})
}
}
