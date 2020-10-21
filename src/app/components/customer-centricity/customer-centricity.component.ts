import { Component, OnInit, Input } from '@angular/core';
import { IAvenidas } from '../../interfaces/avenidas';

@Component({
  selector: 'app-customer-centricity',
  templateUrl: './customer-centricity.component.html',
  styleUrls: ['./customer-centricity.component.css'],
})
export class CustomerCentricityComponent implements OnInit {
  constructor() {}
  @Input() avenida: IAvenidas;
  ngOnInit(): void {}
}
