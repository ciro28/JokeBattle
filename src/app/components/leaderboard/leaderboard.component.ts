import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Battuta } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit, OnChanges {
  @Input() giocoTerminato: boolean = false;

  constructor(
    public jokeService: JokeService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('this.giocoTerminato: ', this.giocoTerminato);
  }
}
