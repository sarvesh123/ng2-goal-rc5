/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SignupComponent } from './signup.component';
import { UserService } from '../../shared/user.service';

describe('Component: Signup', () => {
  it('should create an instance', inject([UserService, Router], (userService: UserService, router: Router) => {
    let component = new SignupComponent(userService, router);
    expect(component).toBeTruthy();
  }));
});
