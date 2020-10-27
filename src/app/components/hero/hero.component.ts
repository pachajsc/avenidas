import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}
  @Output() selectLanguajeEvent = new EventEmitter<string>();
  @Input() lenguaje:boolean

  selectLanguaje(value: string) {
    this.selectLanguajeEvent.emit(value);
  }

  ngOnInit(): void {}
}
