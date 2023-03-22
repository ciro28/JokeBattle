import { Component, Input, OnInit } from '@angular/core';
import { Battuta } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit {

  @Input() battute?: Battuta[] = [];
  @Input() giocoTerminato: boolean = false;
  
  constructor(
    public jokeService: JokeService
  ) { }

  ngOnInit(): void {
  }

}
