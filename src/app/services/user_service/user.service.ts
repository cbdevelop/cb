import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { User } from "../../shared/models/user.model";
import { HttpClient } from "@angular/common/http";


const httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
};

const httpUrl: string = "http://localhost:3030/";

@Injectable()
export class UserService {

    public jwtToken: string;
    public userId = null;

    constructor(private http: HttpClient) {
        const isUser: any = JSON.parse(localStorage.getItem('currentUser'));
        if (isUser) {
            this.jwtToken = isUser.token;
        }
    }

    // register(_user: User) {
    //     return this.http.post(httpUrl + 'register', JSON.stringify(_user))
    //         .pipe(
    //         map((response: Response) => response.json()),
    //         catchError(this.handleError)
    //         );

    // }

    // private handleError(error: Response) {
    //     console.error(error);
    //     return Observable.throw(error.json(). || 'Server error');
    // }


}    