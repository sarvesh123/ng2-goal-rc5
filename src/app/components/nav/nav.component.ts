import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent {
    user: any;

    constructor(private userService: UserService) {
        // this.user = localStorage.getItem('user');
        this.user = userService.currentUser;

    }
    
    // getUser() {
    //     // this.user = localStorage.getItem('user');
    //     this.user = this.userService.currentUser;
    // }

    // signout() {
    //     localStorage.removeItem('user');
    // }
}
