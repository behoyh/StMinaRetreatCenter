import { Component, OnInit } from '@angular/core';

declare const create_tithely_widget: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var tw = create_tithely_widget();
  }

}
