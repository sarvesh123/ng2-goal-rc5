import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User(1, 'sarvesh shejwadkar', 'a@a.com', '123456');

  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  newUser() {
    this.user = new User(1,'','','');
  }

  onSubmit(name: string, email: string, password: string) {
    this.userService.addUser(name, email, password)
                    .subscribe(
                      user => user,
                      error => this.errorMessage = <any>error);
  }

}
