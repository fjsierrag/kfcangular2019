import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {email: '', password:''};
  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  register(form: NgForm){
    console.log('Tratar de registrar');
    if(form.valid){
      let newUser=this.authService.register(this.user).subscribe(function(valor:User){
        console.log(valor);
      });

    }

  }

}
