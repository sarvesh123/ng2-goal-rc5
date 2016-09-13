/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { ChatService } from '../../services/chat.service';

describe('Component: Chat', () => {
  it('should create an instance', inject([ChatService], (chatService: ChatService) => {
    let component = new ChatComponent(chatService);
    expect(component).toBeTruthy();
  }));
});
