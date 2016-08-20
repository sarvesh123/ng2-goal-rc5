import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) { 
    console.log(userService.currentUser);
    this.user = userService.currentUser;
  }

  ngOnInit() {
  }

}
