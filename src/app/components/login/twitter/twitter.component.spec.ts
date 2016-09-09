/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TwitterComponent } from './twitter.component';

describe('Component: Twitter', () => {
  it('should create an instance', () => {
    let component = new TwitterComponent();
    expect(component).toBeTruthy();
  });
});
