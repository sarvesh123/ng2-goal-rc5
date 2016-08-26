/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NavComponent } from './nav.component';
import { UserService } from '../../shared/user.service';

describe('Component: Nav', () => {
  it('should create an instance', inject([UserService, Router], (userService: UserService, router: Router) => {
    let component = new NavComponent(userService, router);
    expect(component).toBeTruthy();
  }));
});
