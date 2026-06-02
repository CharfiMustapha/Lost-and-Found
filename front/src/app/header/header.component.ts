import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private crudService: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.isLoggedIn = this.crudService.isLoggedIn();
  }
  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
