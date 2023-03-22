import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Battuta } from "src/app/interfaces/interfaces";
import { JokeService } from "src/app/services/joke.service";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.scss"],
})
export class LeaderboardComponent implements OnInit, OnChanges {
  @Input() giocoTerminato: boolean = false;

  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log("this.giocoTerminato: ", this.giocoTerminato);

    this.sortByKey(this.jokeService.battute);

    console.log("this.jokeService.battute: ", this.jokeService.battute);
  }

  sortByKey(battute: Battuta[]) {
    let len = battute.length - 1;
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        let ifcheck = false;

        const battuta = battute[i];
        const battutaNext = battute[i + 1];
        if (battuta?.nVotoP && battutaNext?.nVotoP) {
          if (battuta?.nVotoP < battutaNext?.nVotoP) {
            ifcheck = true;
          }
        }

        if (ifcheck) {
          const temp = battute[i];
          battute[i] = battute[i + 1];
          battute[i + 1] = temp;

          swapped = true;
        }
      }
      len--;
    } while (swapped);

    return battute;
  }
}
