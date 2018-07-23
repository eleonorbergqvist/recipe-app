import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../login.service';
import { SessionService } from '../session.service';
import { Login }    from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new Login('', '');
  submitted = false;

  constructor(private router: Router, private loginService: LoginService, private sessionService: SessionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  newLogin() {
    this.loginService.login(this.model)
    .subscribe(x => {
      const { error, token } = x

      if (!error) {
        this.sessionService.setToken(token);
        this.router.navigate(['/recipes']);
      }
    });

    this.model = new Login('', '');
  }
}
