import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JokeCardComponent } from './joke-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    JokeCardComponent,
  ],
  declarations: [JokeCardComponent]
})
export class JokeCardModule {}