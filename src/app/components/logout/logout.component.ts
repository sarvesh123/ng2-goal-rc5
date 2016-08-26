import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService) { 
    this.userService.logout();
  }

  ngOnInit() {
  }

}
