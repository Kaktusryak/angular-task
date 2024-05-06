import { Component, NgModule, inject,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthServiceService } from './services/auth-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  authService = inject(AuthServiceService)
  http = inject(HttpClient)
  router= inject(Router)

  
  ngOnInit():void{
    
    // if(this.authService.getUserData('token')!==''){
    //   if(this.router.url !=='/login'){
    //     alert('this worked')
    //     this.router.navigateByUrl('/login')
    //   }
    // }
  }

  handleToLogin():void{
    this.router.navigateByUrl('/login')
  }

  handleUnlog():void{
    localStorage.setItem('token','')
    this.authService.removeUser()
    this.router.navigateByUrl('/login')

  }

  handleToDash():void{
    this.router.navigateByUrl('/dashboard')
  }

}
