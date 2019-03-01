import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  logar() {
    console.log('test');
    this.authenticationService.userAuthentication()
      .subscribe(result => {
        console.log(result);
      });
  }

  ngOnInit() { }
}
