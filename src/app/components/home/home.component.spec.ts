/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UserService } from '../../services/user.service';
describe('Component: Home', () => {
  it('should create an instance', inject([UserService], (userService: UserService) => {
    let component = new HomeComponent(userService);
    expect(component).toBeTruthy();
  }));
});
