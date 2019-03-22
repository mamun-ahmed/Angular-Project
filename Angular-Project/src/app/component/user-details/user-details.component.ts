import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: string;
  user: User;
  hasBalance: Boolean = false;
  showBalanceUpdateInput: Boolean = false;



  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
    ) {}

  ngOnInit() {
    // get url using id getuserDetails
    this.id = this.route.snapshot.params['id'];

    // get client
    this.userService.getUser(this.id).subscribe(user => {
      if (user != null) {
        if (user.balance > 0) {
          this.hasBalance = true;
        }
      }
        this.user = user;
      }
    );
  }

  updateBalance() {
    this.userService.updateUser(this.user);
    this.toastrService.success('Update your Balance Successfully', 'Balance Updated', {
      timeOut: 3000
    });
  }

  onDeleteClick() {
    if (confirm('Are you ready to Delete me?')) {
      this.userService.deleteUser(this.user);
      this.toastrService.warning('The User is Delete', 'Deleted Success',
        { timeOut: 3000 });
    }
    // Redirect To Dash board
    this.router.navigate(['/']);

  }



}
