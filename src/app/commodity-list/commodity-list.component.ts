import { Component, OnInit } from '@angular/core';
import { commodity } from './commodity';

@Component({
  selector: 'app-commodity-list',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.css']
})
export class CommodityListComponent implements OnInit {

  selectedCommodity: commodity;

  commodities=[
    new commodity(1,'Gold'),
    new commodity(2,'Silver'),
    new commodity(3,'Copper'),
  ];
  

  constructor() { }

  ngOnInit() {
    this.selectedCommodity=this.commodities[1];
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

}
