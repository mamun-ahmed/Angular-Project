import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AuthGuard } from './guards/auth.guard';
import { MedicineAdsComponent } from './component/medicine-ads/medicine-ads.component';



const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/add', component: AddUserComponent, canActivate: [AuthGuard]},
  {path: 'user/edit/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'medicines-ads', component: MedicineAdsComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
