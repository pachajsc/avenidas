import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';

@Component({
  selector: 'app-digital-strategy',
  templateUrl: './digital-strategy.component.html',
  styleUrls: ['./digital-strategy.component.css'],
})
export class DigitalStrategyComponent implements OnInit {
  constructor() {}
  @Input() avenida: IAvenidas;
  ngOnInit(): void {}
}
