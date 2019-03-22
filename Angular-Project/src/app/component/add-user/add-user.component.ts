import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User = {
    address: '',
    area: '',
    balance: 0,
    email: '',
    location: '',
    name: '',
    orderDate: '',
    orderId: '',
    orderImage: 'any',
    orderTime: '',
    phone: '',
    userPhoto: 'any',

  };
  disableBalanceOnAdd: Boolean = true;


  @ViewChild('userForm') form: any;

  constructor(private toastrService: ToastrService,
    private userService: UserService,
    private router: Router
    ) { }


  ngOnInit() {
  }

  onSubmit({value, valid}: {value: User, valid: boolean} ) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
  }
    if (!valid) {
      // show Error
      this.toastrService.error('Please Fill the from', 'Please fill the all field', {
        timeOut: 5000
      });
    } else {
      // Add a new user
      this.userService.newUser(value);
      // Show Message
      this.toastrService.success('Data submitted', 'User add Successfully');
      // Redirct to dash
      this.router.navigate(['/']);
    }
  }

}
