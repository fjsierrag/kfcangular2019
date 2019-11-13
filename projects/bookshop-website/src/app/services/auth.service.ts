import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {BehaviorSubject, Observable} from "rxjs";
import {Credentials} from "../models/credentials";
import {LoginResponse} from "../models/login-response";
import {UserProfile} from "../models/user-profile";

const URL = "https://immense-forest-87642.herokuapp.com/users";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUserProfileSubject: BehaviorSubject<UserProfile>;
    currentUserProfile: Observable<UserProfile>;

    constructor(private http: HttpClient) {
        this.currentUserProfileSubject = new BehaviorSubject(null);
        this.currentUserProfile = this.currentUserProfileSubject.asObservable();
    }

    getCurrentUerProfile(): Observable<UserProfile> {
        return this.currentUserProfile;
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(URL, user);
    }

    //login(credentials: Credentials): Observable<LoginResponse>{
    login(credentials: Credentials) {


        return this.http.post<LoginResponse>(`${URL}/login`, credentials)
            .subscribe((res: LoginResponse) => {
                localStorage.setItem('AUTH-TOKEN', res.token);
                this.http.get<UserProfile>(`${URL}/me`)
                    .subscribe((userProfile: UserProfile) => {
                        this.currentUserProfileSubject.next(userProfile);
                    });
            });
    }
}
