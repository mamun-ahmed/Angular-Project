import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  totalBalance: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.getTotalBalance();
    });

  }

  getTotalBalance() {
    // this.totalBalance = this.users.reduce((total, users) => {
    //   return total + parseFloat(users.balance.toString());
    // }, 0);






    let total = 0;
    for (let i = 0; i < this.users.length; i++) {
      total += parseFloat(this.users[i].balance.toString());
    }
    this.totalBalance = total;

  }

}
