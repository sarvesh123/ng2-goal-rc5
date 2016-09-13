import { Component, OnInit } from '@angular/core';
import { Chat } from '../../models/chat';
import { ChatService } from '../../services/chat.service';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {
  chats: any = [];
  errorMessage: string;
  newchat: Chat;
  newMessage: string;

  constructor(private chatService: ChatService) { 
      this.newchat = {
        sender: { name: 'sarvesh', id: 1},
        message: null,
        receiver: { name: 'amol', id: 2}
      };
  }

  ngOnInit() {
  }

  send() {
    this.newchat.message = this.newMessage;
    this.chats.push(this.newchat);
    this.newMessage = '';
    this.chatService.send(this.chats)
                    .subscribe(
                      chats => chats,
                      error => this.errorMessage = <any>error);
  }
}
