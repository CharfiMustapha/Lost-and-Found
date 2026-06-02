import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  userDetails: any;
  totalAdmin: number = 0;
  totalClient: number = 0;
  totalAnnonce: number = 0;
  chart: any = [];

  myGroup: FormGroup; // Define FormGroup

  constructor(private router: Router, private service: CrudService) {
   // this.userDetails = this.service.userDetails();
    this.myGroup = new FormGroup({
      firstName: new FormControl() // Initialize FormControl
    });
    Chart.register(...registerables); // Register Chart.js components
  }

  ngOnInit(): void {
    
    this.service.getAdmin().subscribe(admin => {
      this.totalAdmin = admin.length;
    });
    this.service.getClient().subscribe(client => {
      this.totalClient = client.length;
      this.updatePercentageChart();
    });
    this.service.getAnnonce().subscribe(annonce => {
      this.totalAnnonce = annonce.length;
      
    });
    // Fetch data and initialize charts
  }



  updatePercentageChart() {
    const totalUsers = this.totalClient + this.totalAdmin;
    const percentageClients = (this.totalClient / totalUsers) * 100;
    const percentageAdmins = (this.totalAdmin / totalUsers) * 100;
    const percentageChart = new Chart('percentageCanvas', {
      type: 'pie',
      data: {
        labels: ["Admins","Clients"],
        datasets: [{
          label: 'Pourcentage des utilisateurs',
          data: [percentageAdmins, percentageClients],
          backgroundColor: ['#4bc0c0', '#8B65D2'],
          borderColor: ['#4bc0c0', '#8B65D2'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: 'Arial',
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Pourcentage des utilisateurs sur la plateforme',
            font: {
              family: 'Arial',
              size: 18,
              weight: 'bold'
            }
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
      }
    });
  }
}
