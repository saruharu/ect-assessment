import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorter-display',
  templateUrl: './sorter-display.component.html',
  styleUrls: ['./sorter-display.component.scss']
})
export class SorterDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // Examples for testing purposes
  options1: any[] = [
    {
      name: "Book1",
      price: 32,
      authors: ["Author1", "Author2"]
    },
    {
      name: "Book2",
      price: 100,
      authors: ["Writer1"]
    },
    {
      name: "Book3",
      price: 65,
      authors: ["Author2", "Author3", "Author4"]
    },
    {
      name: "Book4",
      price: 200,
      authors: ["Writer2"]
    }
  ];

  options2: any[] = [
    {
      name: "Book1",
      price: 32
    },
    {
      name: "Book2",
      price: 100
    },
    {
      name: "Book3",
      price: 65
    },
    {
      name: "Book4",
      price: 200
    }
  ];

  options3: any[] = [
    {
      name: "Book1",
      price: 32,
      authors: ["Author1", "Author2"]
    },
    {
      name: "Book2",
      price: 100,
      authors: ["Writer1"]
    },
    {
      name: "Book3",
      price: 65,
      authors: ["Author2", "Author3", "Author4"]
    },
    {
      name: "Book4",
      price: 200,
      authors: ["Writer2"]
    }
  ];
}
