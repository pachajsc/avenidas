import { Component, OnInit } from '@angular/core';
import { MockAvenidasService } from '../../services/mock-avenidas.service';
import { IAvenidas } from '../../interfaces/avenidas';
import { Select, Store } from '@ngxs/store';
import { GetAvenues, SetLanguage } from './../../../state/avenues.actions';
import { AvenuesState } from '../../../state/avenues.state';
import { Observable } from 'rxjs';
import {itemsAvenidas} from '../../utils'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MockAvenidasService],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  @Select(AvenuesState.getItemsAvenues) itemsAvenidas$: Observable<any>;
  @Select(AvenuesState.getAvenues) avenues$: Observable<any>;
  @Select(AvenuesState.getLanguage) stateLanguage$: Observable<string>;

  avenidas: IAvenidas[] = [];
  itemsAvenidas: any = itemsAvenidas;
  language: string = '';

  ngOnInit() {
    try {
      this.store.dispatch(new GetAvenues());
      this.stateLanguage$.subscribe((res) => (this.language = res));
      this.handleSelectLanguage(this.language);
    } catch (error) {
      console.error(error);
    }
  }

  handleSelectLanguage(language): void {
    this.store.dispatch(new SetLanguage(language));
    this.itemsAvenidas$.subscribe(
      (itemsAvenidas) => (this.itemsAvenidas = itemsAvenidas[language]),
      (error) => {
        throw error;
      }
    );
    this.avenues$.subscribe(
      (avenues) => (this.avenidas = avenues[language]),
      (error) => {
        throw error;
      }
    );
  }

  selectLanguage(select: string) {
    this.handleSelectLanguage(select);
  }
}
