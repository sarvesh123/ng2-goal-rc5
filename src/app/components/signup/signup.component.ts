import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
    providers: [UserService]
})
export class SignupComponent {

    user = new User(1, 'sarvesh shejwadkar', 'a@a.com', '123456');

    errorMessage: string;

    constructor(private userService: UserService, private router: Router) { }

    onSubmit() {
        this.userService.addUser(this.user.name, this.user.email, this.user.password)
                    .subscribe(
                      user => this.onRegisterSuccess(user),
                      error => this.errorMessage = <any>error);
    }

    onRegisterSuccess(res) {
        if (res.status) {
          this.userService.setUser(res.user);
        }
        this.router.navigate(['']);
    }
}
