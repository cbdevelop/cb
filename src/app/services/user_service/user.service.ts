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
export class UserService {

    public jwtToken: string;

    constructor(private http: Http) {
        const isUser:any = JSON.parse(localStorage.getItem('currentUser'));
        if (isUser) {
            this.jwtToken = isUser.token;
        }
    }

    register(_user: User) {
        return this.http.post(httpUrl + 'register', JSON.stringify(_user), httpOptions)
        .pipe(
            map((response: Response) => response.json()),
              catchError(this.handleError)
          );

    }

    // getUser(_id: string) {
    //     return this.http.get(httpUrl + 'api/user/' + _id, httpOptions)
    //     .pipe(
    //         map((response: Response) => response.json()),
    //           catchError(this.handleError)
    //       );
          
    // }

    // getProfile() {
    //     return this.http.get(httpUrl + 'api/profile', httpOptions)
    //     .pipe(
    //         map((response: Response) => response.json()),
    //           catchError(this.handleError)
    //       );
    // }

    // updateUser(_id: string, _user: User) {
    //     return this.http.put(httpUrl + 'api/user/' + _id, JSON.stringify(_user), httpOptions)
    //     .pipe(
    //         map((response: Response) => response.json()),
    //           catchError(this.handleError)
    //       );
    // }

    // updatePassword(_id: string, _user: User) {
    //     return this.http.put(httpUrl + 'api/password/' + _id, JSON.stringify(_user), httpOptions)
    //     .pipe(
    //         map((response: Response) => response.json()),
    //           catchError(this.handleError)
    //       );
    // }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}    