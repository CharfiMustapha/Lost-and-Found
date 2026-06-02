import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Client } from '../Entites/Client.Entites';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  messageCommande=""
  constructor(
    private fb: FormBuilder,
    private service:CrudService,
    private router:Router
  ) { 
    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
        
      ]),
      mp: new FormControl('',[
        Validators.required,
       
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }

  get email() { return this.loginForm.get('email') }
  get mp() { return this.loginForm.get('mp') }
  ngOnInit(): void { 
  }

  login() {
    let data = this.loginForm.value;
    console.log(data);
    let client = new Client(null,null,null,data.email,data.mp,null);
    console.log(client);
    if (
  
      data.email == 0 ||
      data.mp == 0
    )
    {
      this.messageCommande = '<div class="alert alert-warning" role="alert">Veuillez remplir tous les champs requis !</div>';
    }else {
  
      this.service.loginClient(client).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken",token);
          this.router.navigate(['/']).then(()=>window.location.reload());
      },
       
        err=>{
          console.log(err);
          if (err.error.message === 'Account not confirmed. Please confirm your email.') {
            this.messageCommande =
              '<div class="alert alert-danger" role="alert">Compte non confirmé. Veuillez confirmer votre email.</div>';
          } if (err.error.message === 'Account not confirmed. Please confirm your email.') {
            this.messageCommande =
              '<div class="alert alert-danger" role="alert">Compte non confirmé. Veuillez confirmer votre email.</div>';
          } else if (err.error.message === 'Email ou mot de passe sont incorrects !') {
            this.messageCommande =
              '<div class="alert alert-danger" role="alert">Email ou mot de passe sont incorrects !</div>';
          } else {
            this.messageCommande =
              '<div class="alert alert-danger" role="alert">Service temporairement indisponible. Veuillez réessayer plus tard.</div>';
          }          
        }
      )
      
    }
    }
}

