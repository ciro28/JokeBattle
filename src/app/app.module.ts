import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeBattleModule } from './components/joke-battle/joke-battle.module';
import { JokeCardModule } from './components/joke-card/joke-card.module';
import { JokeService } from './services/joke.service';
import { LeaderboardModule } from './components/leaderboard/leaderboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokeBattleModule,
    JokeCardModule,
    LeaderboardModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
