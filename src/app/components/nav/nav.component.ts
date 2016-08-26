import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit{
    userName: string;
    private loggedIn = false;

    constructor(private userService: UserService, private router: Router) {
        router.events.subscribe(path => {
            this.getUsername();
            this.loggedIn = !!localStorage.getItem('authToken');
        });
    }

    ngOnInit() {
        if (localStorage.getItem('authToken')) {
            this.getUsername();
        }
    }

    getUsername() {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.userName = user.name;
        }
        else {
            this.userName = '';
        }
    }
}
