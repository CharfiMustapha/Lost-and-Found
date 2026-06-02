import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  isConnected=false;
  listComment: any=[];
  isComment:boolean=false;
  private _reflechComment=new Subject<void>();
  nom: string="";
  com:string="";
  email: string="";
  constructor(private crudserviceService:CrudService,private activateRoute:ActivatedRoute,private router:Router) { }
  Annonce:any={}
  ngOnInit(): void {
    this.getListComment()
    this._reflechComment.subscribe(()=>{
      this.getListComment()
    })
    this.chekc()
    this. getAnnonce();
    this.crudserviceService.reflech.subscribe(()=>{
      this.chekc()
    })
    
  }
  getAnnonce()
  {
    let id=this.activateRoute.snapshot.params['id'];
    this.crudserviceService.getAnnoncesByIdApi(id).subscribe((data:any)=>{
      this.Annonce=data;
      console.log(data)
    })
  }
  addComment()
  {
    let rq:any={}
    rq.idAnnonce=this.activateRoute.snapshot.params['id'];
    rq.idClient=this.crudserviceService.getUserInfo().id
    rq.com=this.com
  
    console.log(rq)
    this.crudserviceService.addCommentaire(rq).subscribe((data:any)=>{
       
      this._reflechComment.next()
    })
  }
  getListComment()
  {
    let id=this.activateRoute.snapshot.params['id'];
    this.crudserviceService.getTop3Commentaire(id).subscribe((data:any)=>{
      this.listComment=data
      if(data.length<=0)
      this.isComment=false;
      else
      this.isComment=true
      console.log(data)
    })
  }

  chekc()
  {
    if(localStorage.getItem("myToken"))
    {
      this.isConnected=true
    }else{
      this.isConnected=false
    }
    
  }
}