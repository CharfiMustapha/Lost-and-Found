import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Entites/Contact.Entites';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userDetails: any;
  totalContact: number = 0;
  chart: any = [];

  myGroup: FormGroup; // Define FormGroup

  constructor(private router: Router, private service: CrudService) {
    this.userDetails = this.service.userDetails();
    this.myGroup = new FormGroup({
      firstName: new FormControl() // Initialize FormControl
    });
    Chart.register(...registerables); // Register Chart.js components
  }

  ngOnInit(): void {
    
    this.service.getContact().subscribe(contact => {
      this.totalContact = contact.length
    });
    // Fetch data and initialize charts
  }
}
