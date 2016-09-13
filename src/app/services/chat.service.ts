import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Chat } from '../models/chat';

@Injectable()
export class ChatService {
  chat: Chat;
  private chatUrl = 'http://localhost:3000/api/chats';

  constructor(private http: Http) { }

  send (chat: Chat): Observable<Chat> {
    let headers = new Headers({ 
      'Content-Type': 'application/json',
      'x-access-token':  localStorage.getItem('authToken') 
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.chatUrl, chat, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getChats (): Observable<Chat> {
    let headers = new Headers({ 
      'Content-Type': 'application/json',
      'x-access-token':  localStorage.getItem('authToken') 
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.chatUrl, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
