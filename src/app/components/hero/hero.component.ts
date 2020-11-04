import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Select } from '@ngxs/store';
import { AvenuesState } from '../../../state/avenues.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}
  @Select(AvenuesState.getTextsMock) stateTextsMock$: Observable<any>;
  @Select(AvenuesState.getLanguage) stateLanguage$: Observable<string>;
  @Output() selectLanguajeEvent = new EventEmitter<string>();
  @Input() lenguaje: boolean;
  textMock: any = {};
  language: string = '';

  selectLanguaje(value: string) {
    this.selectLanguajeEvent.emit(value);
    this.render();
  }

  ngOnInit(): void {
    this.render();
  }

  render(){
    this.stateLanguage$.subscribe((res) => (this.language = res));
    this.stateTextsMock$.subscribe(
      (res) => (this.textMock = res[this.language])
    );
  }
}
