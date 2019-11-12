import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {Credentials} from "../models/credentials";
import {LoginResponse} from "../models/login-response";

const URL= "https://immense-forest-87642.herokuapp.com/users";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User>{
    return this.http.post<User>(URL, user);
  }

  login(credentials: Credentials): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${URL}/login`, credentials);
  }
}
