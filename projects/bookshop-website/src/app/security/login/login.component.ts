import {Component, OnInit} from '@angular/core';
import {Credentials} from "../../models/credentials";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoginResponse} from "../../models/login-response";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    credentials: Credentials = {email: '', password: ''};

    constructor(private authService: AuthService, private router:Router) {
    }

    ngOnInit() {
    }

    login(form: NgForm) {
        if (form.valid) {
            this.authService.
            login(this.credentials).
            subscribe((loginResponse: LoginResponse) => {
              this.router.navigate(['home']);
            });
        }

    }
}
