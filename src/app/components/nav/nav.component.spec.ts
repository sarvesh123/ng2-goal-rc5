/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { UserService } from '../../services/user.service';

describe('Component: Nav', () => {
  it('should create an instance', inject([UserService], (userService: UserService) => {
    let component = new NavComponent(userService);
    expect(component).toBeTruthy();
  }));
});
