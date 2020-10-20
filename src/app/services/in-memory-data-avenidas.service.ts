import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataAvenidasService extends InMemoryDbService {
  createDb() {
    const avenidas = [
      {
        id: 1,
        title: 'Costumer Centricity',
        iniciativas: [
          {
            title: 'Visión 360',
            subIniciativas: [
              {
                title: 'Health Check de processo de negocios',
                image: '',
                description: 'Aplicacion para gestion online',
                details: {
                  resposable: 'Fabrinio Andes',
                  estado: 'En Desarrollo',
                  impacto: 'Personas',
                  alcance: 'Operaciones Brasil',
                  archivos: [
                    { path: '', file: '' },
                    { path: '', file: '' },
                    { path: '', file: '' },
                    { path: '', file: '' },
                    { path: '', file: '' },
                  ],
                },
              },
              {
                title: 'Visión tecnológica 360 de los locales',
                image: '',
                description:
                  'Visión online de los equipos de comunicación con su ubicaciones físicas y estado. Piloto de algunas cuentas.',
                details: {},
              },
              {
                title: 'SAP SOLMAN indicadores de Negocio',
                image: '',
                description:
                  'Dashboard de Procesos CORE de SAP enfoque Negocio',
                details: {},
              },
              {
                title: 'Visibilidad de Tráfico',
                image: '',
                description:
                  'Visivilidad de tráfico en tiendas, composición y estadísticas de uso.',
                details: {},
              },
            ],
          },
          {
            title: 'Interación Directa y Personalización',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
        ],
      },
      {
        id: 2,
        title: 'CyberSeguridad y Compiliance',
        iniciativas: [
          {
            title: 'Compiliance Regulatorio',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Prevencion de Cyberamenazas',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
        ],
      },
      {
        id: 3,
        title: 'Estrategia Digital',
        iniciativas: [
          {
            title: 'Ecosistema de Colaboración Digital',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Automatización de Procesos de Negocio',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Digitalización de Experiencia de Cliente',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
        ],
      },
      {
        id: 4,
        title: 'Estrategia Tecnológica',
        iniciativas: [
          {
            title: 'Mapa de Obsolescencia',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Migración de Cloud',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Racionalización de Aplicaciones',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
        ],
      },
      {
        id: 5,
        title: 'Gestión de Talento',
        iniciativas: [
          {
            title: 'Atracción, retención y Desarrolo de Talemto',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Identificación y Gestión de Talento',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Plan de Reconocimiento',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
        ],
      },
      {
        id: 6,
        title: 'Nuevo Modelo TI',
        iniciativas: [
          {
            title: 'Gestión de OPEX',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Gestión de PROYECTOS CAPEX',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
          {
            title: 'Gobierno TI',
            subIniciativas: [{ title: '', description: '', details: {} }],
          },
        ],
      },
    ];

    return { avenidas };
  }
}
