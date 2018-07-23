import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';
import { RegisterService } from '../register.service';
import { Register }    from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new Register('', '', '');
  submitted = false;

  constructor(private router: Router, private sessionService: SessionService, private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  newRegister() {
    this.registerService.register(this.model)
    .subscribe(x => {
      const { error, token } = x

      if (!error) {
        this.sessionService.setToken(token);
        this.router.navigate(['/login']);
      }
    });

    this.model = new Register('', '', '');
  }


}
