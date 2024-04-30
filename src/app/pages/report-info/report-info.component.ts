import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-report-info',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './report-info.component.html',
  styleUrl: './report-info.component.css'
})
export class ReportInfoComponent {
  constructor(private route: ActivatedRoute) { }

  router = inject(Router)
  authService = inject(AuthServiceService)
  http = inject(HttpClient)

  graph: any
  token: string = ''

  params = new HttpParams();
  reportId: string | undefined = this.route.snapshot.paramMap.get('id')?.toString()

  ngOnInit(): void {
    console.log('info')
    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders({
        'X-Token': this.token || ''
      });
      this.params = this.params.append('id', this.reportId ? this.reportId : '');
      this.http.get('https://user-assessment-api.vercel.app/api/userassessments/graph/', { headers: headers, params: this.params }).subscribe({
        next: (res) => {
          this.graph = res
        },
        error: () => {

        }

      })
    }

  }
}
