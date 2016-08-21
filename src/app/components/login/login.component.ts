import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../models/user';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  user: User;
  errorMessage: string;

  constructor(private userService: UserService) {
    this.user = new User('sarvesh shejwadkar', 'a@a.com', '123456');
  }

    login () {
        this.userService.login(this.user.email, this.user.password)
                    .subscribe(
                      user => this.onLoginSuccess(user),
                      error => this.errorMessage = <any>error);
    }

    onLoginSuccess(res) {
        if (res.status) {
            this.userService.onSubmitSuccess(res);
        }
        else {
            this.errorMessage = res.message;
        }
    }
}
