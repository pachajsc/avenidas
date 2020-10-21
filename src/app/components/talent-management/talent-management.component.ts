import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';

@Component({
  selector: 'app-talent-management',
  templateUrl: './talent-management.component.html',
  styleUrls: ['./talent-management.component.css'],
})
export class TalentManagementComponent implements OnInit {
  constructor() {}
  @Input() avenida: IAvenidas;
  ngOnInit(): void {}
}
