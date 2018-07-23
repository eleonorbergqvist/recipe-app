import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return !!this.sessionService.getToken();
  }
}
