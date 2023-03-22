import { Injectable } from '@angular/core';
import { Battuta } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  public battute: Battuta[] = [
    {
      text: 'battuta 1',
    },
    {
      text: 'battuta 2',
    },
    {
      text: 'battuta 3',
    },
    {
      text: 'battuta 4',
    },
    {
      text: 'battuta 5',
    },
    {
      text: 'battuta 6',
    },
    {
      text: 'battuta 7',
    },
    {
      text: 'battuta 8',
    },
    {
      text: 'battuta 9',
    },
    {
      text: 'battuta 10',
    },
    {
      text: 'battuta 11',
    },
    {
      text: 'battuta 12',
    },
    {
      text: 'battuta 13',
    },
    {
      text: 'battuta 14',
    },
    {
      text: 'battuta 15',
    },
    {
      text: 'battuta 16',
    },
  ];

  constructor() {}

  votoPositivo(battuta: Battuta) {
    if (battuta.votoNegativo) {
      battuta.nVotoN ? (battuta.nVotoN--) : (battuta.nVotoN = 1);
      battuta.votoNegativo = false;
    }
    
    battuta.votoPositivo = !battuta.votoPositivo;
    if (battuta.votoPositivo) {
      battuta.nVotoP ? battuta.nVotoP++ : (battuta.nVotoP = 1);
    } else {
      battuta.nVotoP ? battuta.nVotoP-- : (battuta.nVotoP = 1);
    }
  }

  votoNegativo(battuta: Battuta) {
    if (battuta.votoPositivo) {
      battuta.nVotoP ? (battuta.nVotoP--) : (battuta.nVotoP = 1);
      battuta.votoPositivo = false;
    }

    battuta.votoNegativo = !battuta.votoNegativo;
    if (battuta.votoNegativo) {
      battuta.nVotoN ? battuta.nVotoN++ : (battuta.nVotoN = 1);
    } else {
      battuta.nVotoN ? battuta.nVotoN-- : (battuta.nVotoN = 1);
    }
  }
}
