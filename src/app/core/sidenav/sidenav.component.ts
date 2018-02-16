import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() close = new Subject<void>();
  constructor() { }
  onClose() {
    this.close.next();
  }
  ngOnInit() {
  }

}
