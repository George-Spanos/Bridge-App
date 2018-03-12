import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {

  constructor() { }
  @Output() close = new Subject<void>();
  onClose() {
    this.close.next();
  }
  ngOnInit() {
  }

}
