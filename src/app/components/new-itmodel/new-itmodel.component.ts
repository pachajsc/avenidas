import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';

@Component({
  selector: 'app-new-itmodel',
  templateUrl: './new-itmodel.component.html',
  styleUrls: ['./new-itmodel.component.css'],
})
export class NewITModelComponent implements OnInit {
  constructor() {}
  @Input() avenida: IAvenidas;
  ngOnInit(): void {}
}
