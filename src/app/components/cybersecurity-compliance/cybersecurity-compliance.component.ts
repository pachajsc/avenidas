import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';
import { Router } from '@angular/router';
import { SetIniciatives } from '../../../state/avenues.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-cybersecurity-compliance',
  templateUrl: './cybersecurity-compliance.component.html',
  styleUrls: ['./cybersecurity-compliance.component.css'],
})
export class CybersecurityComplianceComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}
  @Input() avenida: IAvenidas;
  ngOnInit(): void {}

  handleGotoSubIniciative(iniciative, avenida) {
    let subInicitive: any = {
      iniciative,
      avenida,
    };
    this.store.dispatch(new SetIniciatives(subInicitive));
    this.router.navigate(['/subiniciative']);
  }
}
