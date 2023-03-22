import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JokeBattleComponent } from './joke-battle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    JokeBattleComponent,
  ],
  declarations: [JokeBattleComponent]
})
export class JokeBattleModule {}