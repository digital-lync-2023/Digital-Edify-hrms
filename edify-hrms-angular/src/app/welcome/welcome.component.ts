import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(private router: Router,private auth: AuthService) {}

  ngOninit() {}

  login() {
    // this.router.navigate(['login']);
    this.auth.loginWithRedirect();
  }
}
