import { Component, Inject, inject, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ReportComponent } from '../../components/report/report.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, ReportComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit{
  router = inject(Router)
  authService = inject(AuthServiceService)
  http = inject(HttpClient)

  reports: any;
  

  ngOnInit(): void {
    this.http
      .get('https://user-assessment-api.vercel.app/api/userassessments')
      .subscribe({
        next: (res) => {
          this.reports = res;
        },
        error: () => {
          this.authService.removeUser()
        },
      });
  }

  handleAdminClick(): void {
    this.router.navigateByUrl('/admin');
  }
}
