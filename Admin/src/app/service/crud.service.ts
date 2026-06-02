import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entites/Admin.Entites';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../Entites/Client.Entites';
import { Annonce } from '../Entites/Annonce.Entites';
import { Contact } from '../Entites/Contact.Entites';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginUserUrl="http://localhost:8081/api/admin/login"
  apiUrl="http://localhost:8081/api"
  helper=new JwtHelperService();

  constructor(private http:HttpClient) { }
  addAdmin(admin:Admin)
   {
    return this.http.post<any>(this.apiUrl+"/admin",admin);
   }
   getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }
  onDeleteAdmin(id : number){
    const url =`${this.apiUrl+"/admin"}/${id}` 
    return this.http.delete(url)
  }
  
  updateAdmin(id:number,admin: Admin) {
    const url = `${this.apiUrl+"/admin"}/${id}`
    return this.http.put<any>(url, admin)
  }
  findAdminById(id : number): Observable<Admin> {
    const url = `${this.apiUrl + "/admin"}/${id}`
    return this.http.get<Admin>(url)
  }
  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }
  updateClient(id:number,client: Client) {
    const url = `${this.apiUrl+"/client"}/${id}`
    return this.http.put<any>(url, client)
  }
  findClientById(id : number): Observable<Client> {
    const url = `${this.apiUrl + "/client"}/${id}`
    return this.http.get<Client>(url)
  }

  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl + "/client");
  }
  getAnnonce(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.apiUrl + "/annonce");
  }
  onDeleteAnnonce(id : number){
    const url =`${this.apiUrl+"/annonce"}/${id}` 
    return this.http.delete(url)
  }
  updateAnnonce(id:number,annonce: Annonce) {
    const url = `${this.apiUrl+"/annonce"}/${id}`
    return this.http.put<any>(url, annonce)
  }
  findAnnonceById(id : number): Observable<Annonce> {
    const url = `${this.apiUrl + "/annonce"}/${id}`
    return this.http.get<Annonce>(url)
  }
  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl + "/contact");
  }
  onDeleteContact(id : number){
    const url =`${this.apiUrl+"/contact"}/${id}` 
    return this.http.delete(url)
  }
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  userDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
}
