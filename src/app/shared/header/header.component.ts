import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public session: SessionService, private auth: AuthService) { }

  ngOnInit() {
    console.log(this.session.getUser());
  }

  public onSidenavToggle = () => {
    this.sidenavToggle.emit();
  }

  logout() {
    this.auth.logout();
  }

}
