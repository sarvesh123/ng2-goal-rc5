import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:3000/api/users';
  private twitterAuthUrl = 'http://localhost:3000/api/auth/twitter';
  currentUser: User;

  constructor(private http: Http, private router: Router) { }

  addUser (name: string, email: string, password: string): Observable<User> {
    let body = { 
      name: name,
      email: email,
      password: password
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.usersUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  login (email: string, password: string): Observable<User> {
    let body = { 
      email: email,
      password: password
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.usersUrl + '/login', body, options)
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

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser = user;
  }

    onSubmitSuccess(res) {
        localStorage.setItem('authToken', res.token);
        this.setUser(res.user);
        this.router.navigate(['']);
    }

    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.router.navigate(['']);
    }

    initTwitterLogin() {
        window.location.href = this.twitterAuthUrl;
    }
}
