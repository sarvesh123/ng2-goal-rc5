/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TwitterComponent } from './twitter.component';
import { UserService } from '../../../shared/user.service';

describe('Component: Twitter', () => {
  it('should create an instance', inject([UserService], (userService: UserService) => {
    let component = new TwitterComponent(userService);
    expect(component).toBeTruthy();
  }));
});
