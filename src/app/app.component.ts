import { Component, Input } from '@angular/core';
import { Battuta } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JokeBattle';
 
  battute?: Battuta[] = [];
  public giocoTerminato: boolean = false;
  getBattute(event: any) {
    console.log(event);
    this.battute = event;
  }

  setGiocoTerminato(event: any) {
    this.giocoTerminato = event;
  }
}
