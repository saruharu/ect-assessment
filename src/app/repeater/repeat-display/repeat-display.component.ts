import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'repeat-display',
  templateUrl: './repeat-display.component.html',
  styleUrls: ['./repeat-display.component.sass']
})
export class RepeatDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [{ name: "A" }, { name: "B" }, { name: "C" }];

}
