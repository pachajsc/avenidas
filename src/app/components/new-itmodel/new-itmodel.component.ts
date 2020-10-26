import { Component, Input, OnInit } from '@angular/core';
import { IAvenidas } from 'src/app/interfaces/avenidas';
import { Router } from '@angular/router';
import { SetIniciatives } from '../../../state/avenues.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-new-itmodel',
  templateUrl: './new-itmodel.component.html',
  styleUrls: ['./new-itmodel.component.css'],
})
export class NewITModelComponent implements OnInit {
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
