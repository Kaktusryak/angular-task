import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { UserInterface } from '../../interfaces/user-interface';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder)
  http = inject(HttpClient)
  authService = inject(AuthServiceService)
  router = inject(Router)

  loginForm = this.fb.group({
    email:["",[Validators.required,Validators.email]],
    password:["",Validators.required]
  })
  
  onSubmit():void{
    if(this.loginForm.invalid){
      alert('Invalid input')
    }else{
       this.http.post<UserInterface>('https://user-assessment-api.vercel.app/api/login',
       this.loginForm.getRawValue()
      )
        .subscribe(response=>{
          localStorage.setItem('token',response.token)
          localStorage.setItem('name',response.first_name)
          this.authService.currentUserSignal.set(response)
          this.router.navigateByUrl('/dashboard')
        })
    }
  }
}
