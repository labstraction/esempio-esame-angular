import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() public beer?: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
