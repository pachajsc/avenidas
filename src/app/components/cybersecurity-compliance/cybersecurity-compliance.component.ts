import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';

@Component({
  selector: 'app-cybersecurity-compliance',
  templateUrl: './cybersecurity-compliance.component.html',
  styleUrls: ['./cybersecurity-compliance.component.css'],
})
export class CybersecurityComplianceComponent implements OnInit {
  constructor() {}
  @Input() avenida: IAvenidas;
  ngOnInit(): void {}
}
