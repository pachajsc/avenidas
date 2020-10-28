import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AvenuesState } from '../../../state/avenues.state';
import { SetSubIniciatives } from '../../../state/avenues.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-initiatives',
  templateUrl: './sub-initiatives.component.html',
  styleUrls: ['./sub-initiatives.component.css'],
})
export class SubInitiativesComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  avenuePath: string = '';
  subIniciatives: any[] = [];
  volverPath: string = '';
  stickyNav: string = 'stickyNav';
  description: string = '';
  title: string = '';
  loading: boolean = false;

  @Select(AvenuesState.selectedIniciatives) subIniciatives$: Observable<any[]>;
  ngOnInit(): void {
    this.subIniciatives$.subscribe((res: any) => {
      if (!res) {
        this.router.navigate(['/']);
      } else {
        let subIniciativas = [];
        this.volverPath = res.iniciative.href;
        this.description = res.iniciative.description;
        this.title = res.iniciative.title;
        if (res.iniciative.subIniciativas.length > 0) {
          for (let sub of res.iniciative.subIniciativas) {
            let model = {
              ...sub,
              src: `assets/image/img-thumbnails/${sub.image}`,
            };
            subIniciativas.push(model);
          }
        }
        this.subIniciatives = subIniciativas;
        this.avenuePath = `Avenidas Estratégicas / ${res.avenida}`;
        // / ${res.iniciative.title}
        this.loading = true;
      }
    });
  }
  handleGoToSudIniciativeDetail(detail, avenuePath) {
    let data = { detail, avenuePath };
    this.store.dispatch(new SetSubIniciatives(data));
    this.router.navigate(['/subiniciative/detail']);
  }
}
