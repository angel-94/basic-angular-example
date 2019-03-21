import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = 'admin';
  password: string = 'admin';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      console.log('Success ---> ');
      this.router.navigate(['app/home']);
    } else {
      alert("Invalid credentials");
    }
  }

}
