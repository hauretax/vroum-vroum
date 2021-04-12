import { Component, OnInit, Input } from '@angular/core';
import {Car} from '../car'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car!:Car;
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.costOnYear();
  }

  costOnYear(){
    this.total = this.car.cost + this.car.fix;
  }

}
