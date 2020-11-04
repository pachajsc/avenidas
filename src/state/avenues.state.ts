import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  SetSubIniciatives,
  GetAvenues,
  SetIniciatives,
  SetLanguage,
} from './avenues.actions';
import { MockAvenidasService } from '../app/services/mock-avenidas.service';
import { navHref, itemsAvenidas } from '../app/utils/';

const lang= navigator.languages.filter(
  (lang) => lang === 'es' || lang === 'pt'
);

export class AvenuesStateModel {
  public selectedIniciatives: any[];
  public selectedSubIniciatives: any;
  public itemsAvenues: any;
  public avenues: any;
  public language: string;
  public textsMock:any;
}

@State<AvenuesStateModel>({
  name: 'avenues',
  defaults: {
    selectedIniciatives: null,
    selectedSubIniciatives: null,
    itemsAvenues: { es: {}, pt: {} },
    avenues: { es: [], pt: [] },
    language: lang.length > 0 ? lang[0] : 'pt',
    textsMock: {
      es: {
        textInitHero: 'Descubre las...',
        titleHero: 'Avenidas Estratégicas de Sistemas',
        descriptionHero:
          'En este portal podrás encontrar toda la información correspondiente a las iniciativas que se desprenden de los objetivos que tiene la Gerencia Corporativa de Sistemas.',
        textButtonHero: 'Quiero conocer las Avenidas',
        titleSectionAvenues: 'Nuestras Avenidas',
        infoSectionAvenues:
          'El portal esta compuesto por <b>6</b> objetivos llamados avenidas, de las cuales se desprenden <b>15</b> iniciativas clave y <b>76</b> sub-iniciativas.',
      },
      pt: {
        textInitHero: 'Descubra o ...',
        titleHero: 'Avenidas Estratégicas de Sistemas',
        descriptionHero:
          'Neste portal encontrará toda a informação correspondente às iniciativas que decorrem dos objetivos da Gestão de Sistemas Corporativos.',
        textButtonHero: 'Quero conhecer as avenidas',
        titleSectionAvenues: 'Nossas avenidas',
        infoSectionAvenues:
          'O portal é composto por <b>6</b> objetivos denominados avenidas, dos quais emergem <b>15</b> iniciativas-chave e <b>76</b> sub-iniciativas.',
      },
    },
  },
})
@Injectable()
export class AvenuesState {
  constructor(private readonly mockAvenidas: MockAvenidasService) {}

  itemsAvenidas = { es: itemsAvenidas, pt: itemsAvenidas };

  @Selector()
  public static getAvenues({ avenues }: AvenuesStateModel): any {
    return avenues;
  }

  @Selector()
  public static getItemsAvenues({ itemsAvenues }: AvenuesStateModel): any {
    return itemsAvenues;
  }

  @Selector()
  public static getLanguage({ language }: AvenuesStateModel): string {
    return language;
  }

  @Selector()
  public static getTextsMock({ textsMock }: AvenuesStateModel): any {
    return textsMock;
  }

  @Selector()
  public static selectedIniciatives({
    selectedIniciatives,
  }: AvenuesStateModel): any[] {
    return selectedIniciatives;
  }

  @Selector()
  public static selectedSubIniciatives({
    selectedSubIniciatives,
  }: AvenuesStateModel): any {
    return selectedSubIniciatives;
  }

  @Action(GetAvenues)
  getAvenues({ getState, setState }: StateContext<AvenuesStateModel>) {
    try {
      this.mockAvenidas.getAvenidas().subscribe(
        (res) => {
          let avenuesEs = [];
          let avenuesPt = [];

          for (const [index, value] of res.result.avenues.entries()) {
            let modelAvenuesEs = {
              title: value.name,
              src: `assets/image/icono-avenidas-${index + 1}.png`,
              class: `circle-icon-${index + 1}`,
              href: navHref.find((e) => e.id === index + 1).href,
              path: value.path,
              iniciativas: value.iniciatives.map((value) => {
                return {
                  title: value.language.es.name,
                  href: navHref.find((e) => e.id === index + 1).href,
                  path: value.language.es.path,
                  description: value.language.es.description,
                  subIniciativas:
                    value.subIniciatives.length > 0
                      ? value.subIniciatives.map((sub) => {
                          return {
                            title: sub.language.es.name,
                            image: sub.imagen,
                            description: sub.language.es.description,
                            responsable: sub.language.es.responsable,
                            state: sub.language.es.state,
                            impact: sub.language.es.impact,
                            scope: sub.language.es.scope,
                            files: sub.files,
                            path: sub.language.es.path,
                          };
                        })
                      : [],
                };
              }),
            };

            let modelAvenuesPt = {
              title: value.name,
              src: `assets/image/icono-avenidas-${index + 1}.png`,
              class: `circle-icon-${index + 1}`,
              href: navHref.find((e) => e.id === index + 1).href,
              path: value.path,
              iniciativas: value.iniciatives.map((value) => {
                return {
                  title: value.language.pt.name,
                  href: navHref.find((e) => e.id === index + 1).href,
                  path: value.language.pt.path,
                  description: value.language.pt.description,
                  subIniciativas:
                    value.subIniciatives.length > 0
                      ? value.subIniciatives.map((sub) => {
                          return {
                            title: sub.language.pt.name,
                            image: sub.imagen,
                            description: sub.language.pt.description,
                            responsable: sub.language.pt.responsable,
                            state: sub.language.pt.state,
                            impact: sub.language.pt.impact,
                            scope: sub.language.pt.scope,
                            files: sub.files,
                            path: sub.language.pt.path,
                          };
                        })
                      : [],
                };
              }),
            };
            this.itemsAvenidas = {
              ...this.itemsAvenidas,
              es: {
                ...this.itemsAvenidas.es,
                [`item${index + 1}`]: {
                  title: modelAvenuesEs.title,
                  path: modelAvenuesEs.path,
                  iniciativas: modelAvenuesEs.iniciativas,
                },
              },
              pt: {
                ...this.itemsAvenidas.pt,
                [`item${index + 1}`]: {
                  title: modelAvenuesPt.title,
                  path: modelAvenuesPt.path,
                  iniciativas: modelAvenuesPt.iniciativas,
                },
              },
            };
            avenuesEs.push(modelAvenuesEs);
            avenuesPt.push(modelAvenuesPt);
          }

          const state = getState();
          setState({
            ...state,
            avenues: {
              ...state.avenues,
              es: avenuesEs,
              pt: avenuesPt,
            },
            itemsAvenues: this.itemsAvenidas,
          });
        },
        (error) => {
          throw error;
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  @Action(SetSubIniciatives)
  setSubIniciative(
    { getState, patchState }: StateContext<AvenuesStateModel>,
    { payload }: SetSubIniciatives
  ) {
    const state = getState();
    patchState({ ...state, selectedSubIniciatives: payload });
  }

  @Action(SetIniciatives)
  setIniciatives(
    { getState, patchState }: StateContext<AvenuesStateModel>,
    { payload }: SetIniciatives
  ) {
    const state = getState();
    patchState({ ...state, selectedIniciatives: payload });
  }

  @Action(SetLanguage)
  setLanguage(
    { getState, patchState }: StateContext<AvenuesStateModel>,
    { payload }: SetLanguage
  ) {
    const state = getState();
    patchState({ ...state, language: payload });
  }
}
