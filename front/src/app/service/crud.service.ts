import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../Entites/Client.Entites';
import { Contact } from '../Entites/Contact.Entites';
import { Annonce } from '../Entites/Annonce.Entites';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginUserUrl="http://localhost:8081/api/client/login"
  apiUrl="http://localhost:8081/api"
  private _reflech=new Subject<void>();
  get reflech()
  {
    return this._reflech;
  }

  constructor(private http:HttpClient) { }
  addClient(client:Client)
   {
    return this.http.post<any>(this.apiUrl+"/client",client);
   }
   getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl +"/client");
  }
   loginClient(client:Client){
    return this.http.post<any>(this.loginUserUrl, client);
  }
  addContact(contact:Contact)
   {
    return this.http.post<any>(this.apiUrl+"/contact",contact);
   }
   getContact(): Observable<Client[]>{
    return this.http.get<Contact[]>(this.apiUrl +"/contact");
  }
  addAnnonce(annonce:Annonce)
   {
    return this.http.post<any>(this.apiUrl+"/annonce",annonce);
  }
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  getAnnonce(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.apiUrl + "/annonce");
  }
 getUserInfo()
 {
   var token = localStorage.getItem("myToken");
   const helper = new JwtHelperService();

   const decodedToken = helper.decodeToken(token);
    
   const expirationDate = helper.getTokenExpirationDate(token);
   const isExpired = helper.isTokenExpired(token);
   var decoded:any
   return decodedToken?.data
 }
 
 getAllAnnoncebyClientId(){
  return this.http.get<any>( "http://localhost:8081/api/commentaire/get-all-by-id-Client/"+this.getUserInfo()?.id );
}
getAnnoncesByIdApi(id:number): Observable<Annonce[]>{
  return this.http.get<Annonce[]>(this.apiUrl + "/annonce/get-id/"+id);
}
addCommentaire(rq :any){
  return this.http.post<any>(
  this.apiUrl + "/commentaire", rq) ;
}
getTop3Commentaire(id :any){
  return this.http.get<any>(
  this.apiUrl + "/commentaire/get-top-3-by-offre/"+id) ;
}
}