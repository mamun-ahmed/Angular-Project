import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private toastraServic: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      // if (login)
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
    .then(res => {
      this.toastraServic.success('Your Are Success to login', 'Login Success', {
        timeOut: 3000
      });
      // redirect to Dashboard
      this.router.navigate(['/']);
    })
    .catch (error => {
      this.toastraServic.warning(error.message, 'Login Fail', {
        timeOut: 3000
      });
    });
  }

}
