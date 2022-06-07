import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.sass']
})
export class RepeaterComponent implements OnInit {

  @Input("option") option: any;

  ngOnInit() {
  }
}
