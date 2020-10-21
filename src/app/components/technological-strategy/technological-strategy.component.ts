import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';

@Component({
  selector: 'app-technological-strategy',
  templateUrl: './technological-strategy.component.html',
  styleUrls: ['./technological-strategy.component.css'],
})
export class TechnologicalStrategyComponent implements OnInit {
  constructor() {}
  @Input() avenida: IAvenidas;
  ngOnInit(): void {}
}
