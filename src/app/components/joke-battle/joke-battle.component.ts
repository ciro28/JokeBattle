import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';

const MILLISECONDI = 300000; // 5 minuti

@Component({
  selector: 'app-joke-battle',
  templateUrl: './joke-battle.component.html',
  styleUrls: ['./joke-battle.component.scss'],
})
export class JokeBattleComponent implements OnInit {
  public index: number = -2;
  public timeout: number = MILLISECONDI; // millesecondi
  public battuteFinite: boolean = false;
  private time: any;
  public giocoTerminato: boolean = false;

  @Output() resBattute = new EventEmitter();
  @Output() resGiocoTerminato = new EventEmitter();

  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {
    this.next();
  }

  next() {
    this.time = setInterval(() => {
      this.timeout -= 1000;

      if (this.timeout <= 0) {
        this.next();
        this.timeout = MILLISECONDI;
        clearInterval(this.time);
      }
    }, 1000);

    this.index += 2;
    if (this.index <= this.jokeService.battute.length - 1) {
      this.resBattute.emit([
        this.jokeService.battute[this.index],
        this.jokeService.battute[this.index + 1],
      ]);
    } else {
      this.battuteFinite = true;
      clearInterval(this.time);
    }
  }

  termina() {
    this.giocoTerminato = true;
    this.resGiocoTerminato.emit(this.giocoTerminato);
    clearInterval(this.time);
  }
}
