import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AvenuesState } from '../../../state/avenues.state';
import {
  GetAvenues,
  SetIniciatives,
  SetSubIniciatives,
  SetLanguage,
} from '../../../state/avenues.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-initiatives',
  templateUrl: './sub-initiatives.component.html',
  styleUrls: ['./sub-initiatives.component.css'],
})
export class SubInitiativesComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}

  avenuePath: string = '';
  subIniciatives: any[] = [];
  volverPath: string = '';
  path: string = '';
  description: string = '';
  title: string = '';
  loading: boolean = false;
  params: any = {};
  language: string = '';

  @Select(AvenuesState.selectedIniciatives) subIniciatives$: Observable<any[]>;
  @Select(AvenuesState.getItemsAvenues) itemsAvenidas$: Observable<any>;
  @Select(AvenuesState.getAvenues) avenues$: Observable<any>;

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      let params = {};
      for (const [key, value] of Object.entries(res.params)) {
        params = { ...params, [key]: value };
      }
      this.params = params;
    });
    this.render();
  }

  handleGoToSudIniciativeDetail(detail, avenuePath) {
    let data = {
      detail,
      avenuePath: `${avenuePath} / ${this.title} `,
      path: this.path,
    };
    this.store.dispatch(new SetSubIniciatives(data));
    this.router.navigate([`${this.path}/${detail.path}`]);
  }

  toLink(url: string) {
    return url;
  }

  render() {
    this.subIniciatives$.subscribe((res: any) => {
      if (!res) {
        this.reload();
      } else {
        let subIniciativas = [];
        this.volverPath = res.iniciative.href;
        this.description = res.iniciative.description;
        this.title = res.iniciative.title;
        this.path = res.path;
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
        this.avenuePath = `Avenidas Estratégicas / ${res.avenida.title}`;
        this.document.title = `Avenidas Estratégicas | ${res.avenida.title} | ${res.iniciative.title}`;
        this.loading = true;
      }
    });
  }

  reload(): void {
    this.store.dispatch(new GetAvenues());
    this.avenues$.subscribe((res) => {
      let language = null;
      res['es'].map((es) => {
        if (es.path === this.params.avenue) 
          es.iniciativas.map((i) => {
            if (i.path === this.params.iniciative) 
              language = 'es';
          });
      });
      if (!language) {
        res['pt'].map((pt) => {
          if (pt.path === this.params.avenue) 
            pt.iniciativas.map((p) => {
              if (p.path === this.params.iniciative) 
                language = 'pt';
            });
        });
      }
      if (language) {
        this.store.dispatch(new SetLanguage(language));
        this.itemsAvenidas$.subscribe(
          (avenues) => {
            Object.values(avenues[language]).map((value: any) => {
              if (value.path === this.params.avenue) {
                let iniciative;
                for (const i of value.iniciativas) {
                  if (i.path === this.params.iniciative) {
                    iniciative = i;
                  }
                }
                let subInicitive: any = {
                  iniciative,
                  avenida: { path: value.path, title: value.title },
                  path: `${value.path}/${iniciative.path}`,
                };
                this.store.dispatch(new SetIniciatives(subInicitive));
                this.render();
              }
            });
          },
          (error) => {
            throw error;
          }
        );
      }
    });
  }
}
