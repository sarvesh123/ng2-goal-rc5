/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';
import { UserService } from '../../shared/user.service';

describe('Component: Logout', () => {
  it('should create an instance', inject([UserService], (userService: UserService) => {
    let component = new LogoutComponent(userService);
    expect(component).toBeTruthy();
  }));
});
