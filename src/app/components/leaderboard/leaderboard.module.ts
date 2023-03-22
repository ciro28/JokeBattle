import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaderboardComponent } from './leaderboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LeaderboardComponent,
  ],
  declarations: [LeaderboardComponent]
})
export class LeaderboardModule {}