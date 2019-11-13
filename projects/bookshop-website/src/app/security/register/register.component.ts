import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {email: '', password:''};
  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  register(form: NgForm){
    if(form.valid){
      // Primera forma
      // let newUser=this.authService.register(this.user).toPromise();

      //Segunda Forma
      this.authService.register(this.user).subscribe((user: User)=>{
        this.router.navigate(['login']);
        //this.router.navigateByUrl('/login');
      });
    }

  }

}
