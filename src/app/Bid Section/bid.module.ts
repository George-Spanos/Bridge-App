import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BidFormComponent } from './bid-form/bid-form.component';
import { BidThreadComponent } from './bid-thread/bid-thread.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticeformComponent } from './practiceform/practiceform.component';

@NgModule({
  declarations: [
      BidFormComponent,
      BidThreadComponent,
      PracticeComponent,
      PracticeformComponent],
  imports: [
  CommonModule,
  FormsModule,
  SharedModule]
})
export class BidModule {}
