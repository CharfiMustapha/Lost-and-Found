import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Entites/Admin.Entites';
import { CrudService } from '../service/crud.service';

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
    let admin = new Admin(null,null,null,data.email,data.mp,null);
    console.log(admin);
    if (
  
      data.email == 0 ||
      data.mp == 0
    )
    {
      this.messageCommande = '<div class="alert alert-warning" role="alert"> Champs obligatoire!!!! </div>'
    }else {
  
      this.service.loginAdmin(admin).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken",res.token);
          localStorage.setItem("role",res.role);
          this.router.navigate(['/']).then(()=>window.location.reload());
      },
       
        err=>{
          console.log(err);
          if (err.error.message === 'Email ou mot de passe sont incorrects !') {
            this.messageCommande =
              '<div class="alert alert-danger" role="alert">Email ou mot de passe sont incorrects !</div>';
          } else{
          this.messageCommande = '<div class="alert alert-danger" role="alert">Service temporairement indisponible. Veuillez réessayer plus tard.</div>';          
          }
          
        }
      )
      
    }
    }
}
