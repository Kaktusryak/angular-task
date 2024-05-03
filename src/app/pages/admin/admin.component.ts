import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { UserComponent } from '../../components/user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HttpClientModule, UserComponent, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  router = inject(Router);
  authService = inject(AuthServiceService);
  http = inject(HttpClient);

  users: any;
  token: string = '';

  ngOnInit(): void {
    this.http
      .get('https://user-assessment-api.vercel.app/api/users')
      .subscribe({
        next: (res) => {
          this.users = res;
        },
        error: () => {
          this.authService.currentUserSignal.set(null);
        },
      });
  }
}
