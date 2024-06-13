import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { login } from '../../../modele/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formgroup:FormGroup;
  constructor(private fb:FormBuilder){
  this.formgroup = this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(6)]]
  
})
  }
  Onsubmit(){
    if (this.formgroup.valid) {
      const loginData = new login(this.formgroup.value.email,this.formgroup.value.password)
      
      
    }
    else{
      console.log("eurreur , la formule est invalide ")
    }
  }

}
