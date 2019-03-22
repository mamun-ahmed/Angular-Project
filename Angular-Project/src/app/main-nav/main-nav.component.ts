import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  // if logged in
  isLoggedIn: boolean;
  LoggedInUser: string;
  showRegister: boolean;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
    ) {}

    ngOnInit() {
      this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.LoggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      });

    }

    // from html function
    onLogoutClick() {
      this.authService.logout();
      this.toastrService.success('You are logOut successfully!!', 'Logout Success', {
        timeOut: 3000
      });
      // redirect to login page
      this.router.navigate(['/login']);
    }

}
