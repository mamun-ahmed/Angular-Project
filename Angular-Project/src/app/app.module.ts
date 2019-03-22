import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UsersComponent } from './component/users/users.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { MedicineAdsComponent } from './component/medicine-ads/medicine-ads.component';
import { EditMedicineAdsComponent } from './component/edit-medicine-ads/edit-medicine-ads.component';
import { DetailsMedicineComponent } from './component/details-medicine/details-medicine.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    MainNavComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailsComponent,
    EditUserComponent,
    NotFoundComponent,
    AddUserComponent,
    MedicineAdsComponent,
    EditMedicineAdsComponent,
    DetailsMedicineComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase, 'PharmaQuick'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
