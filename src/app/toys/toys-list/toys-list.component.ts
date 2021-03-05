import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.css']
})
export class ToysListComponent implements OnInit {
  toysArray: any[] = [{"id": 1, "name": "pyramid", "price": 10, "type": "პირამიდები"},
  {"id": 2, "name": "teddy bear", "price": 50, "type": "რბილი"},
  {"id": 3, "name": "leggo", "price": 100, "type": "კონსტრუქტორი"}];
  constructor() { }

  ngOnInit(): void {
  }
  ToysAddHandler(toy : any)
  {
    this.toysArray.push(toy);
  }
}
