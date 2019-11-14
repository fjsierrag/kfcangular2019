import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserProfile} from "../../models/user-profile";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  userProfile: UserProfile;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUerProfile().subscribe(userProfile=>{
      this.userProfile=userProfile;
    });
  }

  logout(){
    this.authService.logout();
    window.location.href = "/";
  };
}
