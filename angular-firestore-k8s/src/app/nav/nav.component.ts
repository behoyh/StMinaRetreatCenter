import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input()
  Transparent: Boolean;

  CSS: string;

  constructor() {
      this.CSS = "navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent";
   }

  ngOnInit() {
    if (!this.Transparent)
    {
      this.CSS = "navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color";
    }
  }

}
