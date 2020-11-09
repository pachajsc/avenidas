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
import { AvenuesService } from '../app/services';

const lang = navigator.languages.filter(
  (lang) => lang === 'es' || lang === 'pt'
);

export class AvenuesStateModel {
  public selectedIniciatives: any[];
  public selectedSubIniciatives: any;
  public itemsAvenues: any;
  public avenues: any;
  public language: string;
  public textsMock: any;
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
        linkEs: 'Portugués',
        linkPt: 'Español',
        titleSectionAvenues: 'Nuestras Avenidas',
        infoSectionAvenues: '',
        buttonBack: 'Volver',
        newITModel: {
          title: 'Nuevo Modelo TI',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        cybersecurity: {
          title: 'Cyberseguridad y Compliance',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        technologyStrategy: {
          title: 'Estratégia Tecnológica',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        talentManagement: {
          title: 'Gestión Talento',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        digitalStrategy: {
          title: 'Estrategia Digital',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        centricityConsumer: {
          title: 'Custumer Centricity',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        detailTextSubIniciatives: {
          titleFile: 'Archivos disponibles',
          buttonText: 'Conozca la Iniciativa',
          responsable: 'Responsable sub iniciativa',
          state: 'Estado',
          impact: 'Impacto',
          scope: 'Alcance',
          country: 'País',
          businessUnit: 'Unidad de negocio',
          flag: 'Bandera',
        },
      },
      pt: {
        textInitHero: 'Descobri-las…',
        titleHero: 'Avenidas Estratégicas de Sistemas',
        descriptionHero:
          'Neste portal encontrará toda a informação correspondente às iniciativas que decorrem dos objetivos da Gestão de Sistemas Corporativos.',
        textButtonHero: 'Quero conhecer as avenidas',
        linkEs: 'Português',
        linkPt: 'Espanhol',
        titleSectionAvenues: 'Nossas avenidas',
        infoSectionAvenues: '',
        buttonBack: 'Voltar',
        newITModel: {
          title: 'Novo Modelo de TI',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },

        cybersecurity: {
          title: 'Centrado no cliente',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        technologyStrategy: {
          title: 'Estratégia Tecnológica',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        talentManagement: {
          title: 'Gestão de Talentos',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        digitalStrategy: {
          title: 'Estratégia Digital',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },

        centricityConsumer: {
          title: 'Centricidade do cliente',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        detailTextSubIniciatives: {
          titleFile: 'Arquivos disponíveis',
          buttonText: 'Conheça a Iniciativa',
          responsable: 'Chefe da sub-iniciativa',
          state: 'Estado',
          impact: 'Impacto',
          scope: 'Escopo',
          country: 'País',
          businessUnit: 'Unidade de negócio',
          flag: 'Bandeira',
        },
      },
    },
  },
})
@Injectable()
export class AvenuesState {
  constructor(
    private readonly mockAvenidas: MockAvenidasService,
    private readonly service: AvenuesService
  ) {}

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
     
      this.service.getAvenidas().subscribe(
        (res) => {
          let avenuesEs = [];
          let avenuesPt = [];
          let totalAvenues = res.result.totalAvenues;
          let totalIniciatives = 0;
          let totalSubIniciatives = 0;

          for (const [index, value] of res.result.avenues.entries()) {
            totalIniciatives += value.totalIniciatives;
            let modelAvenuesEs = {
              title: value.name,
              src: `assets/image/icono-avenidas-${index + 1}.png`,
              class: `circle-icon-${index + 1}`,
              href: navHref.find((e) => e.id === index + 1).href,
              path: value.path,
              iniciativas: value.iniciatives.map((value) => {
                totalSubIniciatives += value.totalSubiniciatives;
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
                            image: sub.imagen
                              ? sub.imagen
                              : 'assets/image/empty_image.jpg',
                            description: sub.language.es.description,
                            responsable: sub.language.es.responsable,
                            state: sub.language.es.state,
                            impact: sub.language.es.impact,
                            scope: sub.language.es.scope,
                            country: sub.language.es.country,
                            businessUnit: sub.language.es.businessUnit,
                            flag: sub.language.es.flag,
                            files: sub.files,
                            path: sub.language.es.path,
                            url: sub.url,
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
                            image: sub.imagen
                              ? sub.imagen
                              : 'assets/image/empty_image.jpg',
                            description: sub.language.pt.description,
                            responsable: sub.language.pt.responsable,
                            state: sub.language.pt.state,
                            impact: sub.language.pt.impact,
                            scope: sub.language.pt.scope,
                            country: sub.language.pt.country,
                            businessUnit: sub.language.pt.businessUnit,
                            flag: sub.language.pt.flag,
                            files: sub.files,
                            path: sub.language.pt.path,
                            url: sub.url,
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
          let infoSectionAvenuesPt = `O portal é composto por <b>${totalAvenues}</b> objetivos denominados avenidas, dos quais emergem <b>${totalIniciatives}</b> iniciativas-chave e <b>${totalSubIniciatives}</b> sub-iniciativas.`;
          let infoSectionAvenuesEs = `El portal esta compuesto por <b>${totalAvenues}</b> objetivos llamados avenidas, de las cuales se desprenden <b>${totalIniciatives}</b> iniciativas clave y <b>${totalSubIniciatives}</b> sub-iniciativas.`;

          const state = getState();
          setState({
            ...state,
            avenues: {
              ...state.avenues,
              es: avenuesEs,
              pt: avenuesPt,
            },
            textsMock: {
              ...state.textsMock,
              es: {
                ...state.textsMock.es,
                infoSectionAvenues: infoSectionAvenuesEs,
              },
              pt: {
                ...state.textsMock.pt,
                infoSectionAvenues: infoSectionAvenuesPt,
              },
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
