import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './pages/admin/add-department/add-department.component';
import { AddOpdScheduleComponent } from './pages/admin/add-opd-schedule/add-opd-schedule.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import { ViewDepartmentsComponent } from './pages/admin/view-departments/view-departments.component';
import { ViewOPDScheduleComponent } from './pages/admin/view-opd-schedule/view-opd-schedule.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    //canActivate:[NormalGuard],
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:"departments",
        component:ViewDepartmentsComponent
      },
      {
        path:"add-department",
        component:AddDepartmentComponent
      },
      {
        path:'opdSchedule',
        component:ViewOPDScheduleComponent
      },
      {
        path:'add-opdSchedule',
        component:AddOpdScheduleComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
