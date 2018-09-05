import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Headers, Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from "../../shared/models/user.model";


const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

const httpUrl: string = "http://localhost:3030/"; 

@Injectable()
export class AuthService {
  public currentUser: User;
  public token: string;

  constructor(private http: Http) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(_user: User): Observable<boolean> {
    return this.http.post(httpUrl + 'api/login', JSON.stringify(_user), httpOptions)
      .pipe(
        map((response: Response) => {
          let resp = response.json();
          if (resp.success) {
            localStorage.setItem('currentUser', JSON.stringify(_user));
          }
          return resp.success;
        }),
        catchError(this.handleError)
      );
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    //this.token = null;
    localStorage.removeItem('currentUser');
  }
 
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
}


}
