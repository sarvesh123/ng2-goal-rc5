import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-twitter',
  templateUrl: 'twitter.component.html',
  styleUrls: ['twitter.component.css']
})
export class TwitterComponent implements OnInit {
  errorMessage: string;

  constructor(private userService: UserService) {
    userService.getProfile()
      .subscribe(
        user => this.onLoginSuccess(user),
        error => this.errorMessage = <any>error);
   }

  ngOnInit() {
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
