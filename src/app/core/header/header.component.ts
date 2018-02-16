import { Component, OnInit, Output } from '@angular/core';
import { User } from '../../shared/Services/user.service';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() adminNavToggle = new Subject<void>();
  @Output() mobilenavToggle = new Subject<void>();
  constructor(public user: User) { }

  onToggleSidenav() {
    this.adminNavToggle.next();
  }
  onToggleMobilenav() {
    this.mobilenavToggle.next();
  }
  ngOnInit() {
  }
}
