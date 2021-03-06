/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { UserService } from '../../shared/user.service';

describe('Component: Login', () => {
  it('should create an instance', inject([UserService], (userService: UserService) => {
    let component = new LoginComponent(userService);
    expect(component).toBeTruthy();
  }));
});
