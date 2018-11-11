import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';


  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.userName, this.password).subscribe(res => {
      if (res === true) {
        this.router.navigateByUrl('/');
      } else {
        alert('wrong username or password');
      }
    }, err => {
      console.log(err);
    });
  }


}
