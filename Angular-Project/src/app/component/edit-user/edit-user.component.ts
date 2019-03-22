import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  id: string;
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
  disableBalanceOnEdit: Boolean = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    // get url using id for Edit User
    this.id = this.route.snapshot.params['id'];

    // get client
    this.userService.getUser(this.id).subscribe(user => this.user = user);
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
        this.toastrService.error('please check agian missing field', 'Submittion Error',
        { timeOut: 3000 });
    } else {
      // Add id to get user
      value.id = this.id;
      // Update user
      this.userService.updateUser(value);
      this.toastrService.success('User Update Successfully', 'Update Success',
        { timeOut: 3000 });
    }
    // Redirect the edit page
    this.router.navigate(['/user/' + this.id]);

  }

}
