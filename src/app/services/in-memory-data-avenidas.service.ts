import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataAvenidasService extends InMemoryDbService {
  createDb() {
    const avenidas = {
      result: {
        totalAvenues: 6,
        avenues: [
          {
            name: 'Customer Centricity',
            totalIniciatives: 2,
            iniciatives: [
              {
                id: '5f8f1f0310b61032041995d5',
                language: {
                  es: {
                    name: 'Visión 360',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Visão 360',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-20T16:52:15.466Z',
                updatedAt: null,
                subIniciatives: [
                  {
                    language: {
                      es: {
                        name: 'Comprobación del estado del proceso empresarial',
                        description:
                          'Solicitud de gestión online de información relativa a la salud de al menos 2 procesos productivos de negocio.',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                      },
                      pt: {
                        name: 'Health Check de processo de negocios',
                        description:
                          'Aplicação para gestão online das informações pertinentes à saúde de ao menos 2 processos de negócio produtivos.',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: 'img-1.jpg',
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'azure.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                  {
                    language: {
                      es: {
                        name: 'Visión tecnológica 360 de los locales',
                        description:
                          'Visión online de los equipos de comunicación con su ubicaciones físicas y estado. Piloto de algunas cuentas.',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                      },
                      pt: {
                        name: 'Visão 360 tecnológica das instalações',
                        description:
                          'Visão online dos equipamentos de comunicação com suas localizações físicas e status. Piloto de algumas contas.',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: 'img-2.jpg',
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'azure.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                  {
                    language: {
                      es: {
                        name: 'SAP SOLMAN indicadores de Negocio',
                        description:
                          'Dashboard de Procesos CORE de SAP enfoque Negocio',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                      },
                      pt: {
                        name: 'Indicadores de negócios SAP SOLMAN',
                        description:
                          'SAP CORE Process Dashboard Foco comercial',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: 'img-3.jpg',
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'azure.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                  {
                    language: {
                      es: {
                        name: 'Visibilidad de Tráfico',
                        description:
                          'Visivilidad de tráfico en tiendas, composición y estadísticas de uso.',
                        responsable: 'Fabrinio Andes',
                        state: 'En Desarrollo',
                        impact: 'Personas',
                        scope: 'Operaciones Brasil',
                        country: 'country español',
                        businessUnit: 'Unidad de negocio español',
                        flag: 'bandera español',
                      },
                      pt: {
                        name: 'Visibilidade do trânsito',
                        description:
                          'Visibilidade do tráfego da loja, composição e estatísticas de uso.',
                        responsable: 'Fabrinio Andes',
                        state: 'Em desenvolvimento',
                        impact: 'Pessoas',
                        scope: 'Operações Brasil',
                        country: 'country portugues',
                        businessUnit: 'Unidad de negocio portugues',
                        flag: 'bandera portugues',
                      },
                    },
                    createdAt: '2020-10-21T16:18:39.683Z',
                    updatedAt: '2020-10-21T16:18:39.683Z',
                    _id: '5f905f60866a472dbc2875a6',
                    files: [
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200326-WA0012.jpg',
                        name: 'IMG-20200326-WA0012.jpg',
                        extension: 'jpg',
                      },
                      {
                        path:
                          '/home/pancho/Documentos/epidata/Proyectos/cencosud/app/config/../files/5f905f60866a472dbc2875a6-IMG-20200325-WA0055.jpg',
                        name: 'IMG-20200325-WA0055.jpg',
                        extension: 'jpg',
                      },
                    ],
                    imagen: 'img-4.jpg',
                    iniciativeId: '5f8dcae14387ab3ff4ad862a',
                    url: 'azure.com',
                    implementationEndDate: '2020-10-21',
                    userId: '5f89fb4a585cfe15fdf45198',
                    __v: 0,
                  },
                ],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Customer Centricity',
                  __v: 0,
                },
                totalSubiniciatives: 4,
              },
              {
                id: '5f901e6b878ef3191d792441',
                language: {
                  es: {
                    name: 'Interación Directa y Personalización',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Interação direta e personalização',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-21T11:41:04.389Z',
                updatedAt: null,
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Customer Centricity',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Cyberseguridad y Compliance',
            totalIniciatives: 2,
            iniciatives: [
              {
                id: '5f8f1f0310b61032041995d5',
                language: {
                  es: {
                    name: 'Compiliance Regulatorio',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Conformidade regulatória',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-20T16:52:15.466Z',
                updatedAt: null,
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Cyberseguridad y Compliance',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f901e6b878ef3191d792441',
                language: {
                  es: {
                    name: 'Prevencion de Cyberamenazas',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Prevenção de ameaças cibernéticas',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-21T11:41:04.389Z',
                updatedAt: null,
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f8a0ad04d167d181be7247b',
                  name: 'Cyberseguridad y Compliance',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Estrategia digital',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Ecosistema de Colaboración Digital',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Ecossistema de colaboração digital',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Automatización de Procesos de Negocio',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Automação de Processos de Negócios',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Digitalización de Experiencia de Cliente',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Digitalização da Experiência do Cliente',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Estrategia Tecnológica',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Mapa de Obsolescencia',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Mapa de Obsolescência',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Migración de Cloud',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Migração de Cloud',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Racionalización de Aplicaciones',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Racionalizando aplicativos',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Gestión de Talento',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Atracción, retención y Desarrollo de Talento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Atração, retenção e desenvolvimento de talentos',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Identificación y Gestión de Talento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Identificação e gestão de talentos',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Plan de Reconocimiento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Plano de Reconhecimento',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
          {
            name: 'Nuevo Modelo TI',
            totalIniciatives: 3,
            iniciatives: [
              {
                id: '5f8dcae14387ab3ff4ad862a',
                language: {
                  es: {
                    name: 'Gestión de OPEX',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Gestão OPEX',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: '2020-10-21T11:42:37.297Z',
                subIniciatives: [],
                user: {
                  _id: '5f89fb4a585cfe15fdf45198',
                  username: 'admin',
                  password:
                    '$2b$12$Pj0rItPT9yyNOM2MLwWwxelGRQR7Ar8SOCCQCyHFRUA6C6OOcqZa.',
                  fullName: 'Admin',
                  email: '',
                  __v: 0,
                },
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcc7e4387ab3ff4ad862b',
                language: {
                  es: {
                    name: 'Gestión de PROYECTOS CAPEX',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Gestão de CAPEX PROJETO',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:18:38.433Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
              {
                id: '5f8dcd074f507f4084a52e65',
                language: {
                  es: {
                    name: 'Gobierno TI',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                  pt: {
                    name: 'Governança de TI',
                    description:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                  },
                },
                createdAt: '2020-10-19T17:29:37.676Z',
                updatedAt: null,
                subIniciatives: [],
                user: false,
                avenue: {
                  _id: '5f89fbbd4d167d181be72477',
                  name: 'Estrategia digital',
                  __v: 0,
                },
                totalSubiniciatives: 0,
              },
            ],
          },
        ],
      },
    };


    return { avenidas };
  }
}
