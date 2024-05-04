import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ReportInfoComponent } from './pages/report-info/report-info.component';
import { AuthGuardGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {path:"",redirectTo:"login", pathMatch:"full"},
    {path:"login",component: LoginComponent},
    {path:"dashboard",component: DashboardComponent},
    {path:"admin",component: AdminComponent, canActivate:[AuthGuardGuard]},
    {path:"dashboard/:id", component:ReportInfoComponent},
    {path:"**", redirectTo:"login", pathMatch:"full"}

];
