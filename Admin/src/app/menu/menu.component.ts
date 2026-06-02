import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router:Router,private service:CrudService) { }
  ngOnInit(): void {
  }
  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
